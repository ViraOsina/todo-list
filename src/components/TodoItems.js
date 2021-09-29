import React from 'react';
//import { useState } from 'react';
import { TodoItemsList, TodoItem, DeleteBtn } from './Styles';
import { RiDeleteBin6Line } from 'react-icons/ri'; //npm install react-icons --save
import uuid from 'react-uuid'; //npm i react-uuid

function TodoItems ({ todo, removeTask }) {
    
    return (
    <TodoItemsList>
        
          <TodoItem key={todo.id} >
                <input type="checkbox" style={{ marginRight: 8 }} />
                {todo.task}
                <DeleteBtn onClick={() => removeTask(todo.id)}><RiDeleteBin6Line /></DeleteBtn>
            </TodoItem>
        
    </TodoItemsList>
    )
}

export default TodoItems;