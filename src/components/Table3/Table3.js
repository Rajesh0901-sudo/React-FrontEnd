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
import { data } from "./Constants.js";

class ResultDiv extends React.Component {
  render() {
    return (
      <table>
        <tr>
          {data.map((d) => (
            <th>{d.label}</th>
          ))}
        </tr>
        {/* {this.props.form["portActivityTable"].toString()} */}
        {this.props.form["portActivityTable"] ? (
          this.props.form["portActivityTable"].map((res, i) => (
            <tr>
              {data.map((d) => (
                <td>
                  <input
                    name={d.key}
                    onChange={(e) => this.props.onchange(i, e)}
                    value={this.props.form["portActivityTable"][i][d.key]}
                    type={d.type}
                  />
                </td>
              ))}
            </tr>
          ))
        ) : (
          <h1>asd</h1>
        )}
        <button onClick={this.props.addRow}>Add Row</button>
      </table>
    );
  }
}

export default ResultDiv;
