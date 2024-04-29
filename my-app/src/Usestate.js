import React, { useState } from 'react'
import "./CSS/Usestate.css";
export default function Usestate() {
    var is_clicked=false;
    const [textColor, settextColor] = useState("red"); // by default
    const [text, setText] = useState("hello world"); // add a new state variable for the text
    
    const [totalcount, setTotalCount] = useState(0);
    function handleClick() {
        if(!is_clicked){
        settextColor("blue");
        setText("Code Eat Live Repeat");
        is_clicked=true;} // change the text here
    else{
        settextColor("yellow");
        setText("double");
        is_clicked=false; // change the text here
    }}
    function Increment(){
        setTotalCount(totalcount+1);
    }
    function Decrement(){
        if(totalcount>0){
        setTotalCount(totalcount-1);}
        else{
            alert("nothing to remove!");
        }
    }
    return (
        <div>
            <h1 style={{ 5r }}>{text}</h1> {/* display the text here */}
            <button onClick={handleClick}>Change Text</button>
            <h2 style={{ color: "white" }}>{totalcount}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

        </div>
    )
}