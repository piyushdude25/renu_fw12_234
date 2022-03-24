import { ADD_COUNT } from "./action";
import {SUB_COUNT} from './action';

export const reducer=(store,{type,payload})=>{

    switch(type){
        case ADD_COUNT:
            return {...store,count:store.count+payload}
        case SUB_COUNT:
            return {...store,count:store.count-payload}
        default:
           return store;
}};