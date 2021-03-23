import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.scss'

export const Todos = ({ todos, changeStatusTodo, changeTitleTodo, removeTodo }) => {

  const list = todos.map( todo => {

    return (
      <li className="list__item-wrap" key={todo.id}>
        <Todo 
          todo={todo} 
          changeStatusTodo={changeStatusTodo}
          changeTitleTodo={changeTitleTodo}
          removeTodo={removeTodo}/>
      </li>
    )
  })
  
  return (
    <ul className="list">
      {list}
    </ul>
  )
}