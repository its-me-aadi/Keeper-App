import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(newNote) {

  const [isExpanded,setIsExpanded]=useState(false);

  function Expended(){
    setIsExpanded(true);
  }
  

  return (
    <div>
      <form className="create-note">
        {isExpanded===true&&
        <input name="title" placeholder="Title" onChange={newNote.onChange} value={newNote.title}/>}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded?3:1} onChange={newNote.onChange} value={newNote.content} onClick={Expended}/>
        <Zoom in={isExpanded}>
        <Fab onClick={newNote.onClick} className="add-button">
          <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
