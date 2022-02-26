import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid'


const App = () => {

    const [todos, setTodos] = useState([
        // {
        //     id: uuidv4(),
        //     text: 'Practice building React app',
        //     isCompleted: false
        // }, {
        //     id: uuidv4(),
        //     text: 'Learn React Hooks',
        //     isCompleted: false
        // }, {
        //     id: uuidv4(),
        //     text: 'Build todo list app',
        //     isCompleted: false
        // }
    ])

    /**
     * 'useEffect(<function>, <array>)' is a lifecycle method that runs after the component is rendered.
     * The first argument <function> runs after the component is rendered.
     * Tes second argument <array>'s elements are watched for changes.
     * If <array> doesn't exist, <function> runs infinite times.
     * If <array> is empty(ex: []), <function> will run only once(initial time).
     * If <array> contains values(ex: [props.todo]), <function> will run whenever 'props.todo' change.
     */
    // Equivalent to 'componentDidMount()'
    useEffect(() => 
        setTodos(() => [
            {
                id: uuidv4(),
                text: 'Practice building React app',
                isCompleted: false
            }, {
                id: uuidv4(),
                text: 'Learn React Hooks',
                isCompleted: false
            }, {
                id: uuidv4(),
                text: 'Build todo list app',
                isCompleted: false
            }
        ]), 
        []
    )

    const handleAddTodo = text => {
        const newTodo = {
            id: uuidv4(),
            text,
            isCompleted: false
        }
        // setTodos(() => todos.concat(newTodo))
        ///////////////////////////////////////////////
        setTodos(prevState => [ ...prevState, newTodo])
    }

    const handleToggleCompleted = id => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
        setTodos(() => updatedTodos)
    }

    const handleDeleteTodo = id => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(() => filteredTodos)
    }

    return (
        <div>
            <TodoList 
                todos={ todos } 
                toggleCompleted={ handleToggleCompleted } 
                deleteTodo={ handleDeleteTodo }
            />
            <hr />
            <AddTodo addTodo={ handleAddTodo }/>
        </div>
    )
}


export default App