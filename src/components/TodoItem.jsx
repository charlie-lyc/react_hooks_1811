import React from 'react'


const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {

    const textStyle = {
        textDecoration: todo.isCompleted && 'line-through',
        fontWeight: todo.isCompleted && 'lighter'
    }

    const handleToggle = () => {
        toggleCompleted(todo.id)
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    return (
        <li>
            <strong style={ textStyle }>{ todo.text }</strong>&nbsp;
            <button onClick={ handleToggle }>
                { todo.isCompleted ? 'Incomplete' : 'Complete'}
            </button>&nbsp;
            <button onClick={ handleDelete }>X</button>
            <br />
            <br />
        </li>
    )
}


export default TodoItem