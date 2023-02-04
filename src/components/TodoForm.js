import React from 'react'
import { useState } from 'react'
export default function TodoForm(props) {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim().length){
            props.addTodo(input)
        }
        
        setInput("")
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input value={input} type="text" className='todo-input' onChange={(e) =>setInput(e.target.value)}/> 
            <button type='submit' className='todo-button'>Add Todo</button>
        </form>
    )
}
