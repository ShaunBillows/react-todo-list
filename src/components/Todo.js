import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
      <span style={{color: todo.colour}}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" checked={todo.complete} onChange={handleTodoClick} label={todo.name} />
          </Form.Group>
        </Form>
      </span>
  )
}

export default Todo
