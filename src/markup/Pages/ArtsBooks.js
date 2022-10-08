import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
 

import PrimaryBooksTable from "./PrimaryBooksTable";
import Citizenship from "./TableDetails";
import EnglishLanguageTable from "./EnglishLanguageTable";
import Ict from "./IctTable";
import Kiswahili from "./KiswahiliTable";
import MathematicsTable from "./MathematicsTable";
import CommerceTable from "./CommerceTable";
import CreTable from "./CreTable";
import GeographyTable from "./GeographyTable";
import HistoryTable from "./HistoryTable";
import LiteratureTable from "./LiteratureTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ArtsBooks() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Commerce" {...a11yProps(0)} />
          <Tab label="C.R.E" {...a11yProps(1)} />
          <Tab label="Geography" {...a11yProps(2)} />
          <Tab label="History" {...a11yProps(3)} />
          <Tab label="Literature" {...a11yProps(4)} />
          <Tab label="Primary Books" {...a11yProps(5)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CommerceTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GeographyTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HistoryTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LiteratureTable />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <PrimaryBooksTable />
      </TabPanel>
    </Box>
  );
}
