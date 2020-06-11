import React from "react";
import PropTypes from "prop-types";
import Reason from "./Reason";
import Note from "./Note";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function StepTwo({
  note,
  handleNoteChanged,
  reason,
  handleReasonChanged,
  previous,
  next,
}) {
  const classes = useStyles();
  return (
    <section>
      <Typography variant="h5">Tell us about your concern.</Typography>
      <br></br>
      <Reason handleChange={handleReasonChanged} reason={reason}></Reason>
      <Note note={note} handleNoteChanged={handleNoteChanged}></Note>
      <div className={classes.root}>
        <Button color="primary" variant="contained" onClick={previous}>
          &lt; Previous
        </Button>
        <Button color="primary" variant="contained" onClick={next}>
          Next &gt;
        </Button>
      </div>
    </section>
  );
}

StepTwo.propTypes = {
  note: PropTypes.string.isRequired,
  handleNoteChanged: PropTypes.func.isRequired,
  reason: PropTypes.object.isRequired,
  handleReasonChanged: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
