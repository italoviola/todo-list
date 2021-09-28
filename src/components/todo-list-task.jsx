import React, { useState } from 'react';

function TodoListTask(props) {

  const handleClickRemoveTask = () => {
    props.onClick({id: props.id, description: props.description})
  }

  return (
    <div className="todo-list-task">
      <div className="todo-list-task_description">{props.description}</div>
      <div className="todo-list-task_remove" onClick={handleClickRemoveTask}>X</div>
    </div>
  );
}

export default TodoListTask;
