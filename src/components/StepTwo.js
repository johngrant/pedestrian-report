import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import Reason from "./Reason";
import Note from "./Note";

export default function StepTwo({ note, handleNoteChanged, previous, next }) {
  return (
    <Fragment>
      <h1>Tell us the reason for your concern</h1>
      <Reason></Reason>
      <Note note={note} handleNoteChanged={handleNoteChanged}></Note>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </Fragment>
  );
}

StepTwo.propTypes = {
  note: PropTypes.string.isRequired,
  handleNoteChanged: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
