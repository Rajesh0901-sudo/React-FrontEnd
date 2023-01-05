import "./Table1.scss";
import React from "react";
import { data } from "../../Data/data.js";
import { Select} from "antd";
const { Option } = Select;

const clear = () => {
  data.map(data=>{

    if(data["options"] != undefined )
      data.options.map(d=>{
          console.log(d);
      })
  })
};

const handleChange = () => {
  console.log("clicked");
};

class FirstTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: "",
    };
  }
  render() {
    return (
      <div className="table1-div">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Information</h5>
            <div className="grid-container">
              {data.map((data, i) => {
                return (
                  <div key={data.index} className="grid-item">
                    <label className="label">
                      <div className="label-div">{data.label} :</div>
                      {data["options"] ? (
                        <Select >
                          {
                            data.options.map((d,index)=>
                              <Option value={d["value"]} label={d["label"]}>
                                <div className="demo-option-label-item">
                                  {d["label"]}
                                </div>
                              </Option>
                            )
                          }
                          

                        </Select>
                      
                      ) : (
                        <input className="input" type={data.type} name="name" />
                      )}
                    </label>
                  </div>
                );
              })}
            </div>
            <a href="#" onClick={clear} className="btn btn-primary">
              Clear
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstTable;
