import React, { useState } from 'react';
import { addTodo } from '../../redux/todos/todosSlice';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input.trim()) {
      dispatch(addTodo({ input }));
      setInput("");
  }}

  const handleChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <>
    <h1>Type your text</h1>

    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder={'Type your text'} 
          value={input} 
          onChange={handleChange} />

        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    </>

  )
}
export default Form