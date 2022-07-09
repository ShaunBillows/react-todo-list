import './App.css';
import { useState, useRef } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const [ todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name ==='') return 
    console.log(name)
    setTodos( prevTodos => {
      return [...prevTodos, {id:Math.random(100), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find( todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const getTodosLeft = () => {
    return todos.filter( todo => !todo.complete ).length
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter( todo => !todo.complete)
    setTodos(newTodos)
  }

  return (

    <div className='container'>

        <div className='container-item'>
          {getTodosLeft()} left to do
        </div>

        <div className='container-item'>
          <TodoForm todoNameRef={todoNameRef} handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos}/>
        </div>

        <div className='container-item todo-list'>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>

    </div>

  )
}

export default App;
