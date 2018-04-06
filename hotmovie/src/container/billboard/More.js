import React from "react";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import actions from "../../store/actions/billboard";
import "./more.less";
@connect(state=>({...state.billboard}),actions)
export default class More extends React.Component{
    componentDidMount(){
        let t=Date.now();
        this.props.getTop100InfoAPI(t,6);
    }
    render(){
        return (
            <div className="container">
                <Header>时光网</Header>
                <ul className="list">
                    {this.props.meantime.movies&&this.props.meantime.movies.map((item,index)=>{
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
        )
    }
}