import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { useState } from "react";
import books from "./LibraryData";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow({book}) {
  return (
    <>
      <Grid item xs={4}>
        <Item>{book.subject} Teacher:{book.teacher} Year:{book.Year}
         
        </Item>
      </Grid>
       
       
    </>
  );
}

export default function Library() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        
        <Grid container item spacing={3}>
           <Link to={"#"} >

           </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
