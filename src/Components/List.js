import React from 'react'
import ListItem from './ListItem'

function List({doneTodo,deletTodo,todos}) {

    if(todos.length <= 0 ){
       return(
        <span className='bg-danger p-3 text-white form-control-plaintext'><h4>کاری برای انجام نیست</h4></span>
       )
    }
    return (
        <div className="list">
           {todos.map((todo) =>
             <ListItem  
             key={todo.id}
             id={todo.id}
             doneTodo={doneTodo} 
             deletTodo={deletTodo}
             todo={todo}/>
           )}
           
        </div>
    )
}

export default List