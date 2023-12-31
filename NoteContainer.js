import React from 'react'
import Note from '../Note/Note'

import "./NoteContainer.css";

function NoteContainer(props) {
  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>
          {
            props.notes.map((item,index)=> ( <Note
            key={index} note={item}
           />))
          }

        
    </div>
    </div>
  );
}

export default NoteContainer;