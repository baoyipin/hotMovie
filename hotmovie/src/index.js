import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
<<<<<<< HEAD

=======
>>>>>>> 2c4979e5d3c5de8d989a7f2c0cca00d39399ca8f
import {Provider} from "react-redux";
import {Route,HashRouter as Router,Switch} from "react-router-dom"
import Home from "./container/home/Home";
import Billboard from "./container/billboard/Billboard";
import Article from "./container/article/Article";
import Profile from "./container/profile/Profile";
import store from "./store/index";
<<<<<<< HEAD
import "./common/reset.less";
import './baseStyle/reset.less';

=======
import "./common/reset.less"




>>>>>>> 2c4979e5d3c5de8d989a7f2c0cca00d39399ca8f
render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/billboard" component={Billboard}></Route>
                <Route path="/article" component={Article}></Route>
                <Route path="/profile" component={Profile}></Route>
            </Switch>
        </Router>
    </Provider>
,window.root);