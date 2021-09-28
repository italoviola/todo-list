import React, { useState } from 'react';

function TodoListInput(props) {

  const [id, setId] = useState(0);
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.onSubmit({
      id: id,
      task: task
    })

    setTask('')
    setId(id + 1)
  }

  return (
    <div className="todo-list-input">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={task} 
          placeholder="Banana"
          onChange={handleTaskChange}  
        />
        <input type="submit" value="+"/>
      </form>
    </div>
  );
}

export default TodoListInput;
