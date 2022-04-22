import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE } from "./action";
const init={
    loading:true,
    isAuthenticate:false,
    token:"",
    error:false
}
const loginReducer=(store=init,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return {...store,loading:true}
        case LOGIN_SUCCESS:
            return {...store,loading:false,isAuthenticate:true,token:payload,error:false}
        case LOGIN_FAILURE:
                return {...store,loading:false,error:true}
        default:
            return store
    }

}
export {loginReducer};