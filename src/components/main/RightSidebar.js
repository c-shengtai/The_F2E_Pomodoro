import React from "react";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-icons">
        <Link className="color-white" to="/todoList">
          <span class="material-icons">list</span>
        </Link>
        <Link className="color-white" to="/analytics">
          <span class="material-icons ">bar_chart</span>
        </Link>
        <Link className="color-white" to="/ringtones">
          <span class="material-icons ">library_music</span>
        </Link>
      </div>
      <div className="right-sidebar-text color-white">
        <span>POMODORO</span>
      </div>
    </div>
  );
};

export default RightSidebar;
