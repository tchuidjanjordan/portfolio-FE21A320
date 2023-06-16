import React from "react";
import "./about.css";
import {FaGithub} from 'react-icons/fa'
import me from "../images/junior.jpg";
 function About(){

    return(
<div className="aboutDivStart" >
  <section id="about">
    <center>
  <h5>Get to know</h5> 
    <h2>About me</h2>
 </center>

    <div className="mainDivAbout">
<div className="leftSide">
    <div className="leftMainDiv">
           <div className="imageDiv">
    <img src={me} alt="" />
           </div>
    </div></div>

<div className="rightSide">
    <div className="up">
        <div className="experience one"><br />
           <span><FaGithub/></span><br />
   <h3>Experience</h3>
   <h4>4+ Years</h4>
        </div>
        <div className="clients one"><br />
      <span><FaGithub/></span><br />
   <h3>Clients</h3><br />
   <h5>13 world widely</h5>
        </div>
        <div className="project one"><br />
        <span><FaGithub/></span><br />
   <h3>Projects</h3>
   <h4>4 completed </h4>
        </div>
    </div>
  <div className="plainText"><h4>
  I am a young network engineer trained at the Faculty of Engineering of the University of Buea (FET). 
  I will be Obtaining my B.eng in 2025, and looking forward to work with the camtel network operator if giving
  the chance to work with them in order to gain experience. I study ethical hacking and cyber security 
   I am still learning and counting on the support
    of camtel netwrok to increase my knowledge at end of being an engineer not only graduate, but also qualified. I hold 
    , the cameroon Advanced level certificate.I am doing  my university studies at FET in English. I can therefore
     express myself in English.

     </h4>
  </div>

</div>


</div>
<button id="btnTalk">let's talk</button>
</section>
</div>
    );
}

export default About;