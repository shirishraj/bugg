import React, { Component } from 'react';
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bug Track</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            
          </li>
          </Link>
          <p className="title">TEAMS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Members</span>
            </li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/issueform" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Issue form</span>
            </li>
          </Link>
          <Link to="/projectform" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Project form</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>TeamInfo</span>
          </li>
          
          <p className="title">PROJECT</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Project Info</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Members</span>
          </li>
          <Link to="/issues" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Issues</span>
          </li>
          </Link>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Files</span>
          </li>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/logout" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
