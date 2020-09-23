import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav.js";
import SiteCard from "../components/SiteCard/index.js";
import Link from "next/link";

export default function works() {
  const [app, setApp] = useState({
    img: "./wandersurfacepro.png",
    name: "Wandr",
    type: "Web App",
  });

  const[dishtracker,setDish] = useState({
    img: './dishtracker.gif',
    name:'DishTracker',
    type: "Web App"
  })

  
  useEffect(() => {
    setApp(app);
  });

  return (
    <>
      <SiteCard {...app}></SiteCard>
    >
       <SiteCard {...dishtracker}></SiteCard> 
    </>
  );
}

// 9.17.20 11:21 am - having trouble using useEffects to pass new params
