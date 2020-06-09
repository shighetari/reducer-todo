import React, { useState, useReducer } from "react";
import { initialState, reducer } from '../reducers/reducer'
import TodoList from './TodoList'
import Todo from "./Todo"

const TodoForm = () => {
    const [newTask, setNewTask] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const handleChanges = e => {
        setNewTask(e.target.value)
    };
    // console.log(newTask)

    const handleSubmit = e => {
        e.preventDefault()
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    className="input"
                    value={newTask}
                    onChange={handleChanges}
                />

                <button
                    className="add-button"
                    onClick={() => dispatch({ type: 'ADD_TODO', payload: newTask })}
                >Add</button>
            </form>
            {/* <TodoList /> below -->  */}
            <div className="todo-list">

                {state.tasks.map(item => {
                    // debugger
                    return (
                        <div
                            onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id })}
                            key={item.id}
                            className="task-item"
                        //  style={{ width: '20%' }}
                        >
                            <Todo item={item} />
                        </div>
                    )
                })}


                <button className="button"
                    onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}
                ><span>
                        Clear
                    </span>
                </button>
            </div>
        </div>
    );
}


export default TodoForm;
