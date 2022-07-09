const TodoForm = ({todoNameRef, handleAddTodo, handleClearTodos}) => {

    return (
        <div>
            <input ref={todoNameRef} type="text" />
            <button onClick={() => handleAddTodo()}>Add</button> 
            <button onClick={() => handleClearTodos()}>Clear</button>
        </div>
    )
}

export default TodoForm