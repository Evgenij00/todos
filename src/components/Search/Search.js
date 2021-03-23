import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import './Search.scss'

export const Search = ({onSearchChange}) => {

  const [searchString, setSearchString] = useState('')

  function onChangeInput(e) {

    setSearchString(e.target.value)
    onSearchChange(e.target.value)
  }

  return (
    <Form className="search-form" inline>
      <FormControl type="text" placeholder="Поиск задач..." className="mr-sm-2" 
        value={searchString}
        onChange={onChangeInput}
      />
    </Form>
  )
}