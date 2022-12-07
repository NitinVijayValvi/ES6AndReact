import React,{ useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () =>{
  const [todo,settodo] = useState("");
  const [todos,settodos] = useState([]);
  const [editId, setEditId] =useState(0);

const handleSubmit = (e)=>{
  e.preventDefault();


  if(editId){
    const edittodo = todos.find((i)=> i.id === editId);
    const updatedTodos = todos.map((t)=> 
    t.id === edittodo.id ? (
      t={id:t.id,todo}):
      {id:t.id,todo:t.todo}
    );
    settodos(updatedTodos);
    setEditId(0);
    settodo("");
    return;
  }

  if(todo !== ''){

    //for unique id for map function
    //we use  ` ` because we want it to be string
    settodos([{id:`${todo}-${Date.now()}`,todo},...todos])
    //to empty the input box after hitting submit
    settodo("");
  }
};

const handleDelete = (id) =>{
  const deleteTodo = todos.filter((to) => to.id !== id);
  settodos([...deleteTodo])
};


const handleEdit = (id) =>{
  const edittodo = todos.find((i) => i.id === id );
  settodo(edittodo.todo);
  setEditId(id);
};

  return <div className="App">
  <div className="container">
  <h1>To Do List</h1>
   <TodoForm handleSubmit={handleSubmit}
    todo ={todo} 
    editId={editId} 
    settodo ={settodo}/>
    
    <TodoList
    todos={todos}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />


  </div>
  </div>
};

export default App; 