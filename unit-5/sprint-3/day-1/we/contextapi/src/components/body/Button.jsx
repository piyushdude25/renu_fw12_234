
import { useContext } from "react"
import {CartContext} from '../../contexts/cartContext';

export const Button=()=>{
    const {handleChange}=useContext(CartContext);
    return <button onClick={handleChange(1)}>ADD TO CART</button>
}