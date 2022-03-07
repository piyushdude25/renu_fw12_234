import { useState } from "react"

export const Notebooks=()=>{
    const [notebook,setNotebook]=useState(44);
    const handlenotebook=(value)=>{
        setNotebook(notebook+value);
    }
    return(<div className="items">
    <span>Notebooks:</span>
    <button className="addNotebook" onClick={()=>{handlenotebook(1)}}>
        +
    </button>
    <button className="remNotebook" onClick={()=>{handlenotebook(-1)}}>
        -
    </button>
    <span className="totalNotebook">{notebook}</span>
</div>
)

}