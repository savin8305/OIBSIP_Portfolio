import React, {useState, useEffect} from 'react'
import Home from './components/Home/Home';
// import About from './components/About/About';
import { NavbarContext } from "./context/NavbarContext";
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Project';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Experience } from "./pages/Experience";
import { black, blue, typeScale } from "./utils";
import "./app.css"

const App = () => {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 second delay
  }, []);

  return (
    <>
      {loading ? ( // rendering loading interface if loading is true
        <div classNam="  mobile-loading  bg-site1" style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          
          <div style={{position: "relative", width: "100px", height: "100px"}}>
            <div className="circle1" />
            <div className="circle2" />
            <div className="circle3" />
            <div className="circle4" />
            <div className="circle5" />
            <div className="circle6" />
            <div className="god-light" />
            <div className="god-body" />
            <div className="god-head" />
            <div className="god-eyes" />
            <div className="god-smile" />
            
          </div>
          <h1 style={{ fontSize: '4rem', color: '#fff',display:'flex', fontFamily: 'monospace', textShadow: '0 0 10px #000', textAlign: 'center', padding: '1rem' }}>Welcome! Enjoy Your Stay</h1>
        </div>
      ) : ( // rendering actual content once loading is false
        <BrowserRouter className="bg-site1">
          <NavbarContext.Provider value={setPage}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={ <Experience/>} />
              <Route path="/contact" element={<Contact />} />
             
              <Route path="/projects" element={<Projects />} />
            </Routes>
           
          </NavbarContext.Provider>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;