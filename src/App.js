import './App.css';
// import ButtonAppBar from './components/navbar';
// import Description from './components/description';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MainNavigation from './components/Navigation/MainNavigation'
import Welfare from './components/Facts/Welfare';

function App() {
  return (
    <div className="App">

      <Router>
        <MainNavigation/>
        <main>
        <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Facts/welfare" exact>
          <Welfare/>
        </Route>
        <Route path="/Facts/WaterFootprint" exact>
          <Home/>
        </Route>
        <Route path="/Facts/CarbonFootprint" exact>
          <Home/>
        </Route>
        <Route path="/Facts/CarbonFootprint" exact>
          
        </Route>
        </Switch>
        </main>
      </Router>
        {/* <ButtonAppBar></ButtonAppBar>
        <Description></Description> */}
      
    </div>
  );
}

export default App;
