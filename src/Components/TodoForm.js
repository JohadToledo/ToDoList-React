import React, { useState, useEffect, useRef } from "react";
// import "./TodoForm.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
      inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
      <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
          <>
          <input
          placeholder="Update your item"
          value={input}
          onChange={handleChange}
          name="text"
          ref={inputRef}
          className="todo-input edit"
        />

        <button onClick={handleSubmit} className="todo-button edit">
        Update 
        </button>
        </>
        ) : ( 
            <>
            <input
          placeholder="write your task"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />

        <button className="todo-button" onClick={handleSubmit}>Add To Do </button>
        </>
        )}
        
      </form>


);
}

export default TodoForm;



{/* <div className="filters">
  <button className="filter-btn">All</button>
  <button className="filter-btn">To Do</button>
  <button className="filter-btn">Done</button>
</div> */}
