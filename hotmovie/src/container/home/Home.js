import React from "react";
import HomeHeader from "./HomeHeader";
import "./home.less";
import Slider from "./Slider";
import Footer from "../../components/footer/Footer";
export default class Home extends React.Component{
    render(){
        return (
            <div className="homeContainer">
                <HomeHeader/>
                <Slider/>
                <Footer/>
            </div>
        )
    }
}