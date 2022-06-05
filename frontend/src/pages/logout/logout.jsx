import { useState } from "react";
import React from 'react';
//import { json } from "express";

function Logout()
{
  
  localStorage.removeItem("token");
  window.location.href = "/"

}


export default Logout
