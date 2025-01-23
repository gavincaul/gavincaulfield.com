import { useParams, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import "./SkillsPage.css";
import skillsData from "../data/pages.json"
import Skill from "../components/Skill.tsx"
import SkillsNavBar from "../components/SkillsNavBar.tsx";
import NavBar from "../components/NavBar.tsx"



export default function SkillsPage(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [skills, setSkills] = useState({});
    
    useEffect(() => {
      const skills = skillsData.skills[id];
      if (skills) {
        setSkills(skills);
      } else {
        navigate('/experience/skills');
      }
    }, [id, navigate]);




    const rowCount = 3;

    const skillsArray = Object.keys(skills).map((key) => {
      const { name, time, experience, projects } = skills[key];  
  
      return (
          <Skill name={name} time={time} experience={experience} projects={projects} />
      );
    });
  
    const rows = [];
    for (let i = 0; i < skillsArray.length; i += rowCount) {
      rows.push(skillsArray.slice(i, i + rowCount));
    }
  
    return (

        <div className="background">
            <NavBar />
            <SkillsNavBar />
            
            {rows.map((row, rowIndex) => (
            <div className="skillRow" key={rowIndex}>
                {row}

            </div>
            
            ))}
            
            <Skill name="skill1" time="time" experience="2" projects={[]}/>

        </div>

    )
}


/*
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


css

.dropbtn {
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  /* Dropdown button on hover & focus 
  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }
  
  /* The container <div> - needed to position the dropdown content 
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* Dropdown Content (Hidden by Default) 
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown 
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  /* Change color of dropdown links on hover 
  .dropdown-content a:hover {background-color: #ddd;}
  
  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) 
  .show {display:block;}


*/