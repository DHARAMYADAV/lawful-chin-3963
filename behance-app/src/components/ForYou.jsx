import { useState,useEffect } from 'react';
import {BiLike} from "react-icons/bi";
import {GrView} from "react-icons/gr";

import React from 'react'
const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
  }
function ForYou() {
    const [data,setData]=useState([]);
  useEffect(()=>{
    fetchAndUpdateData();
  },[])

  function fetchAndUpdateData(){
    getData(`http://localhost:8080/forYou`).then((res)=>{
      console.log(res);
      setData(res);
    })
  }
  return (
    <div>
         <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr 1fr",
        width:"98%",
        margin:"auto",
        gap:"15px",
        marginTop:"40px",
      }}>
        {
          data?.map((item,ind)=>{
            return <div key={ind} style={{
              paddingBottom:"20px"
            }}>
              <img src={item.image} alt="image" style={{
                width:"100%",
                height:"300px",
                borderRadius:"3%",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }}/>
              <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                marginTop:"15px"
              }}>
                <div >
                <p><b>{item.name}</b></p>
                </div>
                <div style={{
                  width:"40%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-between"
                }}>
                  <div style={{
                    display:"flex",
                    alignItems:"center"
                  }}>
                  <BiLike color="gray"/>
                <p style={{
                  color:"gray"
                }}>{item.likes}</p>
                  </div >
                  <div style={{
                    display:"flex",
                    alignItems:"center"
                  }}>
                  <GrView color="gray"/>
                <p style={{
                  color:"gray"
                }}>{item.views}</p>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ForYou;