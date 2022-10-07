import React from "react";
import HeaderCard from "../component/DashboardCount/HeaderCard";
import Sidebar from "../component/sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash_container">
      <Sidebar />
      <HeaderCard />
    </div>
  );
};

export default Dashboard;
