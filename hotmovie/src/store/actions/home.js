import * as types from "../action-types";
import {getHotMovieInfo} from "../../service/movieService";
/*
export default  {
    getMovieAPI(){
        return function (dispach,getState) {
            let t=Date.now();
            dispach({type:types.SET_MOVIE_LIST,payload:getHotMovieInfo({t})})
        }
    }
}*/

export default {
    getMovieAPI(params){
        return function (dispatch,getState) {
            getHotMovieInfo(params).then(res=>{
                console.log(res);
                dispatch({type: types.SET_MOVIE_LIST,payload:res})
            }).catch(e=>{
                console.log('获取电影列表失败--',e);
            })
        }
    }
}