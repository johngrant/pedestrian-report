import React, { useState } from "react";
import "./App.css";
import "reset-css";
import Note from "./components/Note";
import Reason from "./components/Reason";
import Header from "./components/Header";
import CameraPreview from "./components/CameraPreview";
import Map from "./components/Map";

function App() {
  const [dataUri, setDataUri] = useState("");
  const [note, setNote] = useState("");

  function handleNoteChanged(e) {
    e.preventDefault();
    e.target && setNote(e.target.value);
  }

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  return (
    <div className="App">
      <Header></Header>
      <Reason></Reason>
      <Note note={note} handleNoteChanged={handleNoteChanged}></Note>
      <CameraPreview
        dataUri={dataUri}
        handleTakePhotoAnimationDone={handleTakePhotoAnimationDone}
      ></CameraPreview>
      <Map></Map>
      <button>Send</button>
    </div>
  );
}

export default App;
