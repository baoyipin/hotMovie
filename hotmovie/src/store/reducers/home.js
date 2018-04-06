import * as types from "../action-types";
let initState={
    movieList:[],
    movieInfo:{}
};
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_MOVIE_LIST:
            return {...state,movieList:action.payload.ms};
        case types.SET_MOVIE_INFO:
            return {...state,movieInfo:action.payload}
    }
    return state;
}