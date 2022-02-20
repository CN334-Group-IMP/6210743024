import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Navbar.css'
import { useState , useEffect } from "react";
import axios from "axios";

export default function Navbar() {
    const [profiles, setProfiles] = useState([])

  useEffect(()=>{
    async function getAllProfile(){
      try {
        const profiles = await axios.get('http://127.0.0.1:8000/api/profile/')
        console.log(profiles.data)
        setProfiles(profiles.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProfile()
  }, [])

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