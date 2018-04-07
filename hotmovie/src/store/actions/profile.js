import * as Types from "../action-types";
import {reg,login,validate} from "../../api/profile";
export default {
    regAPI(username,password,history){
        return function (dispach,getState) {
            reg(username,password).then(res=>{
                dispach({type:Types.SET_USER_INFO,payload:res});
                setTimeout(function () {
                    history.push("/login")
                },1000);
            })
        }
    },
    loginAPI(username,password,history){
        return function (dispach,getState) {
            login(username,password).then(res=>{
                dispach({type:Types.SET_USER_INFO,payload:res});
                if (res.err===0){
                    setTimeout(function () {
                        history.push("/profile")
                    },1000);
                }
            })
        }
    },
    validateAPI(){
        return function (dispach,getState) {
            validate().then(res=>{
                dispach({type:Types.SET_USER_INFO,payload:res});
            })
        }
    },
    clearAPI(){
        return {type:Types.CLEAR_INFO,userInfo:{msg:"",success:""}}
    }
}