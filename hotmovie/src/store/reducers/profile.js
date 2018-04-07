import * as Types from "../action-types";
let initState={
    user:null,
    msg:"",
    success:"",
    err:0
};
export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_USER_INFO:
            return {...state,...action.payload};
        case Types.CLEAR_INFO:
            return {...state,...action.userInfo}
    }
    return state;
}