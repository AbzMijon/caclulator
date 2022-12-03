import React from 'react'
import { useSelector } from 'react-redux'

function Scene() {
    const todos = useSelector(state => state.todos.todos);
    console.log(todos);
  return (
    <div>Scene</div>
  )
}

export default Scene