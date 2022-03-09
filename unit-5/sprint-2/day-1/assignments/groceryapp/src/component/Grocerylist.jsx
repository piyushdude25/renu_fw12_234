export const Grocerylist=(props)=>{
    
    
    return<div><div className="red"><div>list id:{props.todo.title}</div><button onClick={()=>{
        props.onSelect(props.id)
    }}>Delete</button></div></div>
};