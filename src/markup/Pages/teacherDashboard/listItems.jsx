import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader"; 
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import {FiEdit} from "react-icons/fi"
import {BsFillPeopleFill} from "react-icons/bs"
import {GoCalendar} from "react-icons/go"
import {FcOvertime} from "react-icons/fc"
import {BiMale} from "react-icons/bi"
import {FaFemale} from "react-icons/fa"

import FeedIcon from "@mui/icons-material/Feed";
export const mainListItems = (
  <div>
    <Link to="teacherDashboard">
      <ListItem button>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="P.I.C Dashboard" />
      </ListItem>
    </Link>

    <Link to="Students-list">
      <ListItem button>
        <ListItemIcon>
          <BsFillPeopleFill />
        </ListItemIcon>
        <ListItemText primary="All Studens" />
      </ListItem>
    </Link>
    <Link to="male-students">
      <ListItem button>
        <ListItemIcon>
          <BiMale />
        </ListItemIcon>
        <ListItemText primary="Male Students" />
      </ListItem>
    </Link>
    <Link to="female-students">
      <ListItem button>
        <ListItemIcon>
          <FaFemale />
        </ListItemIcon>
        <ListItemText primary="Female Students" />
      </ListItem>
    </Link>

    <Link to="Calendar">
      <ListItem button>
        <ListItemIcon>
          <GoCalendar />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>
    <Link to="Kanban">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Kanban" />
      </ListItem>
    </Link>

    <Link to="editor">
      <ListItem button>
        <ListItemIcon>
          <FiEdit />
        </ListItemIcon>
        <ListItemText primary="Editor" />
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
          <FcOvertime />
        </ListItemIcon>
        <ListItemText primary="Time Table" />
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
