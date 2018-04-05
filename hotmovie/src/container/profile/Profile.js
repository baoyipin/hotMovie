import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default class Profile extends React.Component{
    render(){
        return (
            <div>
                <Header>个人中心</Header>
               <Footer/>
            </div>
        )
    }
}