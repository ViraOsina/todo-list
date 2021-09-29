import React from 'react';
import { useState } from 'react'
import { AddTaskButton } from './Styles';

//
//onChange={handleChange}
//onKeyDown={handleKeySubmit}
//onSubmit={handleSubmit}

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
            >

            </input>
            <AddTaskButton>Add</AddTaskButton>
        </form>
    )
}

export default Form;