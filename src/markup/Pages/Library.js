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

export default function Library() {
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
          <Tab label="Citizenship" {...a11yProps(0)} />
          <Tab label="English Language" {...a11yProps(1)} />
          <Tab label="I.C.T" {...a11yProps(2)} />
          <Tab label="Kiswahili" {...a11yProps(3)} />
          <Tab label="Mathematics" {...a11yProps(4)} />
          <Tab label="Primary Books" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Citizenship />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EnglishLanguageTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ict />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Kiswahili />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MathematicsTable />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <PrimaryBooksTable />
      </TabPanel>
    </Box>
  );
}
