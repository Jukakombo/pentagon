import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { useState } from "react";
import books from "./LibraryData";

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
  const [query, setQuery] = useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <input
            type="text"
            placeholder="Search books"
            style={{ outlined: "none" }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <PlagiarismIcon />
        </div>
        <Grid container item spacing={3}>
          {books.book1
            .filter((book) => book.subject.toLowerCase().includes(query)
            
            
            
            )
            .map((book) => (
              <FormRow key={book._id} book={book} />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
