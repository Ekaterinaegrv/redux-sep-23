import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';

const CompletedList = () => {
  const todos = useSelector((state) => state.todos);
  
  return (
    <>
    <h1>CompletedList</h1>

    {todos.map((todo)=>(
      todo.completed ?
      <TodoItem 
        key={todo.id}
        todo={todo}/>
      : null
    ))}
        
    </>

  )
}

export default CompletedList