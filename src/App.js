import './App.css';
import { useState, useRef } from 'react'
import TodoList from './componants/TodoList'

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

    <>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>add todo</button> 
        <button onClick={handleClearTodos}>clear completed todos</button>
        <div> {getTodosLeft()} left to do</div>
    </>
    
  )
}

export default App;
