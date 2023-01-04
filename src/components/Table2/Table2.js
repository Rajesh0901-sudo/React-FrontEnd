import React from "react";
import { data } from "./Constants";
import "./Table2.scss";
import {  Radio  } from 'antd';



function App(props) {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    setState(data);
  }, []);
  
  const handleAddRow = () => {
    console.log(state);
    const res = [...state];
    res.forEach((d) => {
      d.values.push("");
    });
    console.log(res);
    setState(res);
  };

  const [value1, setValue1] =  React.useState('cargo');

  const onChange1 = ({ target: { value } }) => {
    console.log( value);
    setValue1(value);
  };

  return (
    <div className="secondDiv" >
      <div className="button-div">
        <Radio.Group onChange={onChange1} defaultValue="cargo">
        <Radio.Button value="cargo">Cargo Detail</Radio.Button>
        <Radio.Button value="cp">CP Detail</Radio.Button>
      </Radio.Group>
      </div>     
      <br />
      <div className="card">
        <div className="card-body">

          <table>
            <tbody>

              <tr className="table-heading">
                {state.map((d) => (
                  <th><p>{d.label}</p> </th>
                  
                ))}
              </tr>
              {state.length > 0 ? (
                state[0].values.map((d, index) => {
                  return (

                        <tr>
                          {data.map((res, i) => (
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
          <a href="#" onClick={handleAddRow} class="btn btn-primary">Add Row</a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
