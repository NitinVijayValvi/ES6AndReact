import React from "react";
export default class ProjectNameCompo extends React.Component{


    render(){

        return(
            <ul>
                <li onClick={()=>{this.props.statushandler(this.props.index)}}
                    className={this.props.list.completed? "completed":""}>
                    <h1>{this.props.list.name}</h1>
                    <button onClick={(e) =>{
                        e.stopPropagation();
                        this.props.deleteList(this.props.index)}}>Remove</button>
                </li>
                    </ul>
        );
    }
}

