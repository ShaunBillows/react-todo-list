import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {

    return (
        todos.map( (todo, index) => {
            return (
                <div className='todo-list-item'>

                    <Todo key={index} todo={todo} toggleTodo={toggleTodo} />
                </div>
            )
        })
    )
}

export default TodoList