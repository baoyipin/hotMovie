import React from "react";
import "./footer.less";
import {NavLink} from "react-router-dom"


export default class Footer extends React.Component{
    render(){
        return (
            <nav className="footer">
                <NavLink to="/" exact={true}>
                    <i className="iconfont icon-zhuye"></i>
                    <span>主页</span>
                </NavLink>
                <NavLink to="/billboard">
                    <i className="iconfont icon-chaxun"></i>
                    <span>榜单</span>
                </NavLink>
                <NavLink to="/article">
                    <i className="iconfont icon-bofang"></i>
                    <span>动态</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-gerenzhongxin"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
