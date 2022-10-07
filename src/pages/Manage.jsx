import React from "react";
import "./manage.css";
import Sidebar from "../component/sidebar/Sidebar";
import ManageAcc from "../component/Manage Accounts/ManageAcc";

const Manage = () => {
  return (
    <div className="manage_container">
      <Sidebar />
      <ManageAcc />
    </div>
  );
};

export default Manage;
