import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Confirmation() {
  return (
    <section>
      <Typography variant="h5">It is sent!</Typography>
      <br></br>
      <p>
        Thank you for your report. Someone will review and get back to you
        shortly.
      </p>
    </section>
  );
}
