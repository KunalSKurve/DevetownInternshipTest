import React, { useState } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';

import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  const [notes, setNotes]= useState([
    {
      text:"adfafasaf",
      time:"3:12 AM",
      color: "cyan"
    },
    {
      text:"adfafasaf",
      time:"3:12 AM",
      color: "yellow"
    },
    {
      text:"adfafasaf",
      time:"3:12 AM",
      color: "pink"
    },
    {
      text:"adfafasaf",
      time:"3:12 AM",
      color: "cyan"
    },
  ]);

  return (
    <div className="App">
      <Sidebar/>
      <NoteContainer notes={notes}/>
    </div>
  );
}

export default App;
