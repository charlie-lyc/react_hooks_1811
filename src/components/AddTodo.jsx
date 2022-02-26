import React from 'react'
import TodoForm from './TodoForm'


const AddTodo = ({ addTodo }) => {

    return (
        <div>
            <TodoForm addTodo={ addTodo } />
        </div>
    )
}


export default AddTodo