
import React from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from 'antd';
import './Result.scss';
import { Select } from "antd";
import { resultData } from "./Constants.js";


const { Option } = Select;

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



class ResultComponent extends React.Component {
    render(){
        return(
            <div className="check-box-div">
              <div className="first-div">
                <a className="btn btn-primary btn-import">Import Activity</a>
                <Select defaultValue={options[0].label}>
                    {options.map((opt) => (
                      <Option value={opt.value} label={opt.label}>
                        <div className="demo-option-label-item">
                          {opt.label}
                        </div>
                      </Option>
                    ))}
                  </Select>

              </div>
              <Checkbox.Group
                options={laytimeMethodOptions}
                defaultValue={['OnDemand']}
              />

              <div className="result-div">
                <div className="heading">
                  <h6>Result</h6>
                </div>
                <div className="grid-container">
                  {resultData.map((data, i) => {
                    return (
                      <div key={data.index} className="grid-item">
                        <label className="label">
                          <div className="label-div">{data.label} :</div>
                          <input className="input" type={data.type} placeholder={data.label} name="name" />
                        </label>
                      </div>
                    );
                  })}           
                </div>
              </div>
              
            </div>
        )
    }
}

export default ResultComponent;
            