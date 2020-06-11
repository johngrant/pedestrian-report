import React, { useState, Fragment, useEffect } from "react";

import "./App.css";
import "reset-css";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Confirmation from "./components/Confirmation";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import reasons from "./components/reasons";

const theme = createMuiTheme();
function App() {
  const [dataUri, setDataUri] = useState("");
  const [reason, setReason] = useState({ name: "", value: "" });
  const [note, setNote] = useState("");
  const [stepIndex, setStep] = useState(0);
  const [coords, setCoords] = useState({ lat: 30.332184, lng: -81.655647 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const steps = [
    <StepOne key="step_one" next={next} />,
    <StepTwo
      key="step_two"
      note={note}
      handleNoteChanged={handleNoteChanged}
      reason={reason}
      handleReasonChanged={handleReasonChanged}
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
    <StepFour
      key="step_four"
      next={next}
      previous={previous}
      coords={coords}
      setCoords={setCoords}
    ></StepFour>,
    <StepFive
      key="step_five"
      note={note}
      reason={reason}
      dataUri={dataUri}
      coords={coords}
      previous={previous}
      send={send}
    ></StepFive>,
    <Confirmation key="confrimation" />,
  ];
  function next() {
    if (stepIndex < steps.length - 1) setStep(stepIndex + 1);
  }

  function previous() {
    if (stepIndex > 0) setStep(stepIndex - 1);
  }

  function showConfirmation() {
    setStep(5);
  }

  function send() {
    console.info("send it async!");
    showConfirmation();
  }

  function handleNoteChanged(e) {
    e.preventDefault();
    e.target && setNote(e.target.value);
  }

  function handleReasonChanged(e) {
    e.preventDefault();
    if (e.target) {
      const reason = reasons.find((s) => s.value === e.target.value);
      setReason(reason);
    }
  }

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  const currentStep = steps[stepIndex];
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header></Header>
          {currentStep}
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
