import React from "react";
import "./account.css";
import { AiFillCaretDown } from "react-icons/ai";
import ManageReport from "../../manageitems/ManageReport";

const Accounts = () => {
  return (
    <div className="account_page">
      <div className="account_container">
        <div class="account_row">
          <div className="account_drop">
            <div class="account_column">
              <span>Account Type</span>
              <button className="account_btn">
                Student <AiFillCaretDown />
              </button>
            </div>
            <div className="acc_dropList">
              <div className="acc_dropItems">UnApproved</div>
            </div>
          </div>

          <div className="account_drop">
            <div class="account_column">
              <span>Loan Status</span>
              <button className="account_btn">
                Approved <AiFillCaretDown />
              </button>
            </div>
            <div className="acc_dropList">
              <div className="acc_dropItems">UnApproved</div>
            </div>
          </div>

          <div className="account_drop">
            <div class="account_column">
              <span>Start Date</span>
              <button className="account_btn">
                Approved <AiFillCaretDown />
              </button>
            </div>
            <div className="acc_dropList">
              <div className="acc_dropItems">UnApproved</div>
            </div>
          </div>

          <div className="account_drop">
            <div class="account_column">
              <span>End Date</span>
              <button className="account_btn">
                Approved <AiFillCaretDown />
              </button>
            </div>
            <div className="acc_dropList">
              <div className="acc_dropItems">UnApproved</div>
            </div>
          </div>

          <div class="account_columnLast">
            <button className="account_btnLast">Generate</button>
          </div>
        </div>
      </div>
      <ManageReport />
    </div>
  );
};

export default Accounts;
