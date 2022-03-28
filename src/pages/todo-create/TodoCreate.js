import './TodoCreate.css';
import { useState } from 'react';

const TodoCreate = ({ onCreateTodo, isDarkMode }) => {
    const [getInputTodo, setInputTodo] = useState('')

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const newTodo ={
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        onCreateTodo(newTodo)
        
        setInputTodo('')
    }

    return (
        <form className='input' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit" className={`button ${isDarkMode ? "button-light" : "button-dark"}`}>Add</button>
        </form>
    )
}

export default TodoCreate;