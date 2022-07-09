import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {

    return (
        todos.map( (todo, index) => {
            return <Todo key={index} todo={todo} toggleTodo={toggleTodo}/>
        })
    )
}

export default TodoList