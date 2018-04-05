import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default class Billboard extends React.Component{
    render(){
        return (
            <div>
                <Header>榜单</Header>
                <Footer/>
            </div>
        )
    }
}