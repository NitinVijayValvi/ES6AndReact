import React from 'react'

const TodoForm = ({handleSubmit,todo,editId,settodo}) => {
  return (
    <form className="todolistForm" onSubmit={handleSubmit}>
    <input 
    type="text"
    value={todo} 
    onChange={(e)=>settodo(e.target.value)}>
    </input>
    <button type="submit">{editId?"Edit" :"Go"}</button>
    </form>

  )
}

export default TodoForm