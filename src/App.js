import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BuyNow from './BuyNow/BuyNow';
import AuthProvider from './context/AuthProvider/AuthProvider';
import DashBoard from './DashBoard/DashBoard/DashBoard';
import Home from './Home/Home/Home';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';
import Shop from './Shop/Shop';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shopNow'>
              <Shop></Shop>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/buynow'>
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route path='/dashboard'>
              <DashBoard></DashBoard>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
