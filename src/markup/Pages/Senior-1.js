import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import seniorOneData from './SeniorOneData';
import { Avatar } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein,photo) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

export default function SeniorOne() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="right">ID No.</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Photo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {seniorOneData.senior1.map((student)=>(
            <StyledTableRow key={student.name}>
              <StyledTableCell component="th" scope="student">
                {student.name}
              </StyledTableCell>
              <StyledTableCell align="right">{student._id}</StyledTableCell>
              <StyledTableCell align="right">{student.gender}</StyledTableCell>
              <StyledTableCell align="right">{student.phone}</StyledTableCell>
              <StyledTableCell align="right">{student.address}</StyledTableCell>
              <StyledTableCell align="right"><Avatar src={student.photo} /></StyledTableCell>
            </StyledTableRow>
        ))}
         
            
      
        </TableBody>
      </Table>
    </TableContainer>
  );
}
