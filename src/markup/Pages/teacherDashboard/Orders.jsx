import * as React from "react";
 
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
import PublishNews from "../PublishNews";
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
import StudentList from "./elements/StudentList";
import ArtsBooks from "../ArtsBooks";
import ScienceBooks from "../ScienceBooks";

 
 


export default function Orders({ setContactId }) {
 
  const contacts = useSelector((state) => state.contacts);
   
  const [teacherdetail, setTeacherDetails] = React.useState([])
  const dispatch = useDispatch();
   
  const location = useLocation();
   React.useEffect(() => {
    client
      .fetch(
        `*[_type=="teacherForm"]{
          fullName, position, classTaken, subjects,profilePicture{
        asset -> {
          _id,
          url
        }, alt
      },
      contact,_id
    }`
      )
      .then((data) => {
        setTeacherDetails(data);
      });
  }, []);
  switch (location.pathname) {
// case teacher default dashboard
    case "/teacherDashboard":
    
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
                <TableCell align="left">Contact</TableCell>
                <TableCell align="right">Photo</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherdetail.map((row) => (
                <TableRow key={row?._id}>
                  <TableCell>{row?.fullName}</TableCell>
                  <TableCell>{row?.position}</TableCell>
                  <TableCell>{row?.classTaken}</TableCell>
                  <TableCell>{row?.subjects}</TableCell>
                  <TableCell align="left">{`${row?.contact}`}</TableCell>
                  <TableCell align="right">
                  <Avatar src={`${row?.profilePicture?.asset?.url}`} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </React.Fragment>
      );



    // students case
    case "/students-list":
      return (
        <React.Fragment>
          <StudentList />
        </React.Fragment>
      );
    // contact zones
    case "/contact-zone":
      return (
        <Box sx={{ minWidth: 275 }}>
          {contacts?.slice(0).reverse()?.map((contact) => (
            <div
              key={contact._id}
              style={{ border: "1px solid gray", margin: "5px" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Time:&nbsp;{moment(contact?.updatedAt).fromNow()}
                </Typography>
                <Typography variant="h5" component="div">
                  Name:&nbsp;{contact?.name}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h5"
                  color="secondary"
                >
                  Phone:&nbsp;{contact?.phone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email:&nbsp;{contact?.email}
                </Typography>
                <Typography variant="h6">
                  Subject:&nbsp;{contact?.subject}
                  <br />
                </Typography>
                <Typography variant="h6">
                  message:&nbsp;{contact?.message}
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
    // publish news
    case "/compose":
      return <PublishNews />;
    // time table
    case "/teacherTimeTable":
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
    case "/libraryBooks":
      return <Library />;
       // arts book
    case "/artsBooks":
      return <ArtsBooks />;
    case "/scienceBooks":
      return <ScienceBooks />;
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
      return "/teacherDashboard";
  }
}
