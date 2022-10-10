import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import FeedIcon from "@mui/icons-material/Feed";
export const mainListItems = (
  <div>
  
  <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="DashBoard" />
      </ListItem>
    </Link>
    
    <Link to="/notification">
      <ListItem button>
        <ListItemIcon>
          <MailOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </Link>
    <Link to="/student-registration">
      <ListItem button>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="Registration" />
      </ListItem>
    </Link>

    <Link to="/science-books">
      <ListItem button>
        <ListItemIcon>
        <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText
          primary="
        Science Books"
        />
      </ListItem>
    </Link>
    <Link to="/arts-books">
      <ListItem button>
        <ListItemIcon>
          <LocalLibraryIcon /> 
        </ListItemIcon>
        <ListItemText primary="Arts Books" />
      </ListItem>
    </Link>

    <Link to="/library">
      <ListItem button>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="General Books" />
      </ListItem>
    </Link>

    <Link to="/past-exam">
      <ListItem button>
        <ListItemIcon>
          <PlagiarismIcon />
        </ListItemIcon>
        <ListItemText primary="Past Exams" />
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
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Time Table" />
      </ListItem>
    </Link>

    <Link to="/students">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="All Students" />
      </ListItem>
    </Link>
  </div>
);
