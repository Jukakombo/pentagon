import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import JubaCalendar from "./JubaCalendar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function FinalClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* <Clock
        value={value}
        className="react-clock"
        size={200}
        secondHandWidth={2}
        renderNumbers={true}
      /> */}

      <Card>
        <Box sx={{ minWidth: 350 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              School Days : Monday - Friday
            </Typography>
            <Typography variant="body2">
              Classes Start: 7:20 AM
              <br />
              Classes Close: 4:30 PM
              <br />
              Breakfast Time: 10:20 - 10:50 AM
              <br />
              Lunch Time: 12:20 - 1:20 PM
            </Typography>
            <Typography variant="body2"></Typography>
          </CardContent>
        </Box>
      </Card>

      
      <JubaCalendar />
    </Box>
  );
}
export default FinalClock;
