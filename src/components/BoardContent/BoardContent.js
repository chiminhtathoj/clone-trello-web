import React from "react";
import { useState, useEffect } from "react";
import "./BoardContent.scss";
import Column from "components/Column/Column";
import { initialData } from "actions/initialData";
import _ from "lodash";
import { mapOrder } from "utilities/sorts";
import { Container, Draggable } from "react-smooth-dnd";

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardInitialData = initialData.boards.find(board => board.id === "board-1")
        if (boardInitialData) {
            setBoard(boardInitialData)
            // sort lai mang cho match voi nhau
            mapOrder(boardInitialData.columns, boardInitialData.columnOrder, "id")
            setColumns(boardInitialData.columns)
        }
    }, [])
    if (_.isEmpty(board)) {
        return (
            <>
                <div className="not-found">Board not found</div>
            </>
        )
    }
    const onColumnDrop = (dropResult) => {
      return console.log(dropResult);
    }
    return (
        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                dragHandleSelector=".column-drag-handle"
                getChildPayload={index => columns[index]}
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'cards-drop-preview'
                }}
            >
                {columns && columns.length > 0 && columns.map((column) => {
                    return (
                        <Draggable key={column.id}>
                            <Column
                                column={column}
                            />
                        </Draggable>
                    )
                })}
            </Container>
        </div>
    )
}


export default BoardContent