import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"



function App () {



  
    return (
      <div>
        <h2 className="welcome-h2">Task List application</h2>

        <TodoForm/>
        {/* <TodoList/> */}



      </div>
    );
  }


export default App;
