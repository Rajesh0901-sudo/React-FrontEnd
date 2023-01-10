import React from "react";
import moment from "moment";
import {
  Table,
  Input,
  Row,
  Col,
  Button,
  Tabs,
  Form,
  DatePicker,
  Menu,
  Dropdown,
  Icon,
  Popconfirm,
  Checkbox,
} from "antd";
import { result1Data } from "../../Data/result1Data.js";
import "./Table4.scss";
import { tableData } from "./Constants.js";

class Table4 extends React.Component {

  convert(){

    var x = this.props.form["totalDurationResult"];
    var d = moment.duration(x, 'milliseconds');
    var hours = Math.floor(d.asHours());
    var mins = Math.floor(d.asMinutes()) - hours * 60;
    return "hours:" + hours + " mins:" + mins;

  }
  render() {
    return (
      <>
        <div className="fourth-table-div">
          <table className="table4">
            <tr>
              {tableData.map((d) => (
                <th className={d.key == "Action" ? "action-col" : ""}>
                  <p>{d.label}</p>
                </th>
              ))}
            </tr>
            {/* {this.props.form["portActivityTable"].toString()} */}
            {this.props.form["resultActivityTable"] ? (
              this.props.form["resultActivityTable"].map((res, i) => (
                <tr style={{ color: res.demarage ? "red" : "blue" }}>
                  {tableData.map((d) =>
                    d.key != "Action" ? (
                      <td>
                        <input
                          name={d.key}
                          // onChange={(e) => this.props.onchange(i, e)}
                          value={
                            this.props.form["resultActivityTable"][i][d.key]
                          }
                          onChange={(e) => this.props.onchange(i, e)}
                          type={d.type}
                        />
                      </td>
                    ) : (
                      <td className={d.key == "Action" ? "action-col" : ""}>
                        <div className="action-div">
                          <span class="material-symbols-outlined add-icon">
                            add
                          </span>
                          <span class="material-symbols-outlined delete-icon">
                            delete
                          </span>
                        </div>
                      </td>
                    )
                  )}
                </tr>
              ))
            ) : (
              <h1>asd</h1>
            )}
          </table>
          {this.props.form["totalDurationResult"] ? (
            <div>
              <div className="totalDiv4">
                <p>Total</p>
                <div className="total-col">
                  <p className="total">{this.convert}</p>
                  <p className="total">jhb</p> 
                  
                </div>
              </div>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      </>
    );
  }
}

export default Table4;
