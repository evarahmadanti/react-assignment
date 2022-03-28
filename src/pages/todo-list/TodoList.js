import './TodoList.css';

const TodoList = ({ dataTodos, isDarkMode }) => {
    
    const listData = dataTodos.map((todo) => {
        // {id: 1, title: 'eat'}
        return <li key={todo.id} className={`li ${isDarkMode ? "li-dark" : "li-light"}`}>{todo.title}</li>
    })

    return (
        <ul>{listData}</ul>
    )
}

export default TodoList;