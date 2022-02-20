import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState , useEffect } from "react";

export default function Educard2() {
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

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        img alt="Me" src={require("../pics/tu.jpg")}
        />
        
      {
        profiles.map((profile, i)=>{
        return (
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {profile.college}
        </Typography>
        </CardContent>
        )}
      )}
    
    </Card>
  );
}