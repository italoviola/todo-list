import React, { useState } from 'react';
import TodoListInput from './todo-list-input'
import TodoListTask from './todo-list-task'

function TodoList() {

  const [tasks, setTasks] = useState([])

  const addTasks = (task) => {
    const newTasks = [task, ...tasks]
    setTasks(newTasks)
  }

  const removeTask = (task) => {
    const newTasks = [...tasks].filter((obj) => {
      return obj.id !== task.id;
    })
    setTasks(newTasks)
  }

  return (
    <div className="todo-list">
      <TodoListInput onSubmit={addTasks}/>
      <div className={`todo-list-tasks ${ tasks.length > 0 ? '' : '-no-tasks'}`}>
        {tasks.length > 0 ? '' : <div className={'no-tasks-disclaimer'}><span>Nenhum item cadastrado</span></div>}
        {tasks.map((item)=>{
          return <TodoListTask key={item.id} {...item} onClick={removeTask}/>
        })}
      </div>
    </div>
  );
}

export default TodoList;
