//import logo from './logo.svg';
//import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import {AddTodo} from './MyComponents/AddTodo'
import {About} from './MyComponents/About'
import {Home} from './MyComponents/Home'
import React, { useState ,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodos;
  if(localStorage.getItem("todos") === null){ 
    //if null
    initTodos=[];
  }
  else{
    initTodos=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{

    // console.log("remove",todo)
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);    

    setTodos(todos.filter((e)=>{
      return e!==todo;

    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    let sno;
    //console.log(title , desc);
    if(todos.length === 0)
    {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno + 1;
    }
    console.log(sno);
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    } 
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    title="";
    desc="";
   
     // localStorage.setItem("todos",JSON.stringify(todos));
   

  }
  
  const [todos,setTodos]=useState(initTodos

    // {
    //   sno:1,
    //   title:"go to gym",
    //   desc:"shoule be wakeup at 9 AM"
    // }
    // ,
    
    // {
    //   sno:2,
    //   title:"go to market",
    //   desc:"shoule be wakeup at 10 AM"
    // }

  )
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }, [todos]) //jismay changes aye data ki tou local... wo wali line call hu
  return (
   <>
    <Router>
    <Header title="TodoList" searchbar={true}/>
    <Switch>
    <Route  exact path="/" render={()=>
    
    {
      return(
        <>
        <AddTodo addTodo={addTodo}/>
       <Todos todos={todos} onDelete={onDelete}/>
        </>
      )
    }
    
    }>
        
      </Route>
      <Route path="/about" >
        <About/>
      </Route>

      
      <Route path="/home" >
        <Home/>
      </Route>
    </Switch>
     
     <br/>
     <Footer/>
    </Router>
     
     </>

   
  );
}

export default App;
