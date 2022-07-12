import { useState, useRef } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Container, Table, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const [ todos, setTodos ] = useState([])
  const [ coloursDisplay, setColoursDisplay ] = useState('block')
  
  const todoNameRef = useRef()
  const colorRef = useRef()

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name ==='') return 
    setTodos( prevTodos => {
      return [...prevTodos, {id:Math.random(100), name:name, complete:false, colour:'black'}]
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

  const handleColourChange = (id) => {
    const newTodos = [...todos]
    const input = colorRef.current.value
    const todo = newTodos.find( todo => todo.id === id )
    todo.colour = input
    setTodos(newTodos)
    colorRef.current.value = null
  }

  const handleHideColours = () => {
    if (coloursDisplay === 'block') {setColoursDisplay('none')}
    if (coloursDisplay === 'none') {setColoursDisplay('block')}
  }

  return (

    <Container >
        <Row>
            <h1 class="text-center">My Todo List</h1>
        </Row>
        <Row>
          <h4 class="text-center">{getTodosLeft()} left to do</h4>
        </Row>
        <Row >
            <TodoForm todoNameRef={todoNameRef} handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos} handleHideColours={handleHideColours}/>
        </Row>
        <Row >
          <Table responsive hover style={{maxWidth: 800}}>
            <tbody>
              <TodoList todos={todos} toggleTodo={toggleTodo} handleColourChange={handleColourChange} colorRef={colorRef} coloursDisplay={coloursDisplay}/>
            </tbody>
          </Table>
        </Row>
    </Container>
  )
}

export default App;
