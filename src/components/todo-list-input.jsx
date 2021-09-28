import React, { useState } from 'react';

function TodoListInput(props) {

  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.onSubmit({
      id: id,
      description: description
    })

    setDescription('')
    setId(id + 1)
  }

  return (
    <div className="todo-list-input">
      <form className="todo-list-input_form" onSubmit={handleSubmit}>
        <input 
          className="todo-list-input_form--description-field"
          type="text" 
          value={description} 
          placeholder="Banana"
          onChange={handleDescriptionChange}  
        />
        <input
          className="todo-list-input_form--add-field"
          type="submit" 
          value="+"
        />
      </form>
    </div>
  );
}

export default TodoListInput;
