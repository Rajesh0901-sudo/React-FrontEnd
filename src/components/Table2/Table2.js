import React from "react";
import { Select } from "antd";

import { cpDetailsdata, data ,resultData} from "./Constants";
import "./Table2.scss";
import { Tabs } from "antd";
import { Checkbox } from "antd";
import { CheckboxValueType } from 'antd';
const { Option } = Select;
const TabPane = Tabs.TabPane;

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

function App(props) {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState([]);
  React.useEffect(() => {
    setState(data);
    setState2(cpDetailsdata);
  }, []);

  const handleAddRow = () => {
    const res = [...state];
    res.forEach((d) => {
      d.values.push("");
    });
    const res2 = [...state2];
    res2.forEach((d) => {
      d.values.push("");
    });
    setState2(res2);
    setState(res);
  };

  const [value1, setValue1] = React.useState("1");

  const onChange1 = (value) => {
    console.log(value);
    setValue1(value);
  };

  return (<>
        <Tabs className="tabss" defaultActiveKey='1' onChange={onChange1} animated={true}>
          <TabPane key={'1'} value="cargo" tab={<p className="tab-p">Cargo Details</p>}>
                  
          </TabPane>
          <TabPane key={'2'} value="cp" tab={<p className="tab-p">CP Details</p>}>
                  
          </TabPane>
        </Tabs>
        <div className="secondDiv">
      <br />
          {value1 == "1" ? (
            <table className="table2">
              <tbody>
                <tr className="table-heading">
                  {state.map((d) => (
                    <th>
                      <p>{d.label}</p>{" "}
                    </th>
                  ))}
                </tr>
                {state.length > 0 ? (
                  state[0].values.map((d, index) => {
                    return (
                      <tr>
                        {data.map((res, i) => (
                          <td>
                            {res.type == "dropdown" ? (
                              <Select defaultValue="">
                                {res.options.map((opt) => (
                                  <Option value={opt.factor} label={opt.Code}>
                                    <div className="demo-option-label-item">
                                      {opt.Code}
                                    </div>
                                  </Option>
                                ))}
                              </Select>
                            ) : (
                              <input
                                value={props.form[res.key + index]}
                                name={res.key + index}
                                placeholder={res.label }
                                onChange={(e) => {
                                  props.onchange(
                                    e,
                                    res.formula,
                                    res.outputField,
                                    res.args,
                                    index
                                  );
                                }}
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })
                ) : (
                  <h1>Load</h1>
                )}
              </tbody>
            </table>
          ) : (
            <table className="table2">
              <tbody>
                <tr className="table-heading">
                  {state2.map((d) => (
                    <th>
                      <p>{d.label}</p>{" "}
                    </th>
                  ))}
                </tr>
                {state2.length > 0 ? (
                  state2[0].values.map((d, index) => {
                    return (
                      <tr>
                        {cpDetailsdata.map((res, i) => (
                          <td>
                            <input
                              value={props.form[res.key + index]}
                              name={res.key + index}
                              placeholder={res.label }
                              onChange={(e) => {
                                props.onchange(
                                  e,
                                  res.formula,
                                  res.outputField,
                                  res.args,
                                  index
                                );
                              }}
                            />
                          </td>
                        ))}
                      </tr>
                    );
                  })
                ) : (
                  <h1>Load</h1>
                )}
              </tbody>
            </table>
          )}
          <a onClick={handleAddRow} class="btn btn-primary">
            Add Row
          </a>

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
      </div>
    </>
  );
}

export default App;
