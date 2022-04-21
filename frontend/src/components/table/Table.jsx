import React, { Component } from 'react';
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      issue: "Functional", 
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      priority: "Severe",
      date: "1 March",
      project: "Chimpvine",
      title: "Button not working",
      status: "Approved",
      
      
    },
    {
      id: 2235235,
      issue: "Functional",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      priority: "Medium",
      date: "22 March",
      project: "Worldlink",
      title: "Form not working",
      status: "Pending",
    },
    {
      id: 2342353,
      issue: "Functional",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      priority: "Low",
      date: "4 January",
      project: "Chimpvine",
      title: "Button not working",
      status: "Pending",
    },
    {
      id: 2357741,
      issue: "Functional",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      priority: "Low",
      date: "11 February",
      project: "Ncell",
      title: "Login not working",
      status: "Approved",
    },
    {
      id: 2342355,
      issue: "Functional",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      priority: "Medium",
      date: "1 April",
      project: "OMN",
      title: "Form not working",
      status: "Pending",
    },
  ];
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.issue}
                </div>  
              </TableCell>
              <TableCell className="tableCell">{row.priority}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.project}</TableCell>
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
