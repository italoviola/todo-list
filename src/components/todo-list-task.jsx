import React, { useState } from 'react';

function TodoListTask({ task }) {

  return (
    <div className="todo-list-task">
      {task}
    </div>
  );
}

export default TodoListTask;
