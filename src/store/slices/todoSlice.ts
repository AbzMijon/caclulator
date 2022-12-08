import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: number | string,
    text: string,
    completed: boolean,
}
type TodoState = {
    todos: Todo[],
}
const initialState: TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: Math.round(Math.random() * 1000),
                text: action.payload,
                completed: false,
            })
        },
        removeTodo(state, action :PayloadAction<number | string>) {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            });
        },
        toggleComplete(state, action: PayloadAction<number | string>) {
            const completedTodo = state.todos.find((todo) => todo.id === action.payload);
            if(completedTodo) {
                completedTodo.completed = !completedTodo.completed;
            }
        },
        deleteAllTodos(state) {
            state.todos = [];
        },
    },
})

export const {addTodo, removeTodo, toggleComplete, deleteAllTodos} = todoSlice.actions;
export default todoSlice.reducer;