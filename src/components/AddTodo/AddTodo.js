import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './AddTodo.scss'

export const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState('')

  function onSubmitInput(e) {

    e.preventDefault()

    if ( title.trim() ) {
      addTodo(title)
      setTitle('')
    } else {
      alert('Введите название задачи')
    }
  }

  return (
    <form className="add-todo" onSubmit={onSubmitInput}>

      <div className="add-todo__text">
        <input type='text' placeholder='Добавить новую задачу'
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
        />
      </div>

      <Button type='submit' className="add-todo__btn" variant="outline-success">
        Добавить
      </Button>
      
    </form>
  )
}