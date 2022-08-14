import React, { createContext, useState } from 'react';

import './App.css';
import Home from './component/pages/Home';
import FooterNav from './component/FooterNav';
import ReactSwitch from 'react-switch';
import PageHeader from './component/section/PageHeader';
import Project from './component/pages/Project';
import { Route, Routes } from 'react-router-dom';
import About from './component/pages/About';
import Contact from './component/pages/Contact';


export   interface ContextState {
  theme: string | null;
  toggleTheme : Function ;
}


export const  ThemeContext  = createContext({} as ContextState) ;


function App(){
  const [theme, setTheme] = useState("light");
 
  const toggleTheme =() =>{
      setTheme((mode) => (mode == "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}} >

    <div className="App"  id={theme}>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

     </Routes>
       {/* <Home/>
            
      <div className='switch' >

        <ReactSwitch  id={theme} onChange={toggleTheme}   checked = {theme === "dark"}/>
      </div>
       {/* 

      <FooterNav/> */}
    </div>

    </ThemeContext.Provider>
  );
}

export default App;
