import React, { useState } from "react";

import "./App.css";
import "reset-css";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

function App() {
  const [dataUri, setDataUri] = useState("");
  const [note, setNote] = useState("");
  const [stepIndex, setStep] = useState(0);

  const steps = [
    <StepOne key="step_one" next={next} />,
    <StepTwo
      key="step_two"
      note={note}
      handleNoteChanged={handleNoteChanged}
      next={next}
      previous={previous}
    />,
    <StepThree
      key="step_three"
      dataUri={dataUri}
      handleTakePhotoAnimationDone={handleTakePhotoAnimationDone}
      next={next}
      previous={previous}
    />,
    <StepFour key="step_four" next={next} previous={previous}></StepFour>,
    <StepFive key="step_five" previous={previous} send={send}></StepFive>,
  ];
  function next() {
    if (stepIndex < steps.length - 1) setStep(stepIndex + 1);
  }

  function previous() {
    if (stepIndex > 0) setStep(stepIndex - 1);
  }

  function send() {}
  function handleNoteChanged(e) {
    e.preventDefault();
    e.target && setNote(e.target.value);
  }

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  const currentStep = steps[stepIndex];
  return (
    <div className="App">
      <Header></Header>
      {currentStep}
    </div>
  );
}

export default App;
