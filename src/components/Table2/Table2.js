import React from "react";
import { data } from "./Constants";
import "./Table2.scss";
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
  return (
    <div className="secondDiv">
      <table>
        <tr>
          {state.map((d) => (
            <th> {d.label}</th>
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
        <tr onClick={handleAddRow}>
          <button>Add row </button>
        </tr>
      </table>
    </div>
  );
}

export default App;
