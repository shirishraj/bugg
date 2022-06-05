import React, { Component, useState } from 'react';
import "./issues.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/issues/issues"


const issues = () => {
  return (
    <div>
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
        
      </div>
    </div>
    <div>
    </div>
    </div>
  )
}

export default issues