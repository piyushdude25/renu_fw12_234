//const {createStore}=require('redux');
import {createStore} from 'redux';
import { ADD_COUNT,addCount } from './redux/action.js';

const reducer =(store,{type,payload})=>{
   
    switch(type){
        case "ADD_COUNT":
            return {...store,count:store.count+payload};
        case "ADD_TODO":
                return {...store,todos:[...store.todos,payload]};
         default:return store;
        }
};
/*class Store{
    constructor(reducer,initialState){
        this.reducer=reducer;
        this.state=initialState;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
    this.state=    this.reducer(this.state,action)
    }
}*/
const initialState={count:0,todos:[]};
const store= createStore(reducer,initialState);
console.log(store.getState());
store.dispatch(addCount(10));
//console.log(store.getState());
store.dispatch(addCount(30));
//console.log(store.getState());
store.dispatch(addCount(2));
//console.log(store.getState());
store.dispatch({type:"ADD_TODO",payload:[4,6,8]});
store.dispatch({type:"ADD_TODO",payload:{"title":"react","faculty":"Prabhanjan"}});
console.log(store.getState());
console.log(store.getState());