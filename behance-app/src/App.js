import logo from './logoBe.png';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import {BsFillSuitHeartFill,BsPersonCheckFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import ForYou from './components/ForYou';
import Following from './components/Following';
import Subscriptions from './components/Subscriptions';
import AdobeAd from './components/AdobeAd';
import Footer from './components/Footer';




function App() {
  const [firstColor,setFirstColor]=useState("black");
  const [secondColor,setSecondColor]=useState("gray");
  const [thirdColor,setThirdColor]=useState("gray");

  const [clicked,setClicked]=useState("foryou");
  
  return (
    <div className="App">
    <Navbar logo={logo}/>
      {/* //NEXT */}
      <div style={{
        display:"flex",
        alignItems:"center",
        marginTop:"50px",
        padding:"10px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }}>
        <div style={{
            display:"flex",
            alignItems:"center",
            paddingLeft:"20px",
            paddingRight:"20px",
            cursor:"pointer",
            
        }} onClick={()=>{
          setFirstColor("black")
          setSecondColor("gray")
          setThirdColor("gray")
          setClicked("foryou")
        }}>
          <div style={{
            paddingRight:"10px"
          }}>
          <BsFillSuitHeartFill color={firstColor}/>
          </div>
          
          <h1 style={{
            fontSize:"25px",
            color:firstColor
          }}><b >For You</b></h1>
        </div>
        <p style={{
          color:"gray"
        }}>|</p>
        <div style={{
           display:"flex",
           alignItems:"center",
           justifyContent:"space-between",
           paddingLeft:"20px",
           paddingRight:"20px",
           cursor:"pointer"
        }} onClick={()=>{
          setFirstColor("gray")
          setSecondColor("black")
          setThirdColor("gray")
          setClicked("following")
        }}>
          <div style={{
            paddingRight:"10px"
          }}>
          <BsPersonCheckFill size="20px" color={secondColor}/>
          </div>
          
          <h1 style={{
            fontSize:"25px",
            color:secondColor
          }}><b >Following</b></h1>
        </div>
        <p style={{
          color:"gray"
        }}>|</p>
        <div style={{
           display:"flex",
           alignItems:"center",
           justifyContent:"space-between",
           paddingLeft:"20px",
           paddingRight:"20px",
           cursor:"pointer"
        }} onClick={()=>{
          setFirstColor("gray")
          setSecondColor("gray")
          setThirdColor("black")
          setClicked("subscription")
        }}>
          <div style={{
            paddingRight:"10px"
          }}>
          <AiFillStar size="20px" color={thirdColor}/>
          </div>
          
          <h1 style={{
            fontSize:"25px",
            color:thirdColor
          }}><b >Your Subscriptions</b></h1>
        </div>
      </div>
     {
      clicked==="foryou"?<div><ForYou/><AdobeAd/><ForYou/></div>:clicked==="following"?<Following/>:<Subscriptions/>
     }
     
      <Footer/>
     
     
    </div>
  );
}

export default App;
