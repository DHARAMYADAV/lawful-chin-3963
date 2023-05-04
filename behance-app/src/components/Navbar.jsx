import React from 'react';

import {HiOutlineSearch} from "react-icons/hi"
import {MdOutlineEmail} from "react-icons/md";
import {BsBell} from "react-icons/bs";
import {MdManageAccounts} from "react-icons/md";

function Navbar({logo}) {
  return (
          <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}>
      <div style={{
        // border:"1px solid black",
        width:"30%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
      }}>
        <img src={logo} alt="logo" width={40}/>
        <h3><b>For You</b></h3>
        <h3><b>Discover</b></h3>
        <h3><b>Live</b></h3>
        <h3><b>Hire</b></h3>
        <h3><b>Jobs</b></h3>
      </div>
      <div style={{
        // border:"1px solid black",
        width:"35%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"10px"
      }}>
        <div style={{
          border:"0.5px solid gray",
          borderRadius:"50%",
          padding:"8px",
          cursor:"pointer",
        }}>
        <HiOutlineSearch size="20px"/>
        </div>
      <div style={{
        borderRadius:"10%/50%",
        border:"0.5px solid gray",
        padding:"5px",
        paddingLeft:"15px",
        paddingRight:"15px",
        cursor:"pointer",
      }}>
        Share Your Work
      </div>
      <div style={{
        width:"45%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
        <MdOutlineEmail size="25px" cursor="pointer"/>
        <BsBell size="25px" cursor="pointer"/>
        <MdManageAccounts size="25px" cursor="pointer"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIcprjwGjIvQqqg1N-_XvNK0q-Y4R1OVGlqL_hx_FSrUtnt0ROwEQIR8_7we00ruN4H0&usqp=CAU" alt="error" style={{
          width:"20%"
        }}/>
      </div>
      </div>
      </div>
  )
}

export default Navbar