import './App.css';
import * as API from "./utils/API";
import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";


function App() {

  useEffect(() => {

    return (
      <>
        <Title>Employee Directory</Title>
        <div className="card">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="tableRow content">
            </tbody>
          </table >
        </div >
      </>
    );

  })
}

export default App;
