import React from "react";

export default class MovieList extends React.Component{

    render(){

        return (
            <div className="listBox">
                {this.props.movies.map((item,index)=>(
                    <div className="list" key={index}>
                        <img src={movie.img}/>
                    </div>
                    
                ))}
            </div>
        )
    }
}
