import React, { useContext } from "react"
import { ImHome } from 'react-icons/im'
import {  IoMdContact } from "react-icons/io"
import {SiAboutdotme}  from 'react-icons/si'
import {GrProjects}  from 'react-icons/gr'
import {MdRateReview} from 'react-icons/md'
import { ThemeContext } from "../App"
import { ContextState } from "../App"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {TbBrandReactNative}  from "react-icons/tb"
import './footerNav.css'

type ThemeType ={
  theme : string | undefined;
  toggleTheme : Function
}

type pageType ={
  page: string
}

const FooterNav =(prop: pageType) => {

   const {theme , toggleTheme} =useContext( ThemeContext)  as ThemeType;

    return(
        <div className="footerNav" id={theme}>

                <div title="Project"  className={`navIcon  ${prop.page =="project" ? "active" : "" }`}>
                <Link to="/projects">
                    <TbBrandReactNative title="project" className="icon" size='30'/>
                </Link>
                </div>



                 <div title="Contact" className={`navIcon  ${prop.page =="contact" ? "active" : "" }`}>
                <Link to="/contact">
                   <IoMdContact  className="icon" size='30'/>
                </Link>
                </div>



                  <div title="Home" className={`navIcon  ${prop.page =="home" ? "active" : "" }`}>
                <Link  className="link" to="/">
                  <ImHome  className="icon" size='35'/>
                </Link>
                </div>

                 <div title="About" className={`navIcon  ${prop.page =="about" ? "active" : "" }`}>
                <Link to="/about">
                 <SiAboutdotme  className="icon" size='30'/>
                </Link>
                </div>


                 <div title="Review" className={`navIcon  ${prop.page =="review" ? "active" : "" }`}>
                <Link to="/review">
                 <MdRateReview  className="icon" size='30'/>
                </Link>
                </div>


        </div>
    )
}

export default FooterNav 