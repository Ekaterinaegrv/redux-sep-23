import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  
  return (
    <>
    <h1>TodoList</h1>

    {todos.map((todo)=>(
      todo.completed ? null 
      :
      <TodoItem 
        key={todo.id}
        todo={todo}/>
    ))}
        
    </>

  )
}

export default TodoList