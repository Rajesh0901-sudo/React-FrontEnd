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
import Table4 from "./components/Table4/Table4";
import { tableData } from "./components/Table4/Constants";

function App() {
  const [form, setFormData] = React.useState({});
  const [tabs, settabs] = React.useState([]);
  const formTabs = [];
  const onchange = (event, formula, out, args, index) => {
    let myNewForm = { ...form };
    myNewForm[event.target.name] = event.target.value;
    let t = [];
    Array.from(Array(100)).map((d, i) => {
      form["portName" + i]
        ? t.push(form["portName" + i] ? form["portName" + i] : "")
        : console.log();
    });
    settabs(t);
    t.forEach((d) => {
      myNewForm["portActivityTable"].push([]);
    });
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
    myNewForm["portActivityTable"] = [[]];
    myNewForm["resultActivityTable"] = [];
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
      // myNewForm["portActivityTable"].push(d.key:"");
    });
    myNewForm["portActivityTable"][0].push(obj);
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

  const onChangeTable3 = function (index, e, tabIndex) {
    try {
      let myNewForm = { ...form };
      if (e.target.name == "checked") {
        addRowtotable4(index, tabIndex);
      }
      myNewForm["portActivityTable"][tabIndex][index][e.target.name] =
        e.target.value;
      myNewForm["portActivityTable"][tabIndex].sort(function (a, b) {
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

  const addRowtotable4 = function (index, tabi) {
    let myNewForm = { ...form };
    let obj = {};
    tableData.forEach((data) => {
      obj[data.key] = "";
    });
    obj["fromDate"] = form["portActivityTable"][tabi][index]["fromDate"];
    obj["activity"] = form["portActivityTable"][tabi][index]["activity"];

    myNewForm["resultActivityTable"].push(obj);
    myNewForm["resultActivityTable"].sort(function (a, b) {
      return -(
        new Date(b.fromDate + " " + b.fromDatetime) -
        new Date(a.fromDate + " " + a.fromDatetime)
      );
    });
    myNewForm["resultActivityTable"].map((d, i) => {
      d.toDate = myNewForm["resultActivityTable"][i + 1]
        ? myNewForm["resultActivityTable"][i + 1]["fromDate"]
        : myNewForm["resultActivityTable"][i]["fromDate"];
    });
    setFormData(myNewForm);
  };

  const addRow = function (tabi) {
    let myNewForm = { ...form };
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
    });
    myNewForm["portActivityTable"][tabi].push(obj);
    setFormData(myNewForm);
  };

  return (
    <div className="App">
      <TopNavBar />
      <Table1 />
      <Table2 form={form} onchange={onchange} />
      <UiTransaction
        tabs={formTabs}
        addRow={addRow}
        onchange={onChangeTable3}
        form={form}
      ></UiTransaction>
      <Table4 form={form}></Table4>
    </div>
  );
}

export default App;
