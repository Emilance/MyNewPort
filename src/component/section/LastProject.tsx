import { Link } from "react-router-dom"
import React from 'react'

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
    const {image, review, title, description, live, source, coding, reference} = props
    return(
          <div className="lastProject" >
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
                      <a className="plink"  href={live}>
                      <div >LIVE</div>
                      </a>
                      {coding &&
                          <a className="plink"  href={source}>
                              <div>SOURCE CODE</div>
                          </a>
                      }
                  </div>
              </div>
          </div>
    )
}

export default LastProject