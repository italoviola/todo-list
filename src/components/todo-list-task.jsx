import React, { useState } from 'react';
import deleteIcon from '../assets/ic-delete.png';

function TodoListTask(props) {

  const handleClickRemoveTask = () => {
    props.onClick({id: props.id, description: props.description})
  }

  return (
    <div className="todo-list-tasks_task">
      <div className="todo-list-tasks_task--description">{props.description}</div>
      <div className="todo-list-tasks_task--remove" onClick={handleClickRemoveTask}>
        <img src={deleteIcon} alt="Delete task" />
      </div>
    </div>
  );
}

export default TodoListTask;
