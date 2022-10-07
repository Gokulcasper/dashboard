import React from "react";
import "./sideBarContent.css";

const SideBarContent = ({ list }) => {
  return (
    <div className="content_container">
      <div>{list.icon}</div>
      <h5>{list.title}</h5>
    </div>
  );
};

export default SideBarContent;
// "flex p-4 space-x-3 items-center hover:bg-white w-3/4"
