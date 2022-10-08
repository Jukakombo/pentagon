import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import moment from "moment";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../../actions/contacts";

import { useLocation } from "react-router-dom";
import TimeTable from "../TimeTable";

import { Avatar, IconButton } from "@mui/material";
import PastExam from "../PastExam";
import SeniorOne from "../Senior-1";
import Library from "../Library";
import RegistrationForm from "../RegistrationForm";
import S1Form from "../studentsForms/S1Form";
import S2Form from "../studentsForms/S2-Form";
import S3Form from "../studentsForms/S3-Form";
import S4Form from "../studentsForms/S4-Form";
import TrainingForm from "../studentsForms/TrainingForm";
import Workshop from "../studentsForms/Workshop";
import SeniorTwo from "../Senior-2";
import SeniorThree from "../SeniorThree";
import SeniorFour from "../SeniorFour";
import { client } from "../../../sanityClient";
import teamsPictures from "../teamPictures";
import ArtsBooks from "../ArtsBooks";
import ScienceBooks from "../ScienceBooks";
import { useState } from "react";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders({ setContactId }) {
  // const courses = useSelector((state) => state.courses);
  const contacts = useSelector((state) => state.contacts);
  const [query, setQuery] = useState("");
  const [studentDetails, setStudentDetails] = React.useState([]);
  const dispatch = useDispatch();

  const searchByFilter = (data) => {
    return data.filter(
      (student) =>
        student.fullName.toLowerCase().includes(query) ||
        student.classYear.toLowerCase().includes(query) ||
        student.gender.toLowerCase().includes(query) ||
        student.idNumber.toLowerCase().includes(query)
        

    );
  };
  const location = useLocation();
  React.useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm"]{
          fullName, classYear, idNumber, gender,address,
      contact,_id
    } | order(fullName asc)`
      )
      .then((data) => {
        setStudentDetails(data);
      });
  }, []);
  switch (location.pathname) {
    case "/dashboard":
      return (
        <React.Fragment>
          <Title>Structure of the School Management</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell align="left">Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamsPictures.map((row) => (
                <TableRow key={row?._id}>
                  <TableCell>{row?.name}</TableCell>
                  <TableCell>{row?.position}</TableCell>
                  <TableCell>{row?.teachingClass}</TableCell>
                  <TableCell>{row?.subject}</TableCell>
                  <TableCell align="left">
                    <Avatar src={row?.image} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link
            color="primary"
            href="#"
            onClick={preventDefault}
            sx={{ mt: 3 }}
          >
            See more
          </Link>
        </React.Fragment>
      );
    // students case
    case "/students":
      return (
        <React.Fragment>
          <Title>{studentDetails?.length} Students</Title>
          <br />
          <input
            type="text"
            placeholder="Search student by Name, class, gender & I.D Number"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>I.D Number</TableCell>
                <TableCell>Gender</TableCell>

                <TableCell>Class</TableCell>
                <TableCell>Contact/Email</TableCell>

                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchByFilter(studentDetails)?.map((row) => (
                <TableRow key={row._id}>
                  {/* <TableCell>{moment(row.updatedAt).fromNow()}</TableCell> */}
                  <TableCell>{row?.fullName}</TableCell>
                  <TableCell>{row?.idNumber}</TableCell>
                  <TableCell>{row?.gender}</TableCell>

                  <TableCell>{row?.classYear}</TableCell>
                  <TableCell>{row?.contact}</TableCell>
                  <TableCell>{row?.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      );
    // contact zones
    case "/contact-zone":
      return (
        <Box sx={{ minWidth: 275 }}>
          {contacts.map((contact) => (
            <div
              key={contact._id}
              style={{ border: "1px solid gray", margin: "5px" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Time:&nbsp;{moment(contact.updatedAt).fromNow()}
                </Typography>
                <Typography variant="h5" component="div">
                  Name:&nbsp;{contact.givenName}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h5"
                  color="text.secondary"
                >
                  Phone:&nbsp;{contact.phone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email:&nbsp;{contact.email}
                </Typography>
                <Typography variant="h6">
                  message:&nbsp;{contact.message}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => dispatch(deleteContact(contact._id))}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </CardActions>
            </div>
          ))}
        </Box>
      );
    // arts book
    case "/arts-books":
      return <ArtsBooks />;
    case "/science-books":
      return <ScienceBooks />;

    // time table
    case "/time-table":
      return <TimeTable />;
    case "/past-exam":
      return <PastExam />;
    // senior-1
    case "/senior-1":
      return <SeniorOne />;
    // senior-2
    case "/senior-2":
      return <SeniorTwo />;
    // senior-3
    case "/senior-3":
      return <SeniorThree />;
    // senior-4
    case "/senior-4":
      return <SeniorFour />;
    // Libbrary
    case "/library":
      return <Library />;
    // student registration
    case "/student-registration":
      return <RegistrationForm />;
    // s1-form
    case "/s1-form":
      return <S1Form />;
    // s2-form
    case "/s2-form":
      return <S2Form />;
    // s3-form
    case "/s3-form":
      return <S3Form />;
    // s3-form
    case "/s4-form":
      return <S4Form />;
    // s3-form
    case "/training-form":
      return <TrainingForm />;
    case "/work-shop":
      return <Workshop />;
    // default case
    default:
      return "/dashboard";
  }
}
