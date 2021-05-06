import './App.css';
import * as API from "./utils/API";
import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";

import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [employees, setEmployees] = useState([]);
  const [fieldToSort, setFieldToSort] = useState('name.first');
  const [sortOrder, setSortOrder] = useState(-1);
  const [nameFilter, setNameFilter] = useState("");

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
  const nameFilterRegExp = new RegExp(nameFilter, "i")
  const getField = (employee) => {
    switch (fieldToSort) {
      case "name.first":
        return employee.name.first
      case "name.last":
        return employee.name.last
      default:
        return employee[fieldToSort]
    }
  }
  const updateSort = (field) => {
    if (fieldToSort === field) {
      setSortOrder(-sortOrder)
    }
    else setFieldToSort(field)
  }

  return (
    <>
      <Title>Employee Directory</Title>
      <SearchForm setNameFilter={setNameFilter} />
      <div className="card container-fluid">
        <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th onClick={() => updateSort("name.first")}>Name  <FontAwesomeIcon icon={faSort} /></th>
                <th>Image</th>
                <th>Phone Number</th>
                <th onClick={() => updateSort("email")}>Email <FontAwesomeIcon icon={faSort} /></th>
              </tr>
            </thead>
            <tbody className="tableRow content">
              {employees
                .filter((employee) =>
                  nameFilterRegExp.test(employee.name.first) ||
                  nameFilterRegExp.test(employee.name.last) ||
                  nameFilterRegExp.test(employee.email)
                ).sort((employeeA, employeeB) => {
                  const a = getField(employeeA)
                  const b = getField(employeeB)
                  if (a < b) {
                    return sortOrder
                  }
                  if (a > b) {
                    return -sortOrder
                  }
                  return 0
                })
                .map(employee => (
                  <EmployeeCard
                    name={employee.name.first + " " + employee.name.last}
                    image={employee.image}
                    phoneNumber={employee.phone}
                    email={employee.email}
                  />
                ))}
            </tbody>
          </table >
        </div>
      </div >
    </>
  );
}

export default App;
