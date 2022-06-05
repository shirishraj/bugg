import React, { Component } from 'react';
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    //get data from the endpoint
    fetch("http://localhost:5000/api/getUsers", {
      method: "GET"
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      console.log(json);
  
      // provide an 'id' field for displaying
      var data =[];
      for (let d of json.data) {
        d.id = d._id;
        data.push(d);
      }
      setData(json.data);
  
    })
  }, []);

  
  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/users/test" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  return (
    <div className="datatable">
      
        
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
