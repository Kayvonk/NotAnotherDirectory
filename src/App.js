import './App.css';
import * as API from "./utils/API";
import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";


function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getPeople()
      .then((res) => res.data.results)
      .then((data) => data.map(({ name, phone, email, picture }) => ({
        name,
        phone,
        email,
        image: picture.thumbnail
      })))
      .then(setEmployees);
  }, []);

  return (
    <>
      <Title>Employee Directory</Title>
      <SearchForm />
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
            {employees.map(employee => (
              <EmployeeCard
                name={employee.name.first + " " + employee.name.last}
                image={employee.image}
                phoneNumber={employee.phone}
                email={employee.email}
              />
            ))}
          </tbody>
        </table >
      </div >
    </>
  );

}


export default App;
