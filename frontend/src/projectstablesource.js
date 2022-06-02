import React, { Component } from 'react';

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Name",
    headerName: "Name",
    width: 230,
    
  },
  {
    field: "creator",
    headerName: "Creator",
    width: 180,
  },

  

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },

  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  
  {
    field: "role",
    headerName: "Role",
    width: 120,
  },
  
];

//temporary data
export const userRows = [
  {
    id: 1,
    Name: "Ncell",
    
    status: "active",
    date: "26-04-2022",
    role:"QA",
    creator: "shirish",
  },
];
