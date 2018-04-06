import React from "react";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import actions from "../../store/actions/home";
import "./detail.less";
@connect(state=>({...state.home}),actions)
export default class Detail extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let movieId=this.props.match.params.id;
        let t=Date.now();
        this.props.getMovieInfoAPI({movieId,locationId:290,t});
    }
    render(){       let {content,titleCn,director,video}=this.props.movieInfo;
        return (
            <div className="detail">
                <Header>详情</Header>
                <div className="content">
                    <h1>{titleCn}</h1>
                    <div className="des">
                        <h2>剧情简介</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>
                    </div>
                    <div className="movier">
                        <h2>导演介绍</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{director?director.directorName:""}</p>
                        <img src={director?director.directorImg:null}/>
                    </div>
                    <div className="video" >
                        <h2>预告片</h2>
                        <video src={video} controls="controls"></video>
                    </div>
                </div>

            </div>
        )
    }
}