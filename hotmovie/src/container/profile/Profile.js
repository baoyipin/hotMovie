import React from "react";
import "./profile.less";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import touxiang from "./touxiang.jpg";
import tiger from "./tiger.jpg";
import actions from "../../store/actions/profile";
import {connect} from "react-redux";
@connect(state=>({...state.profile}),actions)
export default class Profile extends React.Component{
    componentWillMount(){
        this.props.validateAPI();
    }
    render(){
        return (
            <div>
                <Header>个人中心</Header>
                <div className="profileContent">
                    <img src={this.props.user?tiger:touxiang}/>
                    <Link to="/login">{this.props.user?this.props.user:"登录"}</Link>
                </div>
                <Footer/>
            </div>
        )
    }
}