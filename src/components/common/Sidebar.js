import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        className="decoration-none sidebar-link"
        activeClassName="sidebar-link-active"
        to="/todoList"
      >
        <span class="material-icons sidebar-icon">list</span>
        <span className="sidebar-text text-upper">to-do list</span>
      </NavLink>
      <NavLink className="decoration-none sidebar-link" to="/analytics">
        <span class="material-icons sidebar-icon">bar_chart</span>
        <span className="sidebar-text text-upper">analytics</span>
      </NavLink>
      <NavLink className="decoration-none sidebar-link" to="/ringtones">
        <span class="material-icons sidebar-icon">library_music</span>
        <span className="sidebar-text text-upper">ringtones</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
