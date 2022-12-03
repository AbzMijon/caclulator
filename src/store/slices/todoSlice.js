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
                text: action.payload.inputString,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload.id
            });
        },
        toggleComplete(state, action) {
            const completedTodo = state.todos.find((todo) => todo.id === action.payload.id);
            completedTodo.completed = !completedTodo.completed;
        },
        deleteAllTodos(state, action) {
            state.todos = [];
        },
    },
})

export const {addTodo, removeTodo, toggleComplete, deleteAllTodos} = todoSlice.actions;
export default todoSlice.reducer;