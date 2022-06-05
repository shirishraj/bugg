import React, { Component } from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState, useEffect } from "react";


const Widget = ( {type} ) => {

  
  const diff=1;
  const [data, setData] = useState([]);
  const [dataIssue, setDataIssue] = useState([]);
  var amount=data;
  var amountIssue=dataIssue;
  useEffect(() => {
    //get data from the endpoint
    fetch("http://localhost:5000/api/getCount", {
      method: "GET"
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      
      console.log(json);
      amount=setData(json.data);
  
    })
  }, []);
  useEffect(() => {
    //get data from the endpoint
    fetch("http://localhost:5000/api/getCountIssue", {
      method: "GET"
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      
      console.log(json);
      amountIssue=setDataIssue(json.data);
  
    })
  }, []);
  
  // switch (type) {
  //   case "user":
  //     data = {
  //       title: "USERS",
  //       isMoney:false,
  //       link: "See all users",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "order":
  //     data = {
  //       title: "ISSUES",
  //       link: "View all issues",
        
  //     };
  //     break;
    
  //   default:
  //     break;
  // }
  

  
  
// const Widgets = ({ type }) => {
  

//   switch (type) {
//     case "user":
//       data = {
//         title: "USERS",
//         isMoney:false,
//         link: "See all users",
//         icon: (
//           <PersonOutlinedIcon
//             className="icon"
//             style={{
//               color: "crimson",
//               backgroundColor: "rgba(255, 0, 0, 0.2)",
//             }}
//           />
//         ),
//       };
//       break;
//     case "order":
//       data = {
//         title: "ISSUES",
//         link: "View all issues",
        
//       };
//       break;
    
//     default:
//       break;
//   }

 
// };
return (
  
  <div className="widget">
    <div className="left">
      <span className="title">USERS : </span>
      <span className="counter">
        {data.isMoney && "$"} {amount}
      </span>
      <span className="link">{data.link}</span>
    </div>
    
  
      <div className="right">
        <span className="title">ISSUES : </span>
        <span className="counter">
          
          {data.isMoney && "$"} {amountIssue}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  
    
);
}
export default Widget;
