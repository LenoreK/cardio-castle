import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Week_Tab from "./Week_Tab";
import Day_One_To_Seven from './Day_One_To_Seven';
import Daily_Data from './Daily_Data'

function App() {
  return (
    <div className="App">
      <Nav />
      <Week_Tab />
      <Day_One_To_Seven />
      <Daily_Data />
    </div>
  );
}

export default App;
