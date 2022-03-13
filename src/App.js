import './App.css';
import Home from './pages/home/Home';
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import New from './pages/new/New';
import Login from './pages/login/Login';
import './style/style.scss'
import List from './pages/list/List';
import Single from './pages/single/Single'

function App() {
  const [state,setState] = useState(true)
  
  
  return (
    <div className='ark'>

    
    <Router>
    <div >
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
     <Routes>
        <Route path="/about" element={ <Login />} />
         
      
        
        <Route path="/"  element={ <Home state={state} setState={setState}/>} />
        <Route path="/users" element={ <List />} />
        <Route path="/users/new" element={ <New />} />
       
        <Route path="/users/:userId" element={ <Single />} />
        <Route path="/users/new" element={ <New  />} />
        
        <Route path="/products" element={<List />} />
        <Route path="/products/:productId" element={<Single/>} />
        <Route path="/products/new" element={<New/>} />

         
        </Routes>
    </div>
  </Router>
  </div>
  );
}

export default App;
