import './App.css';
import Table1 from './components/Table1/Table1';
import Table2 from './components/Table2/Table2';
import Table3 from './components/Table3/Table3';
import TopNavBar from './components/NavBar/TopNavBar'

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Table1 />
      <Table2 />
      <Table3 />
    </div>
  );
}

export default App;
