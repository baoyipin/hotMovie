import React from "react";
import Header from "../../components/header/Header"
export default class Detail extends React.Component{
    constructor(){
        super();
        this.state={movie:{}}
    }
    componentWillMount(){
        console.log(this.props.location.state)
    }
    render(){
       console.log(this.props.location)
        return (
            <div className="detail">
                <Header>详情</Header>

            </div>
        )
    }
}