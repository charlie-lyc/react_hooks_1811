import React, { useState } from 'react'


const TodoForm = ({ addTodo }) => {

    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!text || text.length === 0) {
            return alert('Please Enter Text')
        }
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={ handleSubmit }>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input 
                type="text" 
                name="todo" 
                onChange={ handleChange } 
                value={ text } 
                placeholder="Add something to do..." 
            />
        </form>
    )
}


export default TodoForm