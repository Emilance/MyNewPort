
import ReactSwitch from 'react-switch';
import './pageHeader.css'

import { ThemeContext } from "../../App"
import { ContextState } from "../../App"
import { useContext } from 'react';

type ThemeType ={
  theme : string | undefined;
  toggleTheme : Function
}

type  Titletype ={
    PageTitle :string
}



const PageHeader =(props : Titletype)=>{

    const {theme , toggleTheme} =useContext( ThemeContext)  as ThemeType;

  
    return(
        <div className="pageHeader">
        <div className="profile">
             <img className="profileImg" src="/dp.jpg" alt="profile pics"/>
          </div>
          <div className="pageTitle">
              <h1>
                  {props.PageTitle}
             </h1>
          </div>
          <div className='themeswitch' >

           <ReactSwitch  id={theme}   onChange={() =>toggleTheme()}   checked = {theme === "dark"}/>
          </div>


        </div>
    )
}

export default PageHeader ;