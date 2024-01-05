
import { useContext } from 'react';
import './App.css';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Dashboard from './page/Dashboard';
import Home from './page/Home';

import Project from './page/Project';

import {Routes,Route} from "react-router-dom"
import { isAuthTokenContext } from './context/ContextShare';

function App() {
  const {isAuthToken,setIsAuthToken} =useContext(isAuthTokenContext)
  return (
    <div >
   
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Auth/>}/>

        <Route path="/register" element={<Auth register/>}/>

        <Route path="/dashboard" element={ isAuthToken? <Dashboard Dashboard/>:<Home/>}/>

        <Route path="/project" element={<Project/>}/>
        
       
      </Routes>
      
        <Footer/>
    
    </div>
  );
}

export default App;
