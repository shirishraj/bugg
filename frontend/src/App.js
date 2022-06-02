import React, { Component } from 'react';
import Daashboard from "./pages/dashboard/dashboard";
import DashboardAdmin from "./pages/dashboardAdmin/dashboardAdmin";
import DashboardQA from "./pages/dashboardQA/dashboardQA";
import Home from "./pages/home/Home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Issues from "./pages/issues/issues";
import IssueForm from "./pages/issueform/issueform";

import ProjectForm from "./pages/projectform/projectform";
import Projects from "./pages/projects/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Dashboard } from '@mui/icons-material';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Daashboard />} />
            <Route path="dashboardAdmin" element={<DashboardAdmin />} />
            <Route path="dashboardQA" element={<DashboardQA />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="issues" element={<Issues />} />
            <Route path="projects" element={<Projects />} />
            <Route path="issueform" element={<IssueForm />} />
            <Route path="projectform" element={<ProjectForm />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Issue" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
