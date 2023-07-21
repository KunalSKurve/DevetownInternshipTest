import React from 'react'

import './Note.css';

function Note(props) {
  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
    <textarea className='note_text' dafaultValue={props.note.text}/>
    <p>{props.note.time}</p>
    </div>
  );
}

export default Note