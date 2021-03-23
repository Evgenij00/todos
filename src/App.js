import { useState } from 'react';

import { Header } from './components/Header/Header';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Search } from './components/Search/Search';
import { Filter } from './components/Filter/Filter';
import { StatusesTodos } from './components/StatusesTodos/StatusesTodos';
import { Todos } from './components/Todos/Todos';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const list = [
    {id: 1, title: 'Построить дом', done: false},
    {id: 2, title: 'Посадить дерево', done: false},
    {id: 3, title: 'Отдохнуть', done: false}
  ]

  const [todos, setTodos] = useState(list)
  const [searchString, setSearchString] = useState('')
  const [filterString, setFilterString] = useState('all')

  function addTodo(title) {
    setTodos( state => [...state, createTodo(title)])
  }

  const createTodo = function f(title) {
    const id = new Date().getTime()
    return {id, title, done: false}
  }

  function removeTodo(todoId) {
    setTodos( state => {

      const currentTodo = state.find( item => item.id === todoId )
      const index = state.indexOf(currentTodo)

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1) 
      ]
    })
  }

  function changeTitleTodo( todoId, title ) {
    setTodos( state => {
      const currentTodo = state.find( item => item.id === todoId )
      const index = state.indexOf(currentTodo)

      const newTodo = {...currentTodo, title}

      return getUpdatedTodos(newTodo, index, state)
    })
  }

  function changeStatusTodo(todoId) {

    setTodos( state => {
      const currentTodo = state.find( item => item.id === todoId )
      const index = state.indexOf(currentTodo)

      const newTodo = {...currentTodo, done: !currentTodo.done}

      return getUpdatedTodos(newTodo, index, state)
    })
  }

  function getUpdatedTodos(item, index, list) {
    return [ 
      ...list.slice(0, index),
       item,
      ...list.slice(index + 1)
    ]
  }

  function onFilterChange(string) {
    setFilterString(string)
  }

  function onSearchChange(string) {
    setSearchString(string)
  }

  function filterTodos( list, string ) {
    switch(string) {
      case 'done':
        return list.filter( item => item.done)
      case 'inProcess':
        return list.filter( item => !item.done )
      case 'all':
        return list
      default:
        return []
    }
  }

  function searchTodos( list, string ) {
    return list.filter( item => item.title.toLowerCase().includes(string.toLowerCase()))
  }

  const visibleTodos = searchTodos(filterTodos( todos, filterString ), searchString)

  const done = todos.filter( item => item.done ).length;
  const inProcess = todos.length - done;

  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <StatusesTodos 
            done={done} 
            inProcess={inProcess}
        />
          <AddTodo addTodo={addTodo}/>
        <div className='options'>
          <Search onSearchChange={onSearchChange}/>
          <Filter 
            onFilterChange={onFilterChange}
            status={filterString}/>
        </div>
        <Todos 
          todos={visibleTodos} 
          changeStatusTodo={changeStatusTodo}
          changeTitleTodo={changeTitleTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
