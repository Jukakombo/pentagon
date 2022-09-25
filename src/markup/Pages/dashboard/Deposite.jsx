import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useEffect } from 'react';
import { client } from '../../../sanityClient';
import { useState } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [students , setStudents] = useState([])
  const [femaleStudents , setFemaleStudents] = useState([])
  const [maleStudents , setMaleStudents] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm"]`
      )
      .then((data) => {
        setStudents(data);
      });
  }, []);
  // Male students
  useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm" && gender=="Male"]`
      )
      .then((data) => {
        setMaleStudents(data);
      });
  }, []);
  // Female students
  useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm" && gender=="Female"]`
      )
      .then((data) => {
        setFemaleStudents(data);
      });
  }, []);
 
  return (
    <React.Fragment>
      <Title>All Students: {" "} {students.length}</Title>
       
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Male Students: {maleStudents.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Female Students: {femaleStudents.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Science Section: {femaleStudents.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Art Section: {femaleStudents.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        First Year: {femaleStudents.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Second Year: {femaleStudents.length}
      </Typography>
    </React.Fragment>
  );
}
