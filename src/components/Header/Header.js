import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Список дел</Navbar.Brand>
    </Navbar>
  )
}