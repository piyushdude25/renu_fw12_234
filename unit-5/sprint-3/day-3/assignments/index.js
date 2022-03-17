const reducer =(store,{type,payload})=>{
   
    switch(type){
        case "ADD_COUNT":
            return {...store,count:store.count+payload};
         default:return store;
        }
};
class Store{
    constructor(reducer,initialState){
        this.reducer=reducer;
        this.state=initialState;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
        this.reducer(this.state,action)
    }
}
const initialState={count:0,todos:[]};
const store= new Store(reducer,initialState);
console.log(store.getState());
store.dispatch({type:"ADD_COUNT",payload:2});
console.log(store.getState());