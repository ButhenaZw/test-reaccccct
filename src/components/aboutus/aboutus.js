import React from "react";
import { motion } from "framer-motion";

const AnimatedImage = () => {
  return (
    <>
     <div style={{display:"flex", marginTop:'20px' , justifyContent:"space-between"}}>
     <div style={{ width: "100%",
    backgroundColor: "#f9b200",
    height:" 3px",
    position: "relative",
    top: "10px"}} >
      </div>
      <div>
        <h1 style={{color:"#f9b200",position:"relative",left:"20px",width:"230px",bottom:"33px"}}>School History
        </h1>
      </div>
      <div style={{ width: "100%",
    backgroundColor: "#f9b200",
    height:" 3px",
    position: "relative",
    top: "10px"}} >
      </div>
      </div>
    <div>
     


     <div style={{display:"flex", marginTop:'20px' , justifyContent:"space-between"}}>
      <div style={{marginLeft:"20px" ,fontWeight:"bolder"}}>
        <h2 style={{color:"#f9b200"}}>1. Founding Vision</h2>
        <p>Our coding school was established with a clear mission: <br/>
         to equip students with cutting-edge programming skills and 
         prepare<br/>  them for a technology-driven world. Recognizing the
         increasing demand<br/> for skilled developers, we set out to create a learning environment that is<br/> both engaging and industry-focused.</p>
         <h2 style={{color:"#f9b200"}}>2. Early Beginnings
         </h2>
         <p>The idea for the school was born out of a passion for <br/>  technology and education. Initially, it started as a small <br/> 
         initiative offering coding workshops and mentorship programs.<br/> 
          These early efforts helped us understand the challenges students <br/> 
          face when learning to code and shaped our innovative teaching methodologies.</p>
          <h2 style={{color:"#f9b200"}}>3. Looking Ahead
          </h2>
          <p>As we continue to grow, our goal is to expand globally, introduce<br/>
           AI-powered learning assistants, and establish a research center for<br/>
            emerging technologies. Our vision is to empower the next generation of tech leaders and innovators.</p>

      </div>
    <div style={{position: "relative",top: "160px",}} className="relative w-[300px] h-[200px] overflow-hidden">
      <motion.img
        src="https://i.imgur.com/A6OWOcJ.png"
        alt="Background"
        className="absolute top-0 left-0"
        initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
        animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          bottom:"190px",
          position:"relative",
          left:"160px",
          width: "30px",
          zIndex: -1,
          rotate: "320deg",
        }}
      />
            <motion.img
        src="https://i.imgur.com/lqF9Bkr.png"
        alt="Background"
        className="absolute top-0 left-0"
        initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
        animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          bottom:"250px",
          position:"relative",
          left:"150px",
          width: "30px",
          zIndex: -1,
          rotate: "340deg",
        }}
      />
                  <motion.img
        src="https://i.imgur.com/xcRx3w3.png"
        alt="Background"
        className="absolute top-0 left-0"
        initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
        animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position:"relative",
          bottom:"340px",
          left:"160px",
          width: "30px",
          zIndex: -1,
          rotate: "340deg",
        }}
      />
                        <motion.img
        src="https://i.imgur.com/k9q2bvi.png"
        alt="Background"
        className="absolute top-0 left-0"
        initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
        animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position:"relative",
          bottom:"360px",
          left:"190px",
          width: "30px",
          zIndex: -1,
          rotate: "00deg",
        }}
      />

      <img
        src="https://i.imgur.com/SeX9qO6.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        style={{ zIndex: 1 , width:"300px"}} // Static image stays on top
      />
    </div>
    </div>
    </div>
    </>
  );
};

export default AnimatedImage;
