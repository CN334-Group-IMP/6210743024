import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import './Skillcard.css'

export default function Skillcard() {
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    async function getAllSkill() {
      try {
        const skills = await axios.get("http://127.0.0.1:8000/api/skill/");
        console.log(skills.data);
        setSkill(skills.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllSkill();
  }, []);
  
  return (
      
          <div className="skcard">
          {skills.map((skill, i) => {
            return (
            <div className="skcard2">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                img
                alt="Me"
                src={require("../pics/git.png")}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {skill.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {skill.point}
                </Typography>
              </CardContent>
            </Card>
            </div>
        );
      })}
      </div>
  );
}
