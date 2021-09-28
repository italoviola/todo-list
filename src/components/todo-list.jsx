import React, { useState } from 'react';
import TodoListInput from './todo-list-input'
import TodoListTask from './todo-list-task'

function TodoList() {

  const [tasks, setTasks] = useState([])

  const addTasks = (task) => {
    const newTasks = [task, ...tasks]

    setTasks(newTasks)
  }

  return (
    <div className="todo-list">
      <TodoListInput onSubmit={addTasks}/>
      {tasks.map((item, index)=>{
        return <TodoListTask key={index} task={item.task} />
      })}
    </div>
  );
}

export default TodoList;
