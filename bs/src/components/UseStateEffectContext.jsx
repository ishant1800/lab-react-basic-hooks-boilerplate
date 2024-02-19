import { useContext } from "react";
import { ToggleTheme } from "../App";
import { useState } from "react";
import { useEffect } from "react";

function UseStateEffectContext(){
  const [like, updateLike] = useState(0);
  const [contentState, setContent] = useState(false);  

  useEffect(()=>{
    alert("Content Button Clicked");
  },[contentState])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"#2e2e2e":"#f0f0f0",
    color: theme?"#f0f0f0":"#2e2e2e",
    padding:"1rem",
    margin:"1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  }

  let updateContent=()=>{
    setContent((contentState) => !contentState );
  }
  let para=contentState?"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet velit a sem euismod iaculis. Sed eget mauris sit amet tellus elementum mattis. In at justo vel nulla luctus posuere.":""

  return(
    <div style={themeStyle}>
      <div>{para}</div>
      <button onClick={updateContent}>{contentState ? "Hide Content" : "Show Content"}</button>
      <p>{like} {like === 1 ? "Like" : "Likes"}</p>
      <button onClick={()=>updateLike(like=>like+1)}>Like</button>
    </div>
  )
}

export default UseStateEffectContext;
