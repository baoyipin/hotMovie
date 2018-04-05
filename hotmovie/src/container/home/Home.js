import React from "react";
import HomeHeader from "./HomeHeader";
import "./home.less";
import Slider from "./Slider";
export default class Home extends React.Component{
    render(){
        return (
            <div>
                <HomeHeader/>
                <Slider/>
            </div>
        )
    }
}