import React, { Component, useEffect, useState } from 'react';
import Sidebar from "../../components/sidebarAdmin/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboardAdmin.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
// import jwt from 'jwt-simple';
import { useNavigate } from 'react-router-dom';


const DashboardAdmin = () => {

  const [isUserAdmin, setisUserAdmin] = useState(false);

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
          if (json.roles == "Admin") {
            setisUserAdmin(true);
          }
        })

  })


  // const history =useNavigate()
  // useEffect(()=> {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const user =jwt.decode(token)
  //     if(!user){
  //       localStorage.removeItem('token')
  //       history('/login')
  //     }else {
  //       history('/')
  //     }
  //   }
  // },[])


  if (!isUserAdmin) {
    return (<div><h2>Verboten</h2></div>);
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

export default DashboardAdmin;
