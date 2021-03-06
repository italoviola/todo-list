import React, { useState } from 'react';
import addIcon from '../assets/ic-add.png';

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
          placeholder="Digite"
          onChange={handleDescriptionChange}  
          required
        />
        <button
          className="todo-list-input_form--add-field"
          type="submit" 
          value=""
        >
          <img src={addIcon} alt="Add task" />
        </button>
      </form>
    </div>
  );
}

export default TodoListInput;
