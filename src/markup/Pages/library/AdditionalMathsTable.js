import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import books from "./books";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AdditionalMathsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Book Title</StyledTableCell>
            <StyledTableCell align="left">Read</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.addtionalMAths.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PictureAsPdfIcon />
                  &nbsp; {row.title.substring(0, 120)}
                </div>
              </StyledTableCell>
              <a href={`${row.url}`} target="_blank" rel="noreferrer">Read</a>

              <StyledTableCell align="right">{row.author}</StyledTableCell>
              <StyledTableCell align="right">
                <a
                  href={`${row.url}`}
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download Book
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
