import React from "react";
import {validate} from "./api/profile";
import {withRouter} from "react-router-dom";
@withRouter
export default class protectedRoute extends React.Component{
    async componentWillMount(){
        let {user}=await validate();
        if (!user){
            this.props.history.push("/login")
        }
    }
    render(){
        let C=this.props.component;
        return (
            <div>
                <C/>
            </div>
        )
    }
}