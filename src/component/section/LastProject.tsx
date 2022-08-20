import { Link } from "react-router-dom"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import './lastProject.css'
type projectInfoType ={
    image : string,
    review: string,
    title: string,
    description: string,
    coding : boolean,
    reference : string,
    live : string,
    source : string
}

const LastProject = (props : projectInfoType) => {
    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
    const {image, review, title, description, live, source, coding, reference} = props
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
              <div className="description" >
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