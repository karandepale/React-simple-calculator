import React from "react";
import info from "./Calculator.jsx";
import {add , Sub , mul , div } from "./Calculator.jsx";

function App(){
   return (

   <React.Fragment>
   <ul>
   <li>The sum of two number is : {add(20,20)} </li>
   <li>The subtraction of two number is : {Sub(20,10)} </li>
   <li>The multiplication of two number is : {mul(20,10)} </li>
   <li>The division of two number is :  {div(20,3)} </li>
   </ul>
   </React.Fragment>

   );
}
export default App;
