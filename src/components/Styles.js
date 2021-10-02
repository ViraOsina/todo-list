
import styled from 'styled-components';

const TodoItemsList = styled.ul `
    list-style-type: none;
    width: 100%;
    margin: 0;    
`
const TodoItem = styled.li `
    width: 90%;
    background-color: rgba (246, 235, 249, 0.7);
    border-radius: 10px;
    position: relative;
    justify-items: center;
    line-height: 2rem;

`
const DeleteBtn = styled.button `
    border: none;
    background-color: #018c96;
    position: absolute;
    right: 5px;
    top: 8px;
    cursor: pointer;
    
    margin-left: 5px;
    &:hover {
        color: #eb5401;
    }
`
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

export { TodoItemsList, TodoItem, DeleteBtn, TodoListContainer, AddTaskButton }