import React, { Component, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
// import jwt from 'jwt-simple';
import { useNavigate } from 'react-router-dom';


const Home = () => {

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

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Issues)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Issues</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
