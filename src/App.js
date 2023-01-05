import "./App.css";
import React from "react";

import Table1 from "./components/Table1/Table1";
import Table2 from "./components/Table2/Table2";
import UiTransaction from "./components/Table3/Table3";
import TopNavBar from "./components/NavBar/TopNavBar";
// 3rd
import "./styles/antd.less";
import "./styles/bootstrap/bootstrap.scss";
// custom
import "./styles/layout.scss";
import "./styles/theme.scss";
import "./styles/ui.scss";
import "./styles/vendors.scss";
import "./styles/custom.scss";
import "./styles/context-menu.scss";
import { data } from "./components/Table3/Constants";

function App() {
  const [form, setFormData] = React.useState({});
  const onchange = (event, formula, out, args, index) => {
    let myNewForm = { ...form };
    myNewForm[event.target.name] = event.target.value;
    if (formula) {
      // myNewForm[out + index] = formula(myNewForm[args[0] + index], args[1]);
      formula.forEach((form, i) => {
        let formulaStr = form;
        let args = splitFormula(form);
        args.map((data, i) => {
          if (typeof data == "string" && isNaN(data)) {
            formulaStr = formulaStr.replace(
              data,
              myNewForm[data + index] ? myNewForm[data + index] : 0
            );
          }
        });
        myNewForm[out[i] + index] = eval(formulaStr);
      });
    }
    setFormData(myNewForm);
    console.log(myNewForm);
  };

  React.useEffect(() => {
    let myNewForm = { ...form };
    myNewForm["portActivityTable"] = [];
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
      // myNewForm["portActivityTable"].push(d.key:"");
    });
    myNewForm["portActivityTable"].push(obj);
    setFormData(myNewForm);
  }, []);

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

  const onChangeTable3 = function (index, e) {
    try {
      let myNewForm = { ...form };
      myNewForm["portActivityTable"][index][e.target.name] = e.target.value;
      myNewForm["portActivityTable"].sort(function (a, b) {
        return -(
          new Date(b.fromDate + " " + b.time) -
          new Date(a.fromDate + " " + a.time)
        );
      });
      setFormData(myNewForm);
    } catch (error) {
      console.log(error);
    }
  };

  const addRow = function () {
    let myNewForm = { ...form };
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
      // myNewForm["portActivityTable"].push(d.key:"");
    });
    myNewForm["portActivityTable"].push(obj);
    setFormData(myNewForm);
  };

  return (
    <div className="App">
      <TopNavBar />
      <Table1 />
      <Table2 form={form} onchange={onchange} />
      <UiTransaction
        addRow={addRow}
        onchange={onChangeTable3}
        form={form}
      ></UiTransaction>
    </div>
  );
}

export default App;
