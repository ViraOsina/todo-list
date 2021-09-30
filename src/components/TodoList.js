import React from 'react';
import { useState } from 'react'
import { TodoListContainer } from './Styles';
import TodoItems from './TodoItems';
import Form from './TodoInput';
import uuid from 'react-uuid'; //npm i react-uuid

function TodoList () {
    const [todos, setTodos] = useState([])

    function addTask (userInput) {
        if (userInput) {
            const newTodo = {
                id: uuid(),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newTodo])
        }
    }

    function removeTask (id) {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    return (
        <TodoListContainer>
            <h1>Todo List</h1>
            <Form addTask={addTask}/>
            {todos.map((todo) => {
                return (
                <TodoItems key = {todo.id} todo={todo} removeTask={removeTask}/>
                    )
            })}
        </TodoListContainer>
    )
}

export default TodoList;