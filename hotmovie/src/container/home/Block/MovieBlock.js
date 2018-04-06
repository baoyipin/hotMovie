import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieBlock.less'

export default class MovieBlock extends Component {

    render() {
        let {actors, commonSpecial, id, img, dN, movieType, r, rd, tCn} = this.props.movie;
        return (
            <Link className='movie-item-wrap' to={`/detail/${id}`}>
                <img src={img} alt=""/>
                <div className='movie-item-info'>
                    <h2>{tCn}
                        <span className='movie-score'>{r}</span>
                    </h2>
                    <p className='movie-des'>{commonSpecial}</p>
                    <p>导演：{dN}</p>
                    <p>主演：{actors}</p>
                    <p>类型：{movieType}</p>
                    <p>上映时间：{rd}</p>
                </div>
            </Link>
        )
    }
}

