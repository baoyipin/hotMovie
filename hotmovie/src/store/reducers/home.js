import * as types from "../action-types";
let initState={
    movieList:[]
};
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_MOVIE_LIST:
            return {...state,movieList:action.payload.ms};
    }
    return state;
}