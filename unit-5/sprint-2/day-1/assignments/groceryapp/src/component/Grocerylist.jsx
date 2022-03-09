export const Grocerylist=({todo,deleteitem,index})=>{
    
    
    return<div><div className="red"><div>list id:{todo.id}</div><>div</>list title:-{todo.title}</div><div>list status:{todo.status}</div><div><button onClick={()=>{
        deleteitem(todo,index);
    }}>Delete</button></div></div>
};