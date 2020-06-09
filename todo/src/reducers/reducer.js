
export const initialState = {
    tasks: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                tasks: [...state.tasks,
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
                ]
            }

        case 'TOGGLE_COMPLETED':
            return {...state,
               tasks: state.tasks.map(item => {
                    // debugger
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    else {
                        return item;
                    }

                })
            }

            case 'DELETE_COMPLETED':
                return{
                    ...state,
                    tasks: state.tasks.filter(item => {
                                return (
                                    item.completed === false
                                )})
                                
                }

        default:
            return state
    }
}

// const clearCompletedTask = () => {
    // setSampleList(
    //     samplelist.filter(item => {
    //         return (
    //             item.completed === false

    //         )
    //     })
    // )

// }

//  samplelist.map(item => {
        //         if (item.id === taskID) {
        //             return {
        //                 ...item,
        //                 completed: !item.completed
        //             }
        //         }
        //         else {
        //             return item;
        //         }
        //     })











//junk 
// switch (action.type){
//     case 'ADD_TODO':
//     return [
//         ...state,
//         {
//             item: action.payload,
//             completed: false,
//             id: Date.now()
//         }
//     ]
//     case 'REMOVE_TODO':
//         return ( )
// }