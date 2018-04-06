import React from "react";
import MovieBlock from "./Block/MovieBlock";

export default class MovieList extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="listBox">
                {this.props.movies.map((item,index)=>(
                    <MovieBlock key={index}
                                movie={item}/>
                ))}
            </div>
        )
    }
}
