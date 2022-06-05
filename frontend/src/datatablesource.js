import React, { Component } from 'react';

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 120,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  
  {
    field: "roles",
    headerName: "Roles",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.roles}
        </div>
      );
    },
  },
];

// //temporary data
// export const userRows = [
//   {
//     id:1,
//     username: "shirish",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "raj@gmail.com",
//   },
//   {
//     id: 2,
//     username: "tama",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "tama@gmail.com",
//     status: "passive",
//   },
//   {
//     id: 3,
//     username: "nama",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "nama@gmail.com",
//     status: "active",
//   },
//   {
//     id: 4,
//     username: "raja",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "raja@gmail.com",
//     status: "active",
//   },
//   {
//     id: 5,
//     username: "Julius",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "juli@gmail.com",
//     status: "passive",

// },
// ]
