// import React, { useState, useReducer } from "react";
// import Todo from "./Todo"
// import {initialState, reducer} from '../reducers/reducer'


// const TodoList = () => {
//     // const [samplelist, setSampleList] = useState([])
//     const[state, dispatch] = useReducer(reducer, initialState)


//     return (

//         <div className="todo-list">

//             {state.tasks.map(item => {
//                 // debugger
//                 return(
//                 <div 
//                 onClick={() => dispatch({ type:'TOGGLE_COMPLETED', payload: item.id})}
//                 key={item.id}
//                  className="task-item" 
//                 //  style={{ width: '20%' }}
//                  >
//                     <Todo item={item}/>
//                 </div>
//             )})}


//             <button className="button"
//             onClick={()=>dispatch({type:'DELETE_COMPLETED'})}
//             ><span>
//                 Clear
//                 </span>
//             </button>
//         </div>
//     );
// };

// export default TodoList;
