import React from "react";
import { useState }from "react";
import "./Skill.css";


export default function Skill({ name, time, experience, projects }){

    const [dropdown, setDropdown] = useState(false);
    const handleDropDown = () => {
        setDropdown(!dropdown);
    }

    return( // dropdown
        <div className="skill">
            <button onClick={handleDropDown} className="dropbtn">{name}</button>
            {dropdown && <div className="dropdownContent">
                <div className="skillAttributeBlock" style={{"--id": "1"}}>
                    <div className="time">{time}</div>
                </div>
                <div className="skillAttributeBlock" style={{"--id": "2"}}>
                    <div className="experience">{experience}</div>
                </div>
                <div className="skillAttributeBlock" style={{"--id": "3"}}>
                    <div className="projectList">{projects}</div>
                </div>

            </div>}
        </div>
    )
}