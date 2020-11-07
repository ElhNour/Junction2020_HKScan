import './App.css';
// import ButtonAppBar from './components/navbar';
// import Description from './components/description';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import MainNavigation from './components/Navigation/MainNavigation'

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
          <Home/>
        </Route>
        <Route path="/Facts/WaterFootprint" exact>
          <Home/>
        </Route>
        <Route path="/Facts/CarbonFootprint" exact>
          <Home/>
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
