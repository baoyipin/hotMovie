import React from "react";
import "./homeheader.less"
import Transition from 'react-transition-group/Transition';
const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display:"none"
};
const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};
export default class HomeHeader extends React.Component{
    constructor(){
        super();
        this.state={isShow:false}
    }
    showoff=()=>{
        this.setState({isShow:!this.state.isShow})
    }
    render(){
        return (
            <div className="header-container">
                <div className="home-header">
                    <div className="hotMovies">hotMovies</div>
                    <div onClick={this.showoff}>
                        {this.state.isShow?<i className="iconfont icon-guanbi"></i>:
                            <i className="iconfont icon-chazhaobiaodanliebiao"></i>}
                    </div>
                </div>
                <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{
                    node.style.display="block";
                }} onExited={(node)=>{node.style.display="none"}}>
                    {(state) => (
                        <ul className="header-menu" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }} onClick={(e)=>{
                            this.showoff();
                        }}>
                            <li data-type="school">校园激情</li>
                            <li data-type="uniform">制服诱惑</li>
                            <li data-type="legs">美腿丝袜</li>
                        </ul>
                    )}
                </Transition>
            </div>
        )
    }
}