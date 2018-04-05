import React from "react";
import ReactSwipe from "react-swipe";
import pic1 from "../../common/images/1.jpg";
import pic2 from "../../common/images/2.jpg";
import pic3 from "../../common/images/3.jpg";
import "./slider.less"
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        const options={
            continuous: true,
            auto:2000,
            speed:500,
            callback:(index)=> {
                this.setState({index})
            }
        }
        return (
            <div className="homeSlider">
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div><img src={pic1}/></div>
                    <div><img src={pic2}/></div>
                    <div><img src={pic3}/></div>
                </ReactSwipe>
                <div className="dots">
                    <span className={this.state.index==0?"active":""}></span>
                    <span className={this.state.index==1?"active":""}></span>
                    <span className={this.state.index==2?"active":""}></span>
                </div>
            </div>
        )
    }
}