import React from 'react';
import './App.css';
import Profile_f from './comps/profile_f';
import Education_f from './comps/Education_f';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Skill from './comps/Skill';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path ='/' element={<Profile_f/>}/>
        <Route path ='/edu' element={<Education_f/>}/>
        <Route path ='/skill' element={<Skill/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
