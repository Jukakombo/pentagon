import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingCircle() {
  return (
    <Box sx={{ display: 'flex' ,alignItems: "center", textAlign: "center", }}>
      <CircularProgress /> &nbsp; Loading ...
    </Box>
  );
}
