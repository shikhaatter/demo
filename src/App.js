import React from "react";
import Covid from "./Covid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Register/Login";
import "bootstrap/dist/css/bootstrap.css";
import TestApi from "./Api/TestApi";
import Register from "./Register/Register";
import Calculator from "./Register/Calculator";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Covid" element={<Covid />} />
        </Routes>
      </Router> 
      {/* <Register /> */}
  
      {/* <TestApi/> */}
      {/* <SorryCard/> */}
    </div>
  );
};

export default App;

