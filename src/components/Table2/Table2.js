import React from "react";
import { Select } from "antd";

import { cpDetailsdata, data } from "./Constants";
import "./Table2.scss";
import { Tabs } from "antd";

const { Option } = Select;
const TabPane = Tabs.TabPane;

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
                    <th className={d.key=='Action'?'action-col':""}>
                      <p>{d.label}</p>{" "}
                    </th>
                  ))}
                </tr>
                {state.length > 0 ? (
                  state[0].values.map((d, index) => {
                    return (
                      <tr>
                        {data.map((res, i) => (
                          <td className={res.key=='Action'?'action-col':""}>
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
                            ) : 
                            
                            res.key!='Action' ?(
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
                            ):(
                              <div className="action-div"> 
                                <span class="material-symbols-outlined add-icon">
                                  add
                                </span>
                                <span class="material-symbols-outlined delete-icon">
                                    delete
                                </span>
                              </div>
                            )
                      
                            }
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
                    <th className={d.key=='Action'?'action-col':""}>
                      <p>{d.label}</p>{" "}
                    </th>
                  ))}
                </tr>
                {state2.length > 0 ? (
                  state2[0].values.map((d, index) => {
                    return (
                      <tr>
                        {cpDetailsdata.map((res, i) => (
                          <td className={res.key=='Action'?'action-col':""}>
                            {res.key != 'Action' ?
                                (
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
                                )
                                :
                                (
                                  <div className="action-div"> 
                                    <span class="material-symbols-outlined add-icon">
                                      add
                                    </span>
                                    <span class="material-symbols-outlined delete-icon">
                                        delete
                                    </span>
                                  </div>
                                )   
                            }
                            
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
      </div>
    </>
  );
}

export default App;
