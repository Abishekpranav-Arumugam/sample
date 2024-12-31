import React from "react";
import { useEffect, useState } from "react";

var UseEffect=()=>{
    var [text,setText]=useState("Kongu")
     useEffect(()=>{
        console.log("Changes happened to "+{text})
     },[text])


    return(
        <div>
            <p>Enter the Text</p>
            <input type="text" placeholder="Type Text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <p>THe Entered text is {text}</p>
        </div>
    )
}

export default UseEffect;