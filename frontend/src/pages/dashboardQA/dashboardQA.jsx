import React, { Component, useEffect, useState } from 'react';
import Sidebar from "../../components/sidebarQA/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboardQA.scss";
import Widget from "../../components/widget/Widget";

import Table from "../../components/table/Table";



const DashboardQA = () => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  useEffect(() => {
      //use our localStorage's token to
      //get the server to verify that the current user
      //is indeed an admin
      let token = localStorage.getItem('token');
      
      fetch("http://localhost:5000/api/verify", {
          method: "POST",
          headers: new Headers({
            'Authorization': token
          })
        })
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          if (json.roles == "Admin" || json.roles == "QA") {
            setIsUserAuthorized(true);
          }
        })

  })

  if (!isUserAuthorized) {
    return (<div><h2>Forbidden</h2></div>);
  }


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
        </div>
        
        <div className="listContainer">
          <div className="listTitle">Latest Issues</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashboardQA;
