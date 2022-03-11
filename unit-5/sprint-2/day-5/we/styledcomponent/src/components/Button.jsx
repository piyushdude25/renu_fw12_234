//import "./button.css";
import styled from "styled-components";
/*export const  Button=({children,onClick})=>{
  return<button onClick={onClick}>{children}</button>

}*/
const Button=styled.button` border:none;
background-color: ${({theme})=>theme};
border-radius: 5px;
padding:10px;
transition: all 0.4 0s;
margin: 5px;;
&:hover{
    background-color: chartreuse;
}
    

`;
export {Button}