import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import FeedIcon from "@mui/icons-material/Feed";
export const mainListItems = (
  <div>
    <Link to="student-registration">
      <ListItem button>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="Registration" />
      </ListItem>
    </Link>

    <Link to="senior-1">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Senior-1" />
      </ListItem>
    </Link>
    <Link to="senior-2">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Senior-2" />
      </ListItem>
    </Link>

    <Link to="senior-3">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Senior-3" />
      </ListItem>
    </Link>
    <Link to="senior-4">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Senior-4" />
      </ListItem>
    </Link>

    <Link to="library">
      <ListItem button>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
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
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </Link>
  </div>
);
