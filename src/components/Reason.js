import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import PropTypes from "prop-types";
import reasons from "./reasons";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

Reason.defaultProps = {
  handleChange: () => {},
  reason: { name: "", value: "" },
};

Reason.propTypes = {
  handleChange: PropTypes.func,
  reason: PropTypes.object,
};

export default function Reason({ handleChange, reason }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="reason-native-simple">Reason</InputLabel>
      <NativeSelect
        defaultValue={reason.value}
        onChange={handleChange}
        inputProps={{
          name: "reason",
          id: "reason-native-simple",
        }}
      >
        {reasons.map((s) => (
          <option key={s.value} value={s.value}>
            {s.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
