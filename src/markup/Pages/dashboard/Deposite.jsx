import * as React from 'react';
 
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useEffect } from 'react';
import { client } from '../../../sanityClient';
import { useState } from 'react';



export default function Deposits() {
  const [students , setStudents] = useState([])
  const [femaleStudents , setFemaleStudents] = useState([])
  const [maleStudents , setMaleStudents] = useState([])
  const [seniorOne , setseniorOne] = useState([])
  const [seniorTwo , setSeniorTwo] = useState([])
  const [scienceSection , setScienceSection] = useState([])
  const [artSection , setArtSection] = useState([])

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
  // Art Section
  useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm" && classYear=="Senior-Four-Art-Section"]`
      )
      .then((data) => {
        setArtSection(data);
      });
  }, []);
   // science Section
   useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm" && classYear=="Senior-Four-Science-Section"]`
      )
      .then((data) => {
        setScienceSection(data);
      });
  }, []);
   // seniorOne Section
   useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm" && classYear=="Senior-One"]`
      )
      .then((data) => {
        setseniorOne(data);
      });
  }, []);
 // Senior Two Section
 useEffect(() => {
  client
    .fetch(
      `*[_type=="studentForm" && classYear=="Senior-Two"]`
    )
    .then((data) => {
      setSeniorTwo(data);
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
        Science Section: {scienceSection.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Art Section: {artSection.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        First Year: {seniorOne.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Second Year: {seniorTwo.length}
      </Typography>
    </React.Fragment>
  );
}
