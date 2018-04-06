import React from "react";
import "./movieList.less";
import {Link} from "react-router-dom";
export default class MovieList extends React.Component{

    render(){

        return (
            <div className="listBox">
                <p>热门电影</p>
                {this.props.movies.map((item,index)=>(
                    <Link className="list" key={index} to={{pathname:`/detail/${item.id}`,state:item}}>
                        <div className="img">
                            <img src={item.img}/>
                        </div>
                        <div className="info">
                            <p className="name">{item.tCn}</p>
                            <p className="des">{item.commonSpecial}</p>
                            <p className="detail">
                                <li>导演：{item.dN}</li>
                                <li>主演：{item.actors}</li>
                                <li>类型：{item.movieType}</li>
                                <li>上映时间：{item.rd}</li>
                            </p>
                        </div>
                        <div className="score">{item.r}</div>
                    </Link>
                ))}
            </div>
        )
    }
}
