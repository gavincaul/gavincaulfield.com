import React from "react";
import NavBar from "../components/NavBar.tsx";
import ExperienceItemMaster from "../components/ExperienceItemMaster.tsx";
import ExperienceItem from "../components/ExperienceItem.tsx";
import "./Playground.css"


export default function Playground() {


  const bogusExperienceItems = [
    {
      name: "Mountain Escape",
      colors: ["#6B8E23", "#556B2F", "#8FBC8F", "#2E8B57"],
      img: require("../data/imgs/drums.jpg"),
      desc: "Explore breathtaking mountain trails and fresh air."
    },
    {
      name: "City Ride",
      colors: ["#F4A460", "#DEB887", "#D2B48C", "#A0522D"],
      img: require("../data/imgs/clout.jpg"),
      desc: "Cruise through vibrant city streets on two wheels."
    },
    {
      name: "Art Class",
      colors: ["#FF6347", "#FF4500", "#FF7F50", "#CD5C5C"],
      img: require("../data/imgs/hcilab.jpg"),
      desc: "Unleash creativity with paint and canvas."
    },
    {
      name: "Code Camp",
      colors: ["#4682B4", "#5F9EA0", "#6495ED", "#1E90FF"],
      img: require("../data/imgs/henhacks.jpg"),
      desc: "Learn coding skills in a fun, hands-on environment."
    },
    {
      name: "Cooking",
      colors: ["#FFD700", "#FFC107", "#FFB300", "#FFA000"],
      img: require("../data/imgs/icpc.jpg"),
      desc: "Discover new flavors and master delicious recipes."
    },
    {
      name: "Yoga Retreat",
      colors: ["#9370DB", "#8A2BE2", "#7B68EE", "#6A5ACD"],
      img: require("../data/imgs/MRChat.jpg"),
      desc: "Relax your mind and body with peaceful yoga sessions."
    },
    {
      name: "Photo Tour",
      colors: ["#2F4F4F", "#556B2F", "#6B8E23", "#8FBC8F"],
      img: require("../data/imgs/enhancing.jpg"),
      desc: "Capture stunning shots on a guided photography walk."
    },
    {
      name: "Music Fest",
      colors: ["#FF4500", "#FF6347", "#FF7F50", "#FF8C00"],
      img: require("../data/imgs/findingnolan.jpg"),
      desc: "Experience live music and vibrant festival energy."
    },
  ];
  
  const BogusItems = bogusExperienceItems.map((element, i) => (
    <ExperienceItem
      key={i}
      img={element.img}
      title={element.name}
      desc={element.desc}
      color={element.colors[0]}
    />
  ));
  return (
    <div className="background">
      <NavBar />
      <div className="expContainer">
        
        <ExperienceItemMaster name="CPUs" colors={["#A6D49F", "#9CB380", "#88A366", "#034C3C"]} img={require(`../data/imgs/cpus.jpg`)} items={BogusItems}/>
        <ExperienceItemMaster name="cpu" colors={["#91B7CA", "#689CB6", "#42728A", "#29339B"]}/>
        <ExperienceItemMaster name="rando" colors={["#F45D01","#C0FDFB", "#64B6AC", "#001B2E"]}/>
      </div>
    </div>
  );
}
