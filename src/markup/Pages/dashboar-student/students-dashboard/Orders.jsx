import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import moment from 'moment';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../../actions/contacts';

import { useLocation } from 'react-router-dom';
import TimeTable from '../../TimeTable';
import PublishNews from '../../PublishNews';
import { IconButton } from '@mui/material';

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Alison Magid Juma',
    'Founder',
    'Rabat-Morocco',
    '+212698487054'
  ),
  createData(
    1,
    '19 Dec, 2021',
    'Peter Khamis',
    'CEO',
    'Juba, South Sudan',
    '+211922030149'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders({ setContactId }) {
  const courses = useSelector((state) => state.courses);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const location = useLocation();
  switch (location.pathname) {
    case '/dashboard':
      return (
        <React.Fragment>
          <Title>Board of Directors</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Address</TableCell>
                <TableCell align="right">Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell align="right">{`${row.amount}`}</TableCell>
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
    case '/students':
      return (
        <React.Fragment>
          <Title>List of the students Attending course</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Mode of Traing</TableCell>
                <TableCell align="right">Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{moment(row.updatedAt).fromNow()}</TableCell>
                  <TableCell>{row.givenName}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>{row.level}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.training}</TableCell>
                  <TableCell align="right">{`${row.phone}`}</TableCell>
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
    // contact zones
    case '/contact-zone':
      return (
        <Box sx={{ minWidth: 275 }}>
          {contacts.map((contact) => (
            <div
              key={contact._id}
              style={{ border: '1px solid gray', margin: '5px' }}
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
    // publish news
    case '/publish-news':
      return <PublishNews />;
    // time table
    case '/time-table':
      return <TimeTable />;
    // default case
    default:
      return '/dashboard';
  }
}
