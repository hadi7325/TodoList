import React from 'react'

function ListItem({ deletTodo, doneTodo, todo, id }) {
    return (
        <li className={`list-item ${todo.done ? "bg-success" : ""}`}>
            <div className={`list-item-text ${todo.done ? "text-white" : ""}`}>
                {todo.done ? <del>{todo.title}</del> : todo.title}
            </div>
            <div className='buttons'>
                <button onClick={() => deletTodo(id)} className='btn btn-small bg-danger text-white ms-2' type=""><i className='fas fa-trash'></i></button>
                <button onClick={() => doneTodo(id)} className={`btn btn-small text-white ${todo.done ? 'btn-warning' : "bg-success "}`} type="">
                    {todo.done ? <i className='fas fa-undo'></i> : <i className='fas fa-check'></i>}
                </button>
            </div>
        </li>
    )
}

export default ListItem