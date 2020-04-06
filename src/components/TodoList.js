import React from "react";
import Sidebar from "./common/Sidebar";
import MissionInput from "./common/MissionInput";

const TodoList = () => {
  return (
    <div className="bg-dark-blue content-wrapper" style={{ width: "100%" }}>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <MissionInput />
      </div>
    </div>
  );
};

export default TodoList;
