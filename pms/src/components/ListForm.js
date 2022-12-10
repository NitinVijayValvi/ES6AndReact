import React from 'react'

const ListForm=(props) => {
    return (
    <div>
    <form className="listForm" onSubmit={props.addList}>
    <input 
    type="text"
    value={props.currentList}
    onChange={props.updateList}
>
    </input>
    <button type="submit">Add Project</button>
    </form>
    </div>
    );

 }
export default ListForm;