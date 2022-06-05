import React, { Component, useEffect } from 'react';
import "./issues.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../issuetablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


useEffect(() => {
  //get data from the endpoint
  fetch("http://localhost:5000/api/issues", {
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

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Issues
        <Link to="/issueform" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
