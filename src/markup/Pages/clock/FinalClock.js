import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import JubaCalendar from "./JubaCalendar";

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
      <Clock
        value={value}
        className="react-clock"
        size={200}
        secondHandWidth={2}
        renderNumbers={true}
      />
      <JubaCalendar />
    </Box>
  );
}
export default FinalClock;
