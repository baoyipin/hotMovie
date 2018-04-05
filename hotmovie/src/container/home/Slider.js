import React from "react";
import ReactSwipe from "react-swipe";
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        return (
            <div className="homeSlider">
                <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
                    <div><img src="../../common/images/1.jpg"/></div>
                    <div><img src="../../common/images/2.jpg"/></div>
                    <div><img src="../../common/images/3.jpg"/></div>
                </ReactSwipe>
            </div>
        )
    }
}