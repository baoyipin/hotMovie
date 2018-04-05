import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
<<<<<<< HEAD
import {Provider} from "react-redux";
import {Route,HashRouter as Router,Switch} from "react-router-dom"
import Home from "./container/home/Home";
import Billboard from "./container/billboard/Billboard";
import Article from "./container/article/Article";
import Profile from "./container/profile/Profile";
import store from "./store/index";
import "./common/reset.less"
=======
import './baseStyle/reset.less';

>>>>>>> 6eff723f1f0eba2a1c32552c7d5334c9e32bacb2


render(
    <Provider store={store}>
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/billboard" component={Billboard}></Route>
            <Route path="/article" component={Article}></Route>
            <Route path="/profile" component={Profile}></Route>
        </Switch>
    </Router>
    </Provider>
,window.root);