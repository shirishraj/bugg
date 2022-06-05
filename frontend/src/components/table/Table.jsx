import React, { Component } from 'react';
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from 'react';

const List = () => {
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

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Issue</TableCell>
            <TableCell className="tableCell">Priority</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Project</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="tableCell">{data.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {data.name}
                </div>  
              </TableCell>
              <TableCell className="tableCell">{data.priority}</TableCell>
              <TableCell className="tableCell">{data.timestamps}</TableCell>
              <TableCell className="tableCell">{data.project}</TableCell>
              <TableCell className="tableCell">{data.title}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${data.status}`}>{data.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
