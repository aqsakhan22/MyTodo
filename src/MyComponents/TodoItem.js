import React from 'react'
//direct todo ko lyna chahty hai tbhi props nh likha
export const TodoItem = ({todo,onDelete}) => {
    const todoStyle={
      "margin-top":"20px",
      "background-color":"grey",
    }
    return (
        
        <div className="card"  style={todoStyle} >

        <div   className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        </div>

        
        // <div>
            
        //    <h4> {todo.title}</h4>
        //    <p> {todo.desc}</p>
        //   <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        //   <hr/>


        // </div>
    )
}
