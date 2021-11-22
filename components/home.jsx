import React, { Component } from "react";
import EmpTable from "./empTable";

class Home extends Component {
  state = {
    count: 0,
    emplyoee: {
      empId: 1,
      empName: "Ankitha",
      salary: 55000,
    },
    employees: [
      {
        empId: 2,
        empName: "Jahnavi",
        salary: 45000,
      },
      {
        empId: 3,
        empName: "SriLakshmi",
        salary: 35000,
      },
      {
        empId: 4,
        empName: "JayaSri",
        salary: 40000,
      },
      {
        empId: 5,
        empName: "Vamshi",
        salary: 60000,
      },
    ],
  };
  render() {
    return (
      <div>
        <EmpTable
          employees={this.state.employees}
          employee={this.state.emplyoee}
        />
      </div>
    );
  }
}

export default Home;
