import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {Provider} from "react-redux";
import {Route,HashRouter as Router,Switch} from "react-router-dom"
import Home from "./container/home/Home";
import Billboard from "./container/billboard/Billboard";
import Article from "./container/article/Article";
import Profile from "./container/profile/Profile";
import More from "./container/billboard/More";
import store from "./store/index";

import "./common/reset.less";
import './baseStyle/reset.less';
import Detail from "./container/detail/Detail";
//import "./common/reset.less"
import './baseStyle/reset.less';
import Reg from "./container/profile/reg/Reg";
import Login from "./container/profile/login/Login";
import ProtectedRoute from "./ProtectedRoute";

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/billboard" component={Billboard}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                <ProtectedRoute path="/article" component={Article}></ProtectedRoute>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/meantime" component={More}></Route>
                <Route path="/reg" component={Reg}></Route>
                <Route path="/login" component={Login}></Route>
            </Switch>
        </Router>
    </Provider>
,window.root);