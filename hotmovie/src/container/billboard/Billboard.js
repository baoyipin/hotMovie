import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/billboard";
import "./billboard.less";
@connect(state=>({...state.billboard}),actions)
export default class Billboard extends React.Component{
    componentDidMount(){
        let t=Date.now();
        this.props.getTop100InfoAPI(t,6);
    }
    render(){
        console.log(this.props.meantime)
        return (
            <div>
                <Header>榜单</Header>
                <div className="content">
                    <div className="meantime">
                        <div className="head">
                            <h2>时光网&nbsp;&nbsp;&nbsp;TOP250</h2>
                            <Link to={{pathname:"/meantime",type:"meantime"}}>发现更多<i className="iconfont icon-gengduo"></i></Link>
                        </div>
                        <ul className="list">
                            {this.props.meantime.movies&&this.props.meantime.movies.slice(0,5).map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={item.posterUrl}/>
                                        <p className="name">{item.name}</p>
                                        <p className="rating">{item.rating}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}