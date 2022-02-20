import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar';
import Profile from './comps/Profile';
import { useState , useEffect } from "react";
import axios from "axios";
function App() {
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

    <div className="App">
     <Navbar></Navbar>
     <Profile></Profile>
     {
       profiles.map((profile, i)=>{
         return (
           <h2>{profile.name} {profile.nickname}</h2>
         )
       })
     }

    </div>
  );
}

export default App;
