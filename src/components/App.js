import React, { useState } from "react";
const App=()=>{
    const [first,setfirst]=useState("");
    const [second,setsecond]=useState("");
    const [data,setdata]=useState("");
    const [status,setstatus] =useState();
    function calculateFlames(e){
    e.preventDefault();
    let remainingfirst ="";
    let remainingsecond ="";
    let str1 = first.toLowerCase();
    let str2 = second.toLowerCase();
   for(let i=0;i<str1.length;i++){
    if(!str2.includes(str1[i])){
        remainingfirst += str1[i];
    }
   }
   for(let j=0;j<str2.length;j++){
    if(!str1.includes(str2[j])){
        remainingsecond += str2[j];
    }
   }
const result =  (remainingfirst.length+remainingsecond.length)%6;
// console.log(result);
switch(result){
    case 1:
      return  setstatus("Friends");
        case 2:
          return  setstatus("Love");
            case 3:
             return   setstatus("Affection");
                case 4:
              return  setstatus("Marriage");
                case 5:
              return  setstatus("Enemy");
                case 0:
              return  setstatus("Siblings");
              default:
       return setstatus("");

}

    }
    function cleardata(){
        setstatus()
        setfirst("");
        setsecond("");
    }
    return(
        <div id="main">
        <input type="text" placeholder="first name" data-testid="input1" onChange={(e)=>{setfirst(e.target.value)}} required value={first} name="name1"></input>
        <input type="text" placeholder="second name" data-testid="input2" onChange={(e)=>{setsecond(e.target.value)}} required value={second} name="name2"></input>
        <button type="submit" data-testid="calculate_relationship" onClick={calculateFlames}>Calculate Relationship Future</button>
        <button type="submit" data-testid="clear" onClick={cleardata}>Clear</button>
        {
            status &&  
            <h3 data-testid="answer">{status}</h3>
        } 
        </div>
    )
}
export default App