import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.scss'

export const Todo = ({ todo, changeStatusTodo, changeTitleTodo, removeTodo }) => {

  const [title, setTitle] = useState(todo.title)
  
  let classNames = 'text'
  let btnSave = null

  if (todo.done) {
    classNames += ' text_done'
  } else if ( todo.title !== title ) {
    btnSave = (
      <Button className='item__btn-save' variant="outline-success" size="sm"
        onClick={ () => changeTitleTodo(todo.id, title) }>
        Сохранить
      </Button>
    )
  }

  const { id, done } = todo

  return (
    <div className='todo-wrap'>
      <div className='todo'>
  
        <div className='todo__status'>
          <input type='checkbox' 
            checked={done} 
            onChange={ () => changeStatusTodo(id) }/>
        </div>
        
        <div className='todo__change-form'>
          <div className={classNames}>
            <input type='text'
              readOnly={done}
              value={title} 
              onChange={ (e) => setTitle(e.target.value) }/>
          </div>
          {btnSave}
        </div>
  
      </div>
  
      <Button className='btn-remove'  variant="outline-danger" size="sm"
        onClick={ () => removeTodo(id) }>
        <i className="far fa-trash-alt"></i>
      </Button>
    </div>
  )
}