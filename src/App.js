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
  return (
    <div className="App">
      <TopNavBar />
      <Table1 />
      <Table2 />
      <UiTransaction />
    </div>
  );
}

export default App;
