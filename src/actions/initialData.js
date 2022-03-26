export const initialData = {
    boards: [
        {
            id: "board-1",
            columnOrder: ["column-2", "column-1", "column-3"],
            columns: [
                {
                    id: "column-1",
                    boardId: "board-1",
                    title: "To do column",
                    cardOrder: ["card-2", "card-1", "card-3", "card-4", "card-5", "card-6", "card-7"],
                    cards: [
                        {
                            id: "card-1", boardId: "board-1", columnId: "column-1", title: "Title of card 1", image:"https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/165869891_1125869027887737_2609379682427357032_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5IkM6up-lMQAX-MTD7Q&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_UfcQqiDiCt3OIS35b184p6Bh1NT0d1mIwSGulCVs-yQ&oe=6257A3D8"
                        },
                        {
                            id: "card-2", boardId: "board-1", columnId: "column-1", title: "Title of card 2", image: null
                        },
                        {
                            id: "card-3", boardId: "board-1", columnId: "column-1", title: "Title of card 3", image: null
                        },
                        {
                            id: "card-4", boardId: "board-1", columnId: "column-1", title: "Title of card 4", image: null
                        },
                        {
                            id: "card-5", boardId: "board-1", columnId: "column-1", title: "Title of card 5", image: null
                        },
                        {
                            id: "card-6", boardId: "board-1", columnId: "column-1", title: "Title of card 6", image: null
                        },
                        {
                            id: "card-7", boardId: "board-1", columnId: "column-1", title: "Title of card 7", image: null
                        },
                        {
                            id: "card-8", boardId: "board-1", columnId: "column-1", title: "Title of card 8", image: null
                        },
                        {
                            id: "card-9", boardId: "board-1", columnId: "column-1", title: "Title of card 9", image: null
                        },
                        {
                            id: "card-10", boardId: "board-1", columnId: "column-1", title: "Title of card 10", image: null
                        },
                        {
                            id: "card-11", boardId: "board-1", columnId: "column-1", title: "Title of card 11", image: null
                        },
                        {
                            id: "card-12", boardId: "board-1", columnId: "column-1", title: "Title of card 12", image: null
                        },
                        {
                            id: "card-13", boardId: "board-1", columnId: "column-1", title: "Title of card 13", image:"https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/165869891_1125869027887737_2609379682427357032_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5IkM6up-lMQAX-MTD7Q&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_UfcQqiDiCt3OIS35b184p6Bh1NT0d1mIwSGulCVs-yQ&oe=6257A3D8"
                        },
                    ]
                },
                {
                    id: "column-2",
                    boardId: "board-1",
                    title: "Working column",
                    cardOrder: ["card-8", "card-9", "card-10"],
                    cards: [
                        {
                            id: "card-8", boardId: "board-1", columnId: "column-1", title: "Title of card 8", image: null
                        },
                        {
                            id: "card-9", boardId: "board-1", columnId: "column-1", title: "Title of card 9", image: null
                        },
                        {
                            id: "card-10", boardId: "board-1", columnId: "column-1", title: "Title of card 10", image: null
                        }
                    ]
                },
                {
                    id: "column-3",
                    boardId: "board-1",
                    title: "Done column",
                    cardOrder: ["card-11", "card-12", "card-13"],
                    cards: [
                        {
                            id: "card-11", boardId: "board-1", columnId: "column-1", title: "Title of card 11", image: null
                        },
                        {
                            id: "card-12", boardId: "board-1", columnId: "column-1", title: "Title of card 12", image: null
                        },
                        {
                            id: "card-13", boardId: "board-1", columnId: "column-1", title: "Title of card 13", image: null
                        }
                    ]
                }
            ]
        }
    ]
}