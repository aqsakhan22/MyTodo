import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
   let todosStyle=
    {
        minHeight:"70vh"
    }
    return (
        <div className="container my-3" style={todosStyle}>
            <h3 className="my-3">Todo list</h3>
         {/*props.todos*/}
       

 {
     props.todos.length === 0 ? "no todos here" :
     
 
 props.todos.map((todo)=>{
    return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    
    
    
 )})

        
}
        
        </div>
    )
}
