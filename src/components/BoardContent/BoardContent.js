import React from "react";
import { useState,useEffect } from "react";
import "./BoardContent.scss";
import Column from "components/Column/Column";
import {initialData} from "actions/initialData";
import _ from "lodash";
import { mapOrder } from "utilities/sorts";

function BoardContent() {
    const [board,setBoard] = useState({})
    const [columns,setColumns] =useState([])

    useEffect(()=>{
        const boardInitialData = initialData.boards.find(board=>board.id ==="board-1")
        if(boardInitialData){
            setBoard(boardInitialData)
            // sort lai mang cho match voi nhau
            mapOrder(boardInitialData.columns,boardInitialData.columnOrder,"id")
            setColumns(boardInitialData.columns)
        }
    },[])
    if(_.isEmpty(board)){
        return (
            <>
            <div className="not-found">Board not found</div>
            </>
        )
    }
    return (
        <div className="board-content">
            {columns && columns.length>0 && columns.map((column)=>{
                return(
                    <Column 
                        key={column.id}
                        column={column}
                    />
                )
            })}
        </div>
    )
}


export default BoardContent