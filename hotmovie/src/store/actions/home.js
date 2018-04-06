import * as types from "../action-types";
import {getHotMovieInfo} from "../../service/movieService";
export default  {
    getMovieAPI(){
        return function (dispach,getState) {
            let t=Date.now();
            dispach({type:types.SET_MOVIE_LIST,payload:getHotMovieInfo({t})})
        }
    }
}