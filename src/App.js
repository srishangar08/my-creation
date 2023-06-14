import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <Link to="/about">About Us</Link> */}
              </li>
              <li>
                {/* <Link to="/contact">Contact Us</Link> */}
              </li>
            </ul>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='*' element={< Home />}></Route>
          </div>
       </Routes>
    </div>
  );
}

export default App;
