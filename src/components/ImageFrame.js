import React from "react"

let styles = {
    borderWidth:"20px",
    padding:"10px"
}

export default function ImageFrame(props)
{
    return (
        <div style={styles}>
            <img src={props.image }/>
        </div>
    )
    
    
}