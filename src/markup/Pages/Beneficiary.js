 
 
 
// jkjdskc
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { client } from '../../sanityClient';
import { useEffect } from 'react';

 

 

export default function Beneficiary() {
    const [beneficiary, setBeneficiary] = useState([]);
console.log(beneficiary)
    useEffect(() => {
      client
        .fetch(
          `*[_type=="beneficiary"]{
        fullName,classYear, _id  
      } | order(fullName asc) `
        )
        .then((data) => {
            setBeneficiary(data);
        });
    }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name </TableCell>
            <TableCell align="right">Class </TableCell> 
            
            <TableCell align="right">I.D # </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beneficiary?.map((item) => (
            <TableRow pageSize={5}
        rowsPerPageOptions={[5]}
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item?.fullName}
              </TableCell>
              <TableCell align="right">{item?.classYear}</TableCell>
              <TableCell align="right">{item?._id}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}