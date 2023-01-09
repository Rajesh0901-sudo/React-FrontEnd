import React from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd";
import "./Result.scss";
import { Select } from "antd";
import { resultData } from "./Constants.js";

const { Option } = Select;

const options = [
  { label: "Standard", value: "Standard" },
  { label: "Reversible", value: "Reversible" },
  { label: "Average", value: "Average" },
];
const laytimeMethodOptions = [
  { label: "Reversible", value: "Reversible" },
  { label: "On Demand", value: "OnDemand" },
  { label: "Display dem", value: "DisplayDem" },
];

const onChange = (key) => {
  console.log(key);
};

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        allowedTime: 0,
        Used_days:0,
        Balance_days:0,
        Previous_claim:0,
        Final_result:0,
        Demurrage_amt:0,
        Despatch_amount:0,
        Other_tax:0,
        Final_Net_amount:0,
      },
    };
  }
  componentWillReceiveProps() {
    const st = { ...this.state };
    st["result"]["allowedTime"] = this.props.form["totalTime"];
    this.setState(st);
    console.log(st);
  }
  render() {
    return (
      <div className="check-box-div">
        <div className="first-div">
          <a className="btn btn-primary btn-import">Import Activity</a>
          <Select defaultValue={options[0].label}>
            {options.map((opt) => (
              <Option value={opt.value} label={opt.label}>
                <div className="demo-option-label-item">{opt.label}</div>
              </Option>
            ))}
          </Select>
        </div>
        <Checkbox.Group
          options={laytimeMethodOptions}
          defaultValue={["OnDemand"]}
        />

        <div className="result-div">
          <div className="heading">
            <h6>Result</h6>
          </div>
          <div className="grid-container">
            {this.state["result"] ? (
              resultData.map((data, i) => {
                return (
                  <div className="grid-item">
                    <label className="label">
                      <div className="label-div">{data.label} :</div>
                      <input
                        value={this.state["result"][data.key]}
                        className="input"
                        type={data.type}
                        placeholder={data.label}
                        name={data.key}
                      />
                    </label>
                    {data.key}
                  </div>
                );
              })
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
