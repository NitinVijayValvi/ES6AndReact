import React from "react";
import HeaderComponent from "./HeaderComponent";
import ListForm from "./ListForm";
import ProjectNameCompo from "./ProjectNameCompo";

export default class ProjectList extends React.Component{

    constructor(props){
        super(props);
        this.showStatus = this.showStatus.bind(this);
        this.updateList = this.updateList.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteList= this.deleteList.bind(this);
        {  
        this.state ={
                list:[
                {name:"tci",completed:false},
                {name:"johndeere", completed:false},
                {name:"merk",completed:false}],
                currentList:''
                
            };
        }
    }  

    addList(e){
        e.preventDefault();
        console.log('success');
        let list = this.state.list;
        let currentList = this.state.currentList;
        list.push({
            name:currentList,
            completed:false
        });
        this.setState({
            list:list,
            currentList:''
        })
    }
    updateList(newList){
        this.setState({
            currentList:newList.target.value
        });
    }

    deleteList(ListtobeDeleted){
        console.log("delete button clicked "+ListtobeDeleted+" deleted now")
        let list= this.state.list;
        list.splice(ListtobeDeleted,1);
        this.setState({
            list:list
        });
    }


    showStatus(index){
        var list = this.state.list;
        var list1 = list[index];
        list1.completed = !list1.completed;
        this.setState({
            list:list
        });
        console.log(this.state.list[index]);
    }
    render() {
        return  (
            <div>
            <HeaderComponent/>
            <ul>
            <section>
                <ListForm currentList ={this.state.currentList}
                updateList={this.updateList}
                addList={this.addList}
                />
            </section>

            {this.state.list.map((list,index)=>{
                return <ProjectNameCompo 
                key={list.name} 
                list={list}
                index={index}
                statushandler = {this.showStatus}
                deleteList={this.deleteList}
                />
            })}
            </ul>
            </div>
        );
    }
}
    
