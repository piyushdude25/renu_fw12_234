import { createContext } from "react";
import { useState } from "react";
export const CartContext=createContext();
export const  CartContextProvider=({children})=>{
    const [num,setNum]=useState(10);
    const handleChange=(value)=>{
        setNum(num+value);
    };
    return (<CartContext.Provider value={{num,handleChange}}>{children}</CartContext.Provider>);
};