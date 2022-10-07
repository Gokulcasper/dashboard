import React from "react";
import "./headerCard.css";
import { FaArrowRight } from "react-icons/fa";
import DashColor from "../DasboardColor/DashColor";
import ColorContainer from "../ColorContainer/ColorContainer";

const HeaderCard = () => {
  const card = [
    {
      no: "26",
      content: "Total Loan Requests",
      info: "More Info",
    },
    {
      no: "16",
      content: "Accounts in Loan",
      info: "More Info",
    },
    {
      no: "05",
      content: "Outstanding Loan Request",
      info: "More Info",
    },
    {
      no: "20",
      content: "Unprocessed Loan Requests",
      info: "More Info",
    },
  ];
  return (
    <div className="column">
      <div className="card_container">
        {card.map((data) => {
          return (
            <div className="card_items">
              <div className="card_no">{data.no}</div>
              <p>{data.content}</p>
              <div className="card_arrow">
                <span className="card_info">{data.info}</span>
                <FaArrowRight
                  style={{
                    backgroundColor: "rgb(59, 101, 252)",
                    color: "white",
                    outline: "none",
                    border: "none",
                    borderRadius: "50px",
                    padding: "4px",
                    fontSize: "13px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <DashColor />
      <ColorContainer />
    </div>
  );
};

export default HeaderCard;
