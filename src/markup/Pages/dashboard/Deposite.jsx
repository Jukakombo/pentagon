import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
 
 
  return (
    <React.Fragment>
      <Title>Recent Visits</Title>
      <Typography component="p" variant="h4">
        1k+
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Number of visitors
        </Link>
      </div>
    </React.Fragment>
  );
}
