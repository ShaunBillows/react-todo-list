import Todo from './Todo'
import TodoColour from './TodoColour'

const TodoList = ({ todos, toggleTodo, handleColourChange, colorRef, colour, coloursDisplay}) => {

    return (
        todos.map( (todo, index) => {
            return (

                <tr class="table-default">
                    <td>
                        <span className='todo-list-item' key={index} >
                            <Todo key={index} todo={todo} toggleTodo={toggleTodo} colour={colour}/>
                        </span>
                    </td>
                    <td>
                        <span className='change-colours' style={{display: coloursDisplay}}>
                            <TodoColour handleColourChange={handleColourChange} colorRef={colorRef} todo={todo} colour={colour} />
                        </span>

                    </td>
                </tr>
            )
        })
    )
}

export default TodoList
