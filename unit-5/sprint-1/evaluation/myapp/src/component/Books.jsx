import { useState } from "react"

export const Books=()=>{
    const [book,setBook]=useState(13)
    const handlebook=(value)=>{
        setBook(book+value);
    }
    return(<div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={handlebook(1)}>
        +
    </button>
    <button className="remBook" onClick={handlebook(-1)}>
        -
    </button>
    <span className="totalBooks">{book}</span>
</div>
)

}