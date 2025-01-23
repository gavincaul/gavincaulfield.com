import React from "react";
import './SkillsNavBar.css'
import pagesData from "../data/pages.json";
import { useNavigate } from "react-router-dom";





export default function SkillsNavBar(){
    const navigate = useNavigate();
    const skills  = pagesData.skills;

    function handleSkillsClick(id) {
        navigate(`/experience/skills/${id}`);
    }

    const highlight = () => {
        this.style = {"background": "rgb(215, 204, 204)"} //needs fix
    }

    return(

        <div className='navSkills'>
            {Object.keys(skills).map((e, index) => (
                <div className='skillsLink' onClick={() => handleSkillsClick(e)} key={index}> 
                {e}
                </div>    
            ))}
        </div>
        
    )
}
