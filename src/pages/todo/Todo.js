import './Todo.css'
import { useEffect, useState } from 'react';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import Loading from '../../components/loading/Loading';

const Todo = ({isDarkMode}) => {
    const [getTodos, setTodos] = useState([

    ])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=3')
        .then(resp => resp.json())
        .then(data => setTimeout(setTodos(data), 1000))
    }, [])

    const eventCreteTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    const printData = () => {
        if(getTodos.length < 1) {
            return <Loading />
        } 
        return <TodoList dataTodos={getTodos} isDarkMode={isDarkMode}/>
    }

    return (
        <div className={`h3 ${isDarkMode ? "h3-dark" : "h3-light"}`}>
            <h1 className={`h1 ${isDarkMode ? "h1-dark" : "h1-light"}`}>Todo List</h1>
            <TodoCreate onCreateTodo={eventCreteTodo} isDarkMode={isDarkMode}/>
            {printData()}
        </div>
    )
}

export default Todo;