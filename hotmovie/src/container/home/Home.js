import React from "react";
import HomeHeader from "./HomeHeader";
import "./home.less";
import Slider from "./Slider";
import Footer from "../../components/footer/Footer";
import MovieList from "./MovieList";
import {connect} from "react-redux";
import actions from "../../store/actions/home";
//@connect(state=>({...state.home}),actions)
import {getHotMovieInfo} from "../../service/movieService";

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={movieList:[]}
    }
    componentDidMount(){
        let t=Date.now();
        let hotMovieInfo;
        getHotMovieInfo({t}).then((data)=> {
            hotMovieInfo=data.ms;
            console.log(hotMovieInfo); 
            this.setState({movieList:hotMovieInfo},()=>{
                console.log(this.state.movieList)
            })
        });



    }
    render(){
        return (
            <div className="homeContainer">
                <HomeHeader/>
                <Slider/>
                <MovieList movies={this.state.movieList}/>
                <Footer/>
            </div>
        )
    }
}
//export default connect(state=>({...state.home}),actions)(Home);