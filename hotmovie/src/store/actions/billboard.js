import * as types from "../action-types";
import {getTop100Info} from "../../service/movieService";
export default {
    getTop100InfoAPI(params){
        return function (dispach,getState) {
            getTop100Info(params).then(data=>{
                console.log(data);
                dispach({type:types.SET_BILLBOARD,payload:data})
            })
        }
    }
}