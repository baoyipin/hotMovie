import React from "react";
import "./login.less";
import {Link} from "react-router-dom"
import Header from "../../../components/header/Header";
import actions from "../../../store/actions/profile";
import {connect} from "react-redux";
@connect(state=>({...state.profile}),actions)
export default class Login extends React.Component{
    render(){
        return (
            <div className="box">
                <Header>登录</Header>
                <div className="username">
                    <label htmlFor="username">用户名</label>
                    <input type="text" id="username" ref={x=>this.username=x}/>
                </div>
                <div className="password">
                    <label htmlFor="password">密码</label>
                    <input type="text" id="password" ref={x=>this.password=x}/>
                </div>
                <Link className="goReg" to="/reg">
                    <button>去注册</button>
                </Link>
                <div className="goLogin">
                    <button onClick={()=>{
                        this.props.loginAPI(this.username.value,this.password.value,this.props.history);
                    }}>登录</button>
                </div>
                <div className="mes">
                    {this.props.err?this.props.msg:this.props.success}
                </div>
            </div>
        )
    }
}