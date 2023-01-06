import React from "react";
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
import './Table4.scss'
import { tableData } from "./Constants.js";

class Table4 extends React.Component {
  render() {
    return (<>
      <table>
        <tr>
          {tableData.map((d) => (
            <th>{d.label}</th>
          ))}
        </tr>
        {/* {this.props.form["portActivityTable"].toString()} */}
        {this.props.form["resultActivityTable"] ? (
          this.props.form["resultActivityTable"].map((res, i) => (
            <tr>
              {tableData.map((d) => (
                <td>
                  <input
                    name={d.key}
                    // onChange={(e) => this.props.onchange(i, e)}
                    value={this.props.form["resultActivityTable"][i][d.key]}
                    type={d.type}
                  />
                </td>
              ))}
            </tr>
          ))
        ) : (
          <h1>asd</h1>
        )}
        
      </table>
      <button onClick={this.props.addRow} className="addRow2">Add Row</button>
      </>
    );
  }
}

export default Table4;
