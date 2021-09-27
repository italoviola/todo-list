import React, { useState } from 'react';
import TodoListInput from './todo-list-input'

function TodoList() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="todo-list">
      <TodoListInput/>
    </div>
  );
}

export default TodoList;
