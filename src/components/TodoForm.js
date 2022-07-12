import {Button, Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoForm = ({todoNameRef, handleAddTodo, handleClearTodos, handleHideColours}) => {

    return (
        <Form>
            <Form.Group className="mb-3 d-flex align-items-center justify-content-center" >
                <Form.Control style={{maxWidth: 500}} ref={todoNameRef} type="email" placeholder="What do you need to do?" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Container className="buttons">
                    <Button variant='success' onClick={() => handleAddTodo()}>Add</Button> 
                    <Button variant='danger' onClick={() => handleClearTodos()}>Clear</Button>
                    <Button variant='warning' onClick={() => handleHideColours()}> :{')'} </Button>
                </Container>
            </Form.Group>
        </Form>
    )
}

export default TodoForm
