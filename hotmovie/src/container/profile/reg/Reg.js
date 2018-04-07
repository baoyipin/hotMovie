import React from "react";
import "./reg.less";
import Header from "../../../components/header/Header";
import actions from "../../../store/actions/profile";
import {connect} from "react-redux";
@connect(state=>({...state.profile}),actions)
export default class Login extends React.Component{
    componentWillMount(){
        this.props.clearAPI();
    }
    render(){
        return (
            <div className="box">
                <Header>注册</Header>
                <div className="username">
                    <label htmlFor="username">用户名</label>
                    <input type="text" id="username" ref={x=>this.username=x}/>
                </div>
                <div className="password">
                    <label htmlFor="password">密码</label>
                    <input type="text" id="password" ref={x=>this.password=x}/>
                </div>
                <div className="goReg">
                    <button onClick={()=>{
                        this.props.regAPI(this.username.value,this.password.value,this.props.history);
                        console.log(this.props)
                    }}>注册</button>
                </div>
                <div className="mes">
                    {this.props.err?this.props.msg:this.props.success}
                </div>
            </div>
        )
    }
}