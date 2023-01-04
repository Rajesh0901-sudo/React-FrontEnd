import './App.css';
import { Button } from 'antd';

import Table1 from './components/Table1/Table1';
import Table2 from './components/Table2/Table2';
import UiTransaction from './components/Table3/Table3';
import TopNavBar from './components/NavBar/TopNavBar'
// 3rd
import './styles/antd.less';
import './styles/bootstrap/bootstrap.scss'
// custom
import "./styles/layout.scss"
import "./styles/theme.scss"
import "./styles/ui.scss"
import "./styles/vendors.scss"
import "./styles/custom.scss";
import "./styles/context-menu.scss";

function App() {
  const [form, setFormData] = React.useState({});
  const onchange = (event, formula, out, args, index) => {
    console.log(event.target.value);
    console.log(event.target.name);
    let myNewForm = { ...form };
    myNewForm[event.target.name] = event.target.value;
    if (formula) {
      myNewForm[out + index] = formula(myNewForm[args[0] + index], args[1]);
    }
    setFormData(myNewForm);
    console.log(myNewForm);
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
