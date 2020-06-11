import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  TextareaAutosize,
} from "@material-ui/core";

export default function Note({ note, handleNoteChanged }) {
  const MAX_LENGTH = 640;
  function handleNoteChangedInternal(e) {
    const note = e.target.value;
    if (note.length <= MAX_LENGTH) {
      handleNoteChanged(e);
    }
  }

  return (
    <section>
      <FormControl>
        <FormHelperText>Add a note.</FormHelperText>
        <TextareaAutosize
          aria-label="Note text area"
          placeholder="Enter a longer note here."
          onChange={handleNoteChangedInternal}
          rowsMin={4}
          rows={25}
          rowsMax={25}
          value={note}
          style={{ width: 320 }}
        ></TextareaAutosize>
        {/* <textarea
          className="app__note"
          onChange={handleNoteChangedInternal}
          value={note}
        ></textarea> */}
      </FormControl>
      <p>
        {note.length} / {MAX_LENGTH}
      </p>
    </section>
  );
}

Note.propTypes = {
  note: PropTypes.string.isRequired,
  handleNoteChanged: PropTypes.func.isRequired,
};
