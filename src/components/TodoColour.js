import {Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoColour = ({ handleColourChange, colorRef, todo}) => {

    return (
        <Form>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="choose colour..."
                    ref={colorRef}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button onClick={() => handleColourChange(todo.id)}>Select</Button>
            </InputGroup>
        </Form>
    )
}

export default TodoColour
