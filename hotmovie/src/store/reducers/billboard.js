import * as types from "../action-types";
let initState={
    meantime:{}
};
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_BILLBOARD:
            return {...state,meantime:action.payload}
    }
    return state;
}