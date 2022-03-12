import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } 
from "react-router-dom";
import New from './pages/new/New';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single'

function App() {
  return (
    <Router>
    <div>
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
     <Routes>
        <Route path="/about" element={ <Login />} />
         
      
        
        <Route path="/"  element={ <Home />} />
        <Route path="/users" element={ <List />} />
        <Route path="/users/new" element={ <New />} />
       
        <Route path="/users/:userId" element={ <Single />} />

         
        </Routes>
    </div>
  </Router>
  );
}

export default App;
