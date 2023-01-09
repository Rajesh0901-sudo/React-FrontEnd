import "./App.scss";
import React from "react";
import momentDurationFormatSetup from "moment-duration-format";
import Table1 from "./components/Table1/Table1";
import Table2 from "./components/Table2/Table2";
import UiTransaction from "./components/Table3/Table3";
import ResultComponent from "./components/Result/Result";
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
import moment from "moment";

function App() {
  const [form, setFormData] = React.useState({});
  const [tabs, settabs] = React.useState([]);
  const formTabs = [];
  const onchange = (event, formula, out, args, index) => {
    if (event.target.value != "") {
      let myNewForm = { ...form };
      myNewForm[event.target.name] = event.target.value;
      const t = [];

      //assuming max total activity entry is 100
      Array.from(Array(100)).map((d, i) => {
        myNewForm["portName" + i]
          ? t.push(myNewForm["portName" + i] ? myNewForm["portName" + i] : "")
          : console.log();
      });
      t.forEach((d) => {
        myNewForm["portActivityTable"].push([]);
      });

      if (formula) {
        // myNewForm[out + index] = formula(myNewForm[args[0] + index], args[1]);
        let i = 0;
        for (const form of formula) {
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
          i++;
        }
      }
      myNewForm["result"] = { ...myNewForm["result"] };
      let sum = 0;
      Array.from(Array(100)).map((d, i) => {
        sum += myNewForm["allowedtime" + i]
          ? Number(myNewForm["allowedtime" + i])
          : 0;
      });
      myNewForm["totalTime"] = sum;
      setFormData(myNewForm);
      settabs([...t]);
    }
  };

  React.useEffect(() => {
    momentDurationFormatSetup(moment);
    window.onbeforeunload = function () {
      return "Data will be Lost";
      //if we return nothing here (just calling return;) then there will be no pop-up question at all
      //return;
    };
    window.onbeforeunload = function () {
      return "Data will be Lost";
    };

    let myNewForm = { ...form };
    myNewForm["portActivityTable"] = [[]];
    myNewForm["resultActivityTable"] = [];
    myNewForm["result"] = {
      allowedTime: "",
    };
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
      // myNewForm["portActivityTable"].push(d.key:"");
    });
    myNewForm["portActivityTable"][0].push(obj);
    setFormData(myNewForm);
    console.log(JSON.stringify(myNewForm));
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
        if (e.target.checked) {
          addRowtotable4(index, tabIndex);
          return;
        } else return;
      }
      console.log(e.target.value);
      myNewForm["portActivityTable"][tabIndex][index][e.target.name] =
        e.target.value;
      myNewForm["portActivityTable"][tabIndex].sort(function (a, b) {
        return -(
          new Date(b.fromDate + " " + b.time) -
          new Date(a.fromDate + " " + a.time)
        );
      });
      setFormData(myNewForm);
      console.log(JSON.stringify(myNewForm));
    } catch (error) {
      console.log(error);
    }
  };

  const addRowtotable4 = function (index, tabi) {
    let myNewForm = { ...form };
    let obj = {};
    var totalDuartion = 0;
    tableData.forEach((data) => {
      obj[data.key] = "";
    });
    obj["fromDate"] = form["portActivityTable"][tabi][index]["fromDate"];
    obj["fromDatetime"] = form["portActivityTable"][tabi][index]["time"];
    obj["toDatetime"] = form["portActivityTable"][tabi][index]["time"];
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
      d.toDatetime = myNewForm["resultActivityTable"][i + 1]
        ? myNewForm["resultActivityTable"][i + 1]["fromDatetime"]
        : myNewForm["resultActivityTable"][i]["fromDatetime"];

      var duration = moment.duration(
        moment(
          myNewForm["resultActivityTable"][i]["toDate"] +
            " " +
            myNewForm["resultActivityTable"][i]["toDatetime"]
        ).diff(
          moment(
            myNewForm["resultActivityTable"][i]["fromDate"] +
              " " +
              myNewForm["resultActivityTable"][i]["fromDatetime"]
          )
        )
      );

      //Get Days and subtract from duration
      var days = duration.asDays();
      // duration.subtract(moment.duration(days, "days"));

      // //Get hours and subtract from duration
      // var hours = duration.hours();
      // duration.subtract(moment.duration(hours, "hours"));

      // //Get Minutes and subtract from duration
      // var minutes = duration.minutes();
      // duration.subtract(moment.duration(minutes, "minutes"));
      totalDuartion += duration.asDays().toFixed(0);

      myNewForm["resultActivityTable"][i]["duration"] =
        duration.format("D:H:m");
    });
    myNewForm["totalDurationResult"] = totalDuartion;
    console.log(myNewForm);
    setFormData(myNewForm);
  };

  const addRow = function (tableIndex) {
    let myNewForm = { ...form };
    let obj = {};
    data.forEach((d, index) => {
      obj[d.key] = "";
    });
    myNewForm["portActivityTable"][tableIndex].push(obj);
    setFormData(myNewForm);
  };

  return (
    <div className="App">
      <TopNavBar />
      <Table1 />
      <Table2 form={form} onchange={onchange} />
      <div className="structure">
        <div>
          <UiTransaction
            tabs={formTabs}
            addRow={addRow}
            onchange={onChangeTable3}
            form={form}
          ></UiTransaction>
          <Table4 form={form}></Table4>
        </div>
        <ResultComponent form={form} />
      </div>
    </div>
  );
}

export default App;
