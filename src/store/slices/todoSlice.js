import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Math.round(Math.random() * 1000),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {},
        toggleComplete(state, action) {},
    },
})

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;