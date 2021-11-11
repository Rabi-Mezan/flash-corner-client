import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
