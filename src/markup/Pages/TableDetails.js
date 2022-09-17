import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Biology', "Alison-J", "2019", "Yes", "Download"),
  createData('Physics', 237, 9.0, 37, 4.3),
  createData('Chemistry', 262, 16.0, 24, 6.0),
  createData('Maths', 356, 16.0, 49, 3.9),
  createData('CRE', 356, 16.0, 49, 3.9),
  createData('English', 356, 16.0, 49, 3.9),
  createData('Arabic', 356, 16.0, 49, 3.9),

];

export default function TableDetails() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align="right">Teacher</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
            
              <a href="/pdf/statistiques_corrige.pdf" download>
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
