import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { client } from '../../sanityClient';

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

 

 

export default function SeniorThree() {
  const [seniorOneData, setSeniorOneData]=useState([])
  // console.log(seniorOneData)
  useEffect(() => {
    client
      .fetch(
        `*[_type=="senior3Form" ]{
          profilePicture{
          asset->{
          url
        }
        },
        fullName,
        address,
        idNumber,
        gender,contact,_id,_updatedAt
        
        }`
      )
      .then((data) => {
        setSeniorOneData(data);
      });
  }, []);
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
        {seniorOneData.map((student)=>(
            <StyledTableRow key={student._id}>
              <StyledTableCell component="th" scope="student">
                {student.fullName}
              </StyledTableCell>
              <StyledTableCell align="right">{student.idNumber}</StyledTableCell>
              <StyledTableCell align="right">{student.gender}</StyledTableCell>
              <StyledTableCell align="right">{student.contact}</StyledTableCell>
              <StyledTableCell align="right">{student.address}</StyledTableCell>
              <StyledTableCell align="right"><Avatar src={student?.profilePicture?.asset?.url} /></StyledTableCell>
            </StyledTableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
