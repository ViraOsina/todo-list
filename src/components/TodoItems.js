import React from 'react';
import { useState } from 'react';
import { TodoItemsList, TodoItem, DeleteBtn } from './Styles';
import { RiDeleteBin6Line } from 'react-icons/ri'; //npm install react-icons --save

function TodoItems ({ todo, removeTask }) {
    const [textStyle, setTextStyle] = useState('');

    function handleChecked() {
        if(!todo.complete) {
            todo.complete = true;
            setTextStyle ('line-through');
        } else {
            todo.complete = false;
            setTextStyle ('');
        }
    }

    return (
    <TodoItemsList>
        
          <TodoItem key={todo.id} style={{textDecorationLine: textStyle}}>
                <input 
                type="checkbox" 
                checked={todo.complete}
                style={{ marginRight: 8 }}
                onChange={handleChecked}
                 />
                {todo.task}
                <DeleteBtn onClick={() => removeTask(todo.id)}><RiDeleteBin6Line /></DeleteBtn>
            </TodoItem>
        
    </TodoItemsList>
    )
}

export default TodoItems;