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
    <div className="fourth-table-div">
      <div>
          <table className="table4">
            <tr>
              {tableData.map((d) => (
                <th className={d.key=='Action'?'action-col':''}><p>{d.label}</p></th>
              ))}
            </tr>
            {/* {this.props.form["portActivityTable"].toString()} */}
            {this.props.form["resultActivityTable"] ? (
              this.props.form["resultActivityTable"].map((res, i) => (
                <tr>
                  {tableData.map((d) => (

                    d.key != 'Action' ? 
                    (
                      <td >
                        <input
                          name={d.key}
                          // onChange={(e) => this.props.onchange(i, e)}
                          value={this.props.form["resultActivityTable"][i][d.key]}
                          type={d.type}
                        />
                      </td>
                    )
                      
                    :  (
                      <td  className={d.key=='Action'?'action-col':''}>
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
                  ))}
                </tr>
              ))
            ) : (
              <h1>asd</h1>
            )}
            
          </table>
          <div className="totalDiv4">
              <p>Total</p>
              <div className="total-col">
                <p className="total">dfsdf</p>
                <p className="total">gdfgdf</p>             
              </div>
            </div>
        </div>
    </div>
      </>
    );
  }
}

export default Table4;
