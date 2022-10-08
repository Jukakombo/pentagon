import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import books from './library/books';

 

export default function AgricultureTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align="right">Aproved by</TableCell>
            <TableCell align="right">Read More</TableCell>
            <TableCell align="right">Action</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.agriculture?.map((row) => (
            <TableRow
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.title}
              </TableCell>
              <TableCell align="right">{row?.author}</TableCell>
              
              <TableCell align="right">
              <a href={`${row?.url}`} target="blank">
                Read
              </a>
              </TableCell>
              <TableCell align="right">
            
              <a href={`${row?.url}`} download>
                Download
              </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
