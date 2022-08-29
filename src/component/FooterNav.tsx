import React, { useContext, useEffect, useRef, useState } from "react"
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
  const  buttonRef =useRef<HTMLHeadingElement>()
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
                
                 <a target='_blank' href="https://web.facebook.com/damiloladaniel.alabi/" data-aos="fade-up" data-aos-duration="900" className="fIcon">
                     <BsFacebook size="30"/>
                 </a>
                 <a target='_blank' href="https://www.instagram.com/eminencedd/" data-aos="fade-up" data-aos-duration="800" className="fIcon">
                     <BsInstagram size="30"/>
                 </a>
                 <a  target='_blank' href='https://twitter.com/EminenceX3' data-aos="fade-up"  data-aos-duration="700" className="fIcon">
                     <BsTwitter size="30"/>
                 </a>
                 <a  target='_blank'  href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/' data-aos="fade-up" data-aos-duration="600"  className="fIcon">
                     <BsLinkedin size="30"/>
                 </a>
                 <a target="_blank" href='https://github.com/emilance'  data-aos="fade-up" data-aos-duration="400" className="fIcon">
                     <BsGithub size="30"/>
                 </a>
         

            </div>
          }
           <Link  className="link" to="/projects">

                <div title="Project"  className={`navIcon  ${prop.page =="project" ? "active" : "" }`}>
               
                    <TbBrandReactNative title="project" className="icon" size='30'/>
            
                </div>
           </Link>


           <Link  className="link"  to="/contact">
                 <div title="Contact" className={`navIcon  ${prop.page =="contact" ? "active" : "" }`}>
               
                   <IoMdContact  className="icon" size='30'/>
                
                </div>
            </Link>    


            <Link  className="link" to="/">
                  <div title="Home" className={`navIcon  ${prop.page =="home" ? "active" : "" }`}>
               
                  <ImHome  className="icon" size='35'/>
             
                </div>
            </Link>


            <Link  className="link" to="/about">
                 <div title="About" className={`navIcon  ${prop.page =="about" ? "active" : "" }`}>
               
                 <SiAboutdotme  className="icon" size='30'/>
               
                </div>
            </Link>    

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