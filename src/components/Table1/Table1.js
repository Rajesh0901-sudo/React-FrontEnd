import "./Table1.scss";
import React from "react";
import { Data } from "../../Data/data.js";
import { Select } from "antd";
const { Option } = Select;

const clear = () => {
  this.state.data.map((data) => {
    data.value = "";
    console.log(data);
  });
};

const handleChange = () => {
  console.log("clicked");
};

class FirstTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      selectedValues: "",
    };
  }
  onSelect = (value) => {
    this.setState({ selectedValues: value });
  };
  onRemove = (value) => {
    this.setState({ selectedValues: "" });
  };
  render() {
    return (
      <div className="table1-div">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Information</h5>
            <div className="grid-container">
              {this.state.data.map((data, i) => {
                return (
                  <div key={data.index} className="grid-item">
                    <label className="label">
                      <div className="label-div">{data.label} :</div>

                      {data["options"] != undefined ? (
                        <Select 
                            defaultValue={data.options[0].value}
                            style={{ flex: "0.5" }}
                            >
                        {
                          data.options.map((d,index)=>{
                            return <Option value={d["value"]} label={d["label"]}>
                              <div className="demo-option-label-item">
                                {d["label"]}
                              </div>
                            </Option>
                          }
                          )
                        }
                        

                      </Select>
                        
                      ) : (
                          data["type"]!='date' ?
                          <input className="input" type={data.type} placeholder={data.label} name="name" />
                          : 
                          <input className="input" type={data.type} name="name" />
                      )
                      }
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstTable;
