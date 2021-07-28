import React  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './FlexBox.css';
import {Main} from './routes/Main.js';
import {Currency} from './routes/Currency.js';


import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
 
  return (
    <div className="App">
       <Router>
         <Route path='/' exact render={(props)=> <Main />} />
         <Route path='/currency/:id'  render={(props)=> <Currency />} />
       </Router>
    </div>
  );
}

export default App;
