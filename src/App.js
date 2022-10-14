import "./App.less";
import "antd/dist/antd.less";
import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./containers/LayoutDashboard";
import React from "react";


// Pages
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<LayoutDashboard />}>
        
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
