import "./App.css";
import Table1 from "./components/Table1/Table1";
import Table2 from "./components/Table2/Table2";
import Table3 from "./components/Table3/Table3";
import TopNavBar from "./components/NavBar/TopNavBar";
import React from "react";
function App() {
  const [form, setFormData] = React.useState({});
  const onchange = (event, formula, out, args, index) => {
    console.log(event.target.value);
    console.log(event.target.name);
    let myNewForm = { ...form };
    myNewForm[event.target.name] = event.target.value;
    if (formula) {
      // myNewForm[out + index] = formula(myNewForm[args[0] + index], args[1]);
      let formulaStr = formula;
      let args = splitFormula(formula);
      args.map((data) => {
        if (typeof data == "string" && myNewForm[data + index]) {
          formulaStr = formulaStr.replace(data, myNewForm[data + index]);
        }
      });
      console.log(formulaStr);
      myNewForm[out + index] = eval(formulaStr);
    }
    setFormData(myNewForm);
    console.log(myNewForm);
  };

  const splitFormula = function (arithmetic) {
    var arr = [];
    var operator = "/*+-^";

    for (var i = 0; i < operator.length; i++) {
      if (i == 0) {
        arr = arithmetic.split(operator[i]);
      } else {
        arr = arr.toString().split(operator[i]);
      }
    }
    return arr[0].split(",");
  };
  return (
    <div className="App">
      <div className="card">
        <TopNavBar />
        <Table1 />
        <Table2 form={form} onchange={onchange} />
        <Table3 />
      </div>
    </div>
  );
}

export default App;
