import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default class Article extends React.Component{
    render(){
        return (
            <div>
                <Header>动态</Header>
                <Footer/>
            </div>
        )
    }
}