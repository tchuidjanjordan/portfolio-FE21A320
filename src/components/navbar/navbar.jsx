import React from "react";
import "./navbar.css";
import {MdHome ,MdPerson ,MdOutlineComputer,MdOutlineChatBubbleOutline, MdOutlineHeartBroken} from 'react-icons/md'
 function Navbar(){

    return(
        
<div className="navBar">
    <div id="navItems">
<ul>
    <li id="home"><div className="two"><a href="/" > <MdHome /></a></div></li>
    <li> <div className="two"> <a href="#about">  <MdPerson /></a> </div></li>
    <li>  <div className="two"><a href="#portfolio">    <MdOutlineComputer /></a> </div></li>
    <li>  <div className="two"><a  href="#testimonial"> <MdOutlineHeartBroken /></a> </div></li>
    <li id="letTalk">  <div className="two"><a href="letsTalk"> <MdOutlineChatBubbleOutline/></a> </div></li>
</ul>
</div></div>
    );
}

export default Navbar; 