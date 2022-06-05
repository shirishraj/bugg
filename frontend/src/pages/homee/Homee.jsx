import React from 'react'
import HomeElements from '../../components/homeElements/HomeElements';

function homee() {

  // if (localStorage.getItem("token")){
  //   let role = localStorage.getItem("role");

  //   if (role == "Admin") {
  //     window.location.href = "/dashboardAdmin";
  //   } else if (role == "QA") {
  //     window.location.href = "/dashboardQA";
  //   } else {
  //     window.location.href = "/dashboard";
  //   }

  // }

  return (
    <div>
    <HomeElements />
    </div>
  )
}

export default homee