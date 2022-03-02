import React, { Component } from 'react';

// input like: boolean true if liked 
const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked) classes+= "-o"; 
    return (
        <i  
            style={{cursor:'pointer'}} 
            className={classes} 
            onClick={props.onClick}
            aria-hidden="true">
            
        </i> 
     );
}
export default Like ;
  
    