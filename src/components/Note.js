import React from "react";
import PropTypes from "prop-types";

export default function Note({ note, handleNoteChanged }) {
  const MAX_LENGTH = 200;
  function handleNoteChangedInternal(e) {
    const note = e.target.value;
    if (note.length < MAX_LENGTH) {
      handleNoteChanged(e);
    }
  }

  return (
    <section>
      <textarea
        className="app__note"
        onChange={handleNoteChangedInternal}
        value={note}
      ></textarea>
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
