import React from "react";
import {Tabs} from "antd";

import { result1Data } from "../../Data/result1Data.js";
import './Table3.scss'
import { data } from "./Constants.js";


const TabPane = Tabs.TabPane;



class ResultDiv extends React.Component {
  render() {
    return (<>
        <Tabs defaultActiveKey='1'  animated={true}>
          <TabPane key={'1'} value="cargo" tab={<p className="tab-p">Singapore</p>}>
                  
          </TabPane>
          <TabPane key={'2'} value="cp" tab={<p className="tab-p">Mumbai</p>}>
                  
          </TabPane>
          <TabPane key={'3'} value="cp" tab={<p className="tab-p">All Port</p>}>
                  
                  </TabPane>
        </Tabs>
      <div className="wrap">
          <table className="table3">
            <tr>
              {data.map((d,i) => (
                <th className={i == 0? "check":"not"}>{d.label}</th>
              ))}
            </tr>
            {/* {this.props.form["portActivityTable"].toString()} */}
            {this.props.form["portActivityTable"] ? (
              this.props.form["portActivityTable"].map((res, i) => (
                <tr>
                  {data.map((d) => (
                    <td className={d.type == "checkbox"? "check":"not"}>
                      <input
                        name={d.key}
                        placeholder={d.label}
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
            <button onClick={this.props.addRow} className="addRow"><p>Add Row</p></button>
          </table>
        </div>
      </>
    );
  }
}

export default ResultDiv;

