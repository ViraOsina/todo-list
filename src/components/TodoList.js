import React from 'react';
import styled from 'styled-components';
import TodoItems from './TodoItems';

const TodoListContainer = styled.div `
    width: 300px;
    background-color: #018c96;
    color: #f6ebf9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
`

const AddTaskButton = styled.button`
    type: input;
    background-color: rgb(0, 71, 69);
    color: #f6ebf9;
    border-radius: 30px;
    border: none;
    padding: 8px;
    margin-left: 5px;
    &:hover {
        color: rgb(0, 71, 69);
        background-color: #f6ebf9;
    }
`

function TodoList () {
    return (
        <TodoListContainer>
            <h1>Todo List</h1>
            <div>
                <input type="text" className="newTask" placeholder="I need to do ..."></input>
                <AddTaskButton>Add</AddTaskButton>
            </div>
            <TodoItems />

        </TodoListContainer>
    )
}

export default TodoList;