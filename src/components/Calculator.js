import React from "react"



export default function Calculator(props) {
   
  
    return (<div>
     {calculate(props)}
    </div>)
}

function calculate(props)
{
     let result = 0;
    if (props.operation=='add') {
        result = props.x + props.y
    }
    else if (props.operation=='subtract') {
        result = props.x - props.y
    }
    
    return result;
}