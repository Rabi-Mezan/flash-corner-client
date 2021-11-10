import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
