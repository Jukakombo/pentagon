import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { client } from "../../../../sanityClient";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.fullName}
        </TableCell>
        <TableCell align="right">{row?.idNumber}</TableCell>
        <TableCell align="right">{row?.gender}</TableCell>
        <TableCell align="right">{row?.classYear}</TableCell>
        <TableCell align="right">{row?.yearAddmitted}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Full Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>D.O.B</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="right">Parent</TableCell>
                    <TableCell align="right">Contact</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row?.dateOfBirth}
                    </TableCell>
                    <TableCell>{row?.address}</TableCell>
                    <TableCell align="right">{row?.parent}</TableCell>
                    <TableCell align="right">{row?.contact}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function StudentList() {
  const [query, setQuery] = React.useState("");
  const [studentsDetails, setStudentsDetails] = React.useState([]);
  const searchByFilter = (data) => {
    return data.filter(
      (student) =>
        student.fullName.toLowerCase().includes(query) ||
        student.classYear.toLowerCase().includes(query) ||
        student.gender.toLowerCase().includes(query) ||
        student.idNumber.toLowerCase().includes(query)
        

    );
  };
  React.useEffect(() => {
    client
      .fetch(
        `*[_type=="studentForm"]{
          fullName, address, dateOfBirth, idNumber, address, classYear,gender,yearAddmitted,profilePicture{
        asset -> {
          _id,
          url
        }, alt
      },
      contact,_id
    } | order(fullName asc)`
      )
      .then((data) => {
        setStudentsDetails(data);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
        <div className="form-group">
    <label for="exampleInputEmail1">Search</label>
    
    <input
          type="text" className="form-control" aria-describedby="emailHelp"
          placeholder="Search student by Name, class, gender & I.D Number"
          onChange={(e) => setQuery(e.target.value)}
        />
  </div>
        
      

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell>Full Name</TableCell>
            <TableCell align="right">I.D. Number</TableCell>
            <TableCell align="right">Sex&nbsp;</TableCell>
            <TableCell align="right">Class&nbsp;</TableCell>
            <TableCell align="right">Year Admitted </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchByFilter(studentsDetails).map((row) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
