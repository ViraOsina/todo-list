import React from 'react';
import { useState } from 'react';
import { AddTaskButton } from './Styles';

function Form ({ addTask }) {
    const [userInput, setUserInput] = useState('');

    function handleChange (e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    function handleKeyPress (e) {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="newTask" 
                placeholder="I need to do ..."
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                value={userInput}
            >

            </input>
            <AddTaskButton onClick = {handleSubmit}>Add</AddTaskButton>
        </form>
    )
}

export default Form;