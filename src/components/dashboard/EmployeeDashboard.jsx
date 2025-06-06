import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../tasklist/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="h-screen p-10 bg-[#1C1C1C]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
