import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log('action.payload addTodo ===>', action.payload)
      state.push({ id: state.length, text: action.payload.input, completed: false });
    },
    completeTodo: (state, action) => {
      console.log('action.payload completeTodo ===>', action.payload)
      console.log('state ===>', state)
      const todo = state.find((t) => t.id === action.payload.id);
       if (todo) {
        todo.completed = true;
      }
    },
  },
  
});

export const { addTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;






// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   entities: [],
//   status: null
// }

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     todoAdded(state, action) {
//       // ✅ This "mutating" code is okay inside of createSlice!
      
//       state.entities.push(action.payload)
//     },
//     todoToggled(state, action) {
//       const todo = state.entities.find(todo => todo.id === action.payload)
//       todo.completed = !todo.completed
//     },
//     todosLoading(state, action) {
//       return {
//         ...state,
//         status: 'loading'
//       }
//     }
//   }
// })

// export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

// export default todosSlice.reducer