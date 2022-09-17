import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
function JubaCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{marginTop:"10px"}}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default JubaCalendar;
