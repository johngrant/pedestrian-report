import React, { Fragment } from "react";
import PropTypes from "prop-types";
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

export default function StepFive({
  reason,
  note,
  dataUri,
  coords,
  previous,
  send,
}) {
  const classes = useStyles();
  const reasonText = reason ? reason.name : "";
  return (
    <Fragment>
      <Typography variant="h5">Review your report details.</Typography>
      <br></br>
      <Typography variant="h6">Reason</Typography>
      <p>{reasonText}</p>
      <Typography variant="h6">Note</Typography>
      <p>{note}</p>
      <Typography variant="h6">Picture</Typography>
      <img src={dataUri} width={240}></img>
      <Typography variant="h6">Location</Typography>
      <p>{JSON.stringify(coords)}</p>
      <div className={classes.root}>
        <Button color="primary" variant="contained" onClick={previous}>
          &lt; Previous
        </Button>
        <Button color="primary" variant="contained" onClick={send}>
          Send It!
        </Button>
      </div>
    </Fragment>
  );
}

StepFive.propTypes = {
  reason: PropTypes.object.isRequired,
  note: PropTypes.string.isRequired,
  dataUri: PropTypes.string.isRequired,
  coords: PropTypes.object.isRequired,
  previous: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};
