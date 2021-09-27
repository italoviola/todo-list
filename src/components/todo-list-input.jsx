import React, { useState } from 'react';

function TodoListInput(props) {

  const [task, setTask] = useState(''); 

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.onSubmit({
      task: event.target.value
    })

    setTask('')
    
    console.log('task', task)
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
