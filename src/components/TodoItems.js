import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri'; //npm install @react-icons/all-files --save

const TodoItem = styled.ul `
    list-style-type: none;
    width: 100%;
    line-height: 2rem;

`
const DeleteBtn = styled.button `
    border: none;
    background-color: #018c96;
    
    margin-left: 5px;
    &:hover {
        color: #eb5401;
    }
`

function TodoItems () {
    return (
    <TodoItem>
        <li> 
            <input type="checkbox" style={{ marginRight: 8 }}/>
            Item 1
            <DeleteBtn><RiDeleteBin6Line /></DeleteBtn>
        </li>
        <li> 
            <input type="checkbox" />
            Item 1
            <DeleteBtn><RiDeleteBin6Line /></DeleteBtn>
        </li>
        <li> 
            <input type="checkbox" />
            Item 1
            <DeleteBtn><RiDeleteBin6Line /></DeleteBtn>
        </li>
        <li> 
            <input type="checkbox" />
            Item 1
            <DeleteBtn><RiDeleteBin6Line /></DeleteBtn>
        </li>
        <li> 
            <input type="checkbox" />
            Item 1
            <DeleteBtn><RiDeleteBin6Line /></DeleteBtn>
        </li>
    </TodoItem>
    )
}

export default TodoItems;