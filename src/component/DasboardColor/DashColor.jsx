import React from "react";
import "./dashColor.css";
import { BsCircle } from "react-icons/bs";

const DashColor = () => {
  return (
    <div className="color_heading">
      <span>Kiosk Compartment Occupancy</span>
      <div className="dash_color">
        <div className="color_data">
          <BsCircle
            className="dash_circle"
            style={{ backgroundColor: "#acbbd1", color: "#acbbd1" }}
          />
          Empty
        </div>
        <div className="color_data">
          <BsCircle
            className="dash_circle"
            style={{ backgroundColor: "#284fb2", color: "#284fb2" }}
          />
          Occupied
        </div>
        <div className="color_data">
          <BsCircle
            className="dash_circle"
            style={{ backgroundColor: "#d00101", color: "#d00101" }}
          />
          Faulty
        </div>
      </div>
    </div>
  );
};

export default DashColor;
