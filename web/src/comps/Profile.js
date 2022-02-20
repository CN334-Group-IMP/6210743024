import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { requirePropFactory } from '@mui/material';
import './Profile.css'
import { useState , useEffect } from "react";
import axios from "axios";

export default function Profile() {
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
    <div className='container'>
        <div className="Prof">
            <div className="Header">
                About me
            </div>




            <Stack direction="row">
                <img alt="Me" src={require("../pics/me.jpg")} className="Pic"/>  
            </Stack>
            
        </div>
        
    </div>
  );
}