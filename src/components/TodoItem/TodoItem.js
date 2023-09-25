import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../redux/todos/todosSlice';

const TodoItem = ({todo}) => {

  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo({id: todo.id}))
  }

  return (
    <>
      <li>{todo.text}</li>
      <button onClick={handleComplete}>Complete item</button>
    </>

  )
}

export default TodoItem