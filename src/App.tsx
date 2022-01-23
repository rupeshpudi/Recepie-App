import React from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from "./Components/Details";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

const App=()=>{
    return(
        <React.Fragment>
            
                <Router>
               <Navbar/>
               <Search/>
                <Routes>
                    <Route path="/" element ={<Navbar/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Details" element={<Details/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/ContactUs" element={<ContactUs/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signIn" element={<SignIn/>}/>
                  
                </Routes>
                  
                </Router>
                    
              
           
        </React.Fragment>
    )
}

    

export default App;