import React, { useContext, useEffect, useState } from "react"
import { ImHome } from 'react-icons/im'
import {  IoMdContact } from "react-icons/io"
import {SiAboutdotme}  from 'react-icons/si'
import {GrProjects}  from 'react-icons/gr'
import {MdRateReview} from 'react-icons/md'
import { ThemeContext } from "../App"
import { ContextState } from "../App"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {TbBrandReactNative}  from "react-icons/tb"
import {BiPlus} from "react-icons/bi"
import {BsFacebook, BsInstagram,BsLinkedin,BsGithub, BsTwitter} from 'react-icons/bs'
import {ImCross}  from 'react-icons/im';
import './footerNav.css';
import AOS from "aos";
import "aos/dist/aos.css";

type ThemeType ={
  theme : string | undefined;
  toggleTheme : Function
}

type pageType ={
  page: string;
}

const FooterNav =(prop: pageType) => {
   const [openSocial, setOpenSocial]  = useState(false)
   const {theme , toggleTheme} =useContext( ThemeContext)  as ThemeType;
   const toggleSocial = ()=> {
     setOpenSocial(!openSocial)
   }

   useEffect(() => {
  AOS.init();
}, [])

    return(
        <div className="footerNav" id={theme}>

          {openSocial  &&
          
            <div className="socialcon" >
           
                 <div data-aos="fade-up" data-aos-duration="900" className="fIcon">
                     <BsFacebook size="30"/>
                 </div>
                 <div data-aos="fade-up" data-aos-duration="800" className="fIcon">
                     <BsInstagram size="30"/>
                 </div>
                 <div data-aos="fade-up"  data-aos-duration="700" className="fIcon">
                     <BsTwitter size="30"/>
                 </div>
                 <div data-aos="fade-up" data-aos-duration="600"  className="fIcon">
                     <BsLinkedin size="30"/>
                 </div>
                 <div  data-aos="fade-up" data-aos-duration="400" className="fIcon">
                     <BsGithub size="30"/>
                 </div>
         

            </div>
          }
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

              {openSocial ?  
                <div   onClick={toggleSocial} title="Social Media" className={`navIcon  ${prop.page =="review" ? "active" : "" }`}>
                  <ImCross  className="icon" size='25'/>
                </div>
              :
                 <div  onClick={toggleSocial} title="Social Media" className={`navIcon  ${prop.page =="review" ? "active" : "" }`}>
                 <BiPlus  className="icon" size='30'/>
                </div>
            }

                
        </div>
    )
}

export default FooterNav 