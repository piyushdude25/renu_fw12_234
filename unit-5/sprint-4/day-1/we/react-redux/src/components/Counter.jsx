import { store } from "../redux/store";
export const Counter=()=>{
    console.log("store",store)
    console.log(store.getState());
    return <div><h1>counter:{store.getState().count}</h1><button onClick={()=>{
store.dispatch({type:"ADD_COUNT" ,payload:1})

    }}>Add 1</button></div>
}