import { useState } from "react"

export const Pens=()=>{
    const [pen,setPen]=useState(10);
    const handlepens=(value)=>{
        setPen(pen+value);
    }
    return(<div className="items">
    <span>Pens:</span>
    <button className="addPen" onClick={()=>{handlepens(1)}}>
        +
    </button>
    <button className="remPen" onClick={()=>{handlepens(-1)}}>
        -
    </button>
    <span className="totalPens">{pen}</span>
</div>
)

}