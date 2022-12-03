import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, toggleComplete } from '../store/slices/todoSlice';

interface TodoTaskProps {
    text: string,
    id: number,
    completed: boolean,
}

const StyledTodoTask = styled.div `
    .task {
        background-color: #7c2929;
        width: 300px;
        padding: 20px 25px;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .task__text {
        font-size: 16px;
    }
    .task__text--completed {
        text-decoration: line-through;
        text-decoration-color: #fff;
    }
`

const TodoTask:FC<TodoTaskProps> = ({ id, text, completed }) => {
    
    const dispatch = useDispatch();

    const handleDoneTodo = (e:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(toggleComplete({id}))
    }

    const handleDeleteTodo = (e:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(removeTodo({id}));
    }

    return (
        <StyledTodoTask>
            <div className='task'>
                <button type='button' className='task__done' onClick={handleDoneTodo}>done</button>
                <p className={completed ? "task__text task__text--completed" : "task__text"}>{text}</p>
                <button type='button' className='task__del' onClick={handleDeleteTodo}>x</button>
            </div>
        </StyledTodoTask>
    )
}

export default TodoTask;