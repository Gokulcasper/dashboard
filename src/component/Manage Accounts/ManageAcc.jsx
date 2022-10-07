import React from "react";
import "./manageAcc.css";
import { BiSearch } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import Accounts from "./Account/Accounts";
import { Link } from "react-router-dom";

const ManageAcc = () => {
  const handleBtn = (e) => {
    e.preventdefault();
  };
  return (
    <div className="acc_container">
      <h4>Manage Accounts</h4>
      <div className="acc_searchTab">
        <div className="acc_searchInput">
          <BiSearch className="acc_search" />
          <input placeholder="search here..." className="acc_input" />
        </div>
        <Link to={"/report"} style={{ textDecoration: "none" }}>
          <button className="downloadBtn" onClick={handleBtn}>
            <HiDownload /> Download Report
          </button>
        </Link>
      </div>
      <Accounts />
    </div>
  );
};

export default ManageAcc;
