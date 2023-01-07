import React from "react";
import {Tabs} from "antd";

import { Select } from "antd";
import "./Table3.scss";
import { data } from "./Constants.js";


const { Option } = Select;

const onChange2 = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },         
];
const laytimeMethodOptions = [
  { label: 'Reversible', value: 'Reversible' },
  { label: 'On Demand', value: 'OnDemand' },
  { label: 'Display dem', value: 'DisplayDem' },         
];

const onChange = (key) => {
  console.log(key);
};



const TabPane = Tabs.TabPane;



class ResultDiv extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.form);
    this.state = {
      tabs: [],
      tabIndex: 0,
    };
  }
  componentWillReceiveProps() {
    let t = [];
    Array.from(Array(100)).map((d, i) => {
      this.props.form["portName" + i]
        ? t.push(
            this.props.form["portName" + i]
              ? this.props.form["portName" + i]
              : ""
          )
        : console.log();
    });
    this.setState({ tabs: t });
  }
  render() {
    return (
      <>
        <Tabs
          onChange={(e) => {
            this.setState({ tabIndex: e });
          }}
          defaultActiveKey="1"
          key={this.state.tabIndex}
          animated={true}
        >
          {this.state.tabs.map((d, i) => (
            <TabPane
              key={i}
              value={d}
              tab={<p className="tab-p">{d}</p>}
            ></TabPane>
          ))}
        </Tabs>
        <div className="wrap">
          <table className="table3">
            <tr>
              {data.map((d, i) => (
                <th className={i == 0 ? "check" :  d.key=='Action'?'action-col':''}>{d.label}</th>
              ))}
            </tr>
            {/* {this.props.form["portActivityTable"].toString()} */}
            {this.props.form["portActivityTable"] &&
            this.props.form["portActivityTable"].length > this.state.tabIndex ? (
              this.props.form["portActivityTable"][this.state.tabIndex].map(
                (res, i) => (
                  <tr>
                    {data.map((d) => (
                      
                      d.key != 'Action'? (
                          <td className={d.type == "checkbox" ? "check" : ''} >
                            <input
                              name={d.key}
                              placeholder={d.label}
                              onChange={(e) =>
                                this.props.onchange(i, e, this.state.tabIndex)
                              }
                              value={
                                this.props.form["portActivityTable"][
                                  this.state.tabIndex
                                ][i][d.key]
                              }
                              type={d.type}
                            />
                          </td>
                        ) : (

                          <td className='action-col'>
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
                )
              )
            ) : (
              <h1>asd</h1>
            )}<button
          onClick={() => this.props.addRow(this.state.tabIndex)}
          className="addRow"
        >
          <p>Add Row</p>
        </button>
          </table>
          
        </div>
        
      </>
    );
  }
}

export default ResultDiv;

