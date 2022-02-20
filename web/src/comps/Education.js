import * as React from 'react';
import { requirePropFactory } from '@mui/material';
import './Education.css'
import { useState , useEffect } from "react";
import axios from "axios";
import Educard from './Educard';
import Educard2 from './Educard2';

export default function Education() {

  return (
    <div className='card'>
       <h1>Education</h1>
       <div className="edu1">
       <Educard></Educard>
      </div>
       <div className="edu2">
       <Educard2></Educard2>
      </div>
    </div>    
  );
}