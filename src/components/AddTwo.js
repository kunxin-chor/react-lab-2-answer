import React from "react"

export default function AddTwo(props)
{
    let total = props.x + props.y;
    
    return (<div>
     {props.x} + {props.y} = {total}
    </div>)
}