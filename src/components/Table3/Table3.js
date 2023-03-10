import React from "react";
import { Select } from "antd";

import { cpDetailsdata, data } from "./Constants";
import "./Table3.scss";
import { Radio } from "antd";
const { Option } = Select;

function App(props) {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState([]);
  React.useEffect(() => {
    setState(data);
    setState2(cpDetailsdata);
  }, []);

  const handleAddRow = () => {
    console.log(state);
    const res = [...state];
    res.forEach((d) => {
      d.values.push("");
    });
    const res2 = [...state2];
    res2.forEach((d) => {
      d.values.push("");
    });
    setState2(res2);
    console.log(res);
    setState(res);
  };

  const [value1, setValue1] = React.useState("cargo");

  const onChange1 = ({ target: { value } }) => {
    console.log(value);
    setValue1(value);
  };

  return (
    <div className="thirdDiv">
      <div className="button-div">
        <Radio.Group onChange={onChange1} defaultValue="cargo">
          <Radio.Button value="cargo">Singapore (upload)</Radio.Button>
          <Radio.Button value="cp">mumbai(UPLOAD)</Radio.Button>
          <Radio.Button value="abc">All Port</Radio.Button>
        </Radio.Group>
      </div>
      <br />
      <div className="card ">
        <div className="card-body">
          {value1 == "cargo" ? (
            <table>
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
            <table>
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
          <a href="#" onClick={handleAddRow} class="btn btn-primary">
            Add Row
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
