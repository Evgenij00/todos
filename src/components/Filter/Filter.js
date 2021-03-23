import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './Filter.scss'

const statusPanel = [
  {name: 'Все', status: 'all'},
  {name: 'Выполнено', status: 'done'},
  {name: 'В процессе', status: 'inProcess'},
]

export const Filter = ({ onFilterChange, status }) => {

  const buttons = statusPanel.map( (item, index) => {

    const variant = (status === item.status) ? 'primary' : 'outline-primary';

    return (
      <Button variant={variant}
        key={index} 
        onClick={ () => onFilterChange(item.status) }>
        {item.name}
      </Button>
    )
  })

  return (
    <ButtonGroup className="filter" size="sm">
      {buttons}
    </ButtonGroup>
  )
}