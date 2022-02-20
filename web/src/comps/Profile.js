import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { requirePropFactory } from '@mui/material';
import './Profile.css'

export default function Profile() {
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