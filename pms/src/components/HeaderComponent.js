import React from "react";
class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        {
            this.state = {
                header:"My Project Details",
                logo:"PMS"
            };
        }
    }

    render(){
    return (
        <div>
        <h1>Welcome to header</h1>
        <h2>{this.state.header}</h2>
        <h1>
        <img src="images/pms.jpg" width={350} height={250}/>
        </h1>
        </div>
    )
}
}
export default HeaderComponent;