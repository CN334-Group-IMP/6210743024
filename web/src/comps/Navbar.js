import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
    <ButtonGroup variant="contained" color="secondary" aria-label="outlined secondary button group" className="Butt">
      <Button>About me</Button>
      <Button>Education</Button>
      <Button>Skills</Button>
    </ButtonGroup>
    </div>
  );
}