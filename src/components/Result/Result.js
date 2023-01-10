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
        Final_result:'',
        Demurrage_amt:0,
        Despatch_amount:0,
        Other_tax:0,
        Final_Net_amount:0,
      },
    };
  }
  onResultClick(e){
   
    if(e.target.name == "Previous_claim" || e.target.name == "Other_tax" ){   
      const st = { ...this.state };
      st["result"][e.target.name] = e.target.value;
      this.setState(st);
    }
    const st = { ...this.state };
    if(st['result']["Balance_days"]){
      if(Number(st['result']["Balance_days"]) < 0){
        st['result']["Demurrage_amt"] = 'Demerage';
      }
      else{
        st['result']["Final_result"] = 'Despatch';
      }
    }
    st['result']["Demurrage_amt"] = this.props["demRatePerDay"] * st['result']["Balance_days"];
    st['result']["Despatch_amount"] = this.props["desRatePerDay"] * st['result']["Balance_days"];
    st['result']["Final_Net_amount"] =Number(st['result']["Other_tax"]) + Number(st['result']["Previous_claim"]);

    if(Number(st['result']["Balance_days"]) < 0){
      st['result']["Final_result"] = 'Demerage';
      console.log("hii");
      console.log(Number(st['result']["Balance_days"]));
      this.setState(st);
    }
    else{
      st['result']["Final_result"] = 'Despatch';
      console.log('hello');
      console.log(Number(st['result']["Balance_days"]));
      this.setState(st);
    }
    
    this.setState(st);
    

  }
  componentWillReceiveProps() {
    const st = { ...this.state };
    st["result"]["allowedTime"] = this.props.form["totalTime"];
    st["result"]["Used_days"] = this.props.form["totalDurationResult"]/(24*60*60*60);
    console.log(this.props.form["totalDurationResult"]);
    st["result"]["Balance_days"] = this.props.form["Balance_days"];
    st["result"]["Final_result"] =  this.props.form["Final_result"];
    this.setState(st);

    let stt = { ...this.state };
    if(Number(stt['result']["Balance_days"]) < 0){
      stt['result']["Final_result"] = 'Demerage';
      console.log("hii");
      this.setState(stt);
    }
    else{
      st['result']["Final_result"] = 'Despatch';
      console.log('hello');
      this.setState(stt);
    }

    console.log(stt);
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
                        onChange={(e)=>{this.onResultClick(e)}}
                       
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
