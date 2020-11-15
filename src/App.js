import logo from './logo.svg';
import './App.css';
import SleepForm from './SleepForm';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <SleepForm/>
          </Route>
        
          <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>

        </Switch>    
      </BrowserRouter>
    </div>
  );
}

export default App;

