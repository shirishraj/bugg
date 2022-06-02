import React, { Component } from 'react';

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Issue",
    headerName: "Issue",
    width: 120,
    
  },
  
  {
    field: "creator",
    headerName: "Creator",
    width: 120,
  },

  {
    field: "priority",
    headerName: "Priority",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    Issue: "functional",
    priority:"Low",
    creator:"shirish",
    status: "active",
    date:"20-04-2022"
  },
  {
    id: 2,
    Issue: "Nana",
    priority:"Low",
    creator:"shirish",
    status: "active",
    date:"21-04-2022"
  },
  {
    id: 3,
    Issue: "Functional issue",
    priority:"Low",
    creator:"Julius",
    status: "pending",
    date:"22-04-2022"
  },
  
];
