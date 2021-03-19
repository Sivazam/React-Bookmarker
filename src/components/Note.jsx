import React from "react";


function Note(props)
{
   return( 
  <div className ="note">
      <h1 className = "Note-title" >{props.title}</h1>
      <p calssName ="Note-p">{props.content}</p>
  </div>);
}

export default Note;