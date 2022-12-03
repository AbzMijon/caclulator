import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import TodoTask from '../Components/TodoTask';
import { useDispatch } from 'react-redux'
import { addTodo, deleteAllTodos } from '../store/slices/todoSlice';

interface ITodo {
  id: number,
  text: string,
  completed: boolean,
}

const StyledTodoPage = styled.div `
  
`

const TodoPage:FC = () => {

  const [inputString, setInputString] = useState<string>('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  
  const handleAddTodo = (e:React.MouseEvent<HTMLButtonElement>) => {
    if(inputString) {
      dispatch(addTodo({inputString}));
      setInputString('');
    }
  }

  const handleDelAll = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteAllTodos({}));
  }

  return (
    <StyledTodoPage>
      <div className='todo'>
        <header className='todo__header'>
          <button type='button' className='todo__del-all' onClick={handleDelAll}>Delete all</button>
          <input value={inputString} onChange={(e) => setInputString(e.target.value)} onKeyDown={(keyPress) => {
              if(keyPress.keyCode === 13 && inputString) {
                dispatch(addTodo({inputString}));
                setInputString('')
              }
          }} type="text" className='todo__text' />
          <button type='button' className='todo__create' onClick={handleAddTodo}>Create</button>
        </header>
        <ul className="todo__list">
          {todos.map((todo:ITodo) => {
            return <TodoTask id={todo.id} text={todo.text} completed={todo.completed} key={todo.id}/>
          })}
        </ul>
      </div>
    </StyledTodoPage>
  )
}

export default TodoPage;