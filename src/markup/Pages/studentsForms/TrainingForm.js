import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

export default function TrainingForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "54.5ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <Typography
            style={{ textDecoration: "underline", fontSize: "1.5rem" }}
          >
            {" "}
            Training Registration Form
          </Typography>
          <p>Falsifying information on this form will result in prosecution.</p>
        </div>
        <TextField label="Full Name" id="outlined-size-small" size="small" />
        <TextField
          label="Father's Name"
          id="outlined-size-small"
          size="small"
        />
        <TextField
          label="Mother's Name"
          id="outlined-size-small"
          size="small"
        />

        <TextField label="Class" id="outlined-size-small" size="small" />
        <TextField label="Address" id="outlined-size-small" size="small" />
        <TextField label="Email" id="outlined-size-small" size="small" />
        <TextField label="Phone Number" id="outlined-size-small" size="small" />
        <TextField label="ID No.:" id="outlined-size-small" size="small" />
        <TextField label="Gender" id="outlined-size-small" size="small" />
        <TextField label="Birth Day" id="outlined-size-small" size="small" />
      </div>
      <Button variant="contained" fullWidth>Submit</Button>
    </Box>
  );
}
