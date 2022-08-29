import { Link } from "react-router-dom"
import React, { ReactElement, useEffect, useState } from 'react'
import {FaReact, FaCss3, FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'
import {SiHtml5, SiJavascript, SiTailwindcss, SiStyledcomponents,  SiTypescript, SiExpress, SiMongodb}  from 'react-icons/si'

import AOS from "aos";
import "aos/dist/aos.css";

import './lastProject.css'
import { IconType } from "react-icons";
type projectInfoType ={
    image : string,
    review: string,
    title: string,
    description: string,
    coding : boolean,
    reference : string,
    live : string,
    source : string,
   
}

const LastProject = (props : projectInfoType) => {
    const [openDesc, setOpenDesc] = useState(false)
    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
      const toggleDesc = () => {
          setOpenDesc(!openDesc)
      }
    const {image, review,  title, description, live, source, coding, reference} = props
    return(
          <div data-aos="fade-up" className="lastProject" >
              <div className='showCon'>
              <div className="showImg" >
                  <img  className="showImage" src={image} alt=""/>
              </div>
              <div className='imgOverlay'>
                  <p>  Clents Review:: <span>{review}</span></p>
                   <hr/>
                   <p>Reference  :: <span>{reference}</span></p>
              </div>

              </div>
              {coding  &&
              
              <div className="mobileOnly">
                  <FaReact size='10'/>
                  <FaCss3 size='10'/>
                 < FaBootstrap size='10'/>
                 < SiJavascript size='10'/>
                 < SiTailwindcss size='10'/>
                 < SiStyledcomponents size='10'/>
                 < SiTypescript size='10'/>
              </div>
              }
                <p onClick={toggleDesc} className='mobileOnly' >{openDesc ? "view less.." : "More about..."}</p>
              <div className={openDesc ? "description" : "hideDesc"} >
                  <h1 >{title}</h1>
                  <p >{description}</p>
                  <div className='lastProjectBtnCon' >
                      <a  target="_blank" className="plink"  href={live}>
                      <div >LIVE</div>
                      </a>
                      {coding &&
                          <a target="_blank" className="plink"  href={source}>
                              <div>SOURCE CODE</div>
                          </a>
                      }
                  </div>
              </div>
          </div>
    )
}

export default LastProject