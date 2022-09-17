import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EventNoteIcon from '@mui/icons-material/EventNote';
export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/lesson">
      <ListItem button>
        <ListItemIcon>
          <CastForEducationIcon />
        </ListItemIcon>
        <ListItemText primary="Lesson" />
      </ListItem>
    </Link>
    <Link to="/library">
      <ListItem button>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
    </Link>
    <Link to="register-one">
      <ListItem button>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Register" />
      </ListItem>
    </Link>
    <Link to="request">
      <ListItem button>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Request" />
      </ListItem>
    </Link>
    <Link to="/hello">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="My-Profile" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <Link to="/time-table">
      <ListItem button>
        <ListItemIcon>
          <EventNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Time Table" />
      </ListItem>
    </Link>
    <Link to="/publish-news">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Publish News" />
      </ListItem>
    </Link>
    <Link to="/students">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItem>
    </Link>

    <Link to="/contact-zone">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </Link>
  </div>
);
