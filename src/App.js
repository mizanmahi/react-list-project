import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreatePage from './components/create-page/create-page';
import Navbar from "./components/navbar/navbar";
import Table from './components/table';

function App() {
  
  return (
    <Router>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Table}/>
              <Route exact path="/get-form" component={CreatePage}/>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
