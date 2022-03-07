import { useState } from "react";

export const InkPens=()=>{
    const [inkpen,setInkpen]=useState(78);
    const handleinkpen=(value)=>{
        setInkpen(inkpen+value);
    }
    return(<div className="items">
    <span>Inkpens:</span>
    <button className="addInkpen" onClick={handleinkpen(1)}>
        +
    </button>
    <button className="remInkpen" onClick={handleinkpen(-1)}>
        -
    </button>
    <span className="totalInkpens">{inkpen}</span>
</div>
)

}