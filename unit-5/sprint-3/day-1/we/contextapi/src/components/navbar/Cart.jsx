import { useContext } from "react"
import {CartContext} from '../../contexts/cartContext';

export const Cart=()=>{
    const num=useContext(CartContext);
    return <nav>No. of items: {num}</nav>
}