import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {

    let todoItems
    if (!todos || todos.length === 0) {
        todoItems = <h3>No Todos</h3>
    } else {
        todoItems = todos.map((todo, idx) => 
            <TodoItem 
                key={ idx } 
                todo={ todo } 
                toggleCompleted={ toggleCompleted } 
                deleteTodo={ deleteTodo }
            />
        )
    } 

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                { todoItems }
            </ul>
        </div>
    )
}


export default TodoList