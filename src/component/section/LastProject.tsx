
import React from 'react'

import './lastProject.css'
type projectInfoType ={
    image : string,
    review: string,
    title: string,
    description: string
}

const LastProject = (props : projectInfoType) => {
    const {image, review, title, description} = props
    return(
          <div className="lastProject" >
              <div className='showCon'>
              <div className="showImg" >
                  <img  className="showImage" src={image} alt=""/>
              </div>
              <div className='imgOverlay'>
                  <p>  Clents Review:: <span>{review}</span></p>
                   <hr/>
              </div>

              </div>
              <div className="description" >
                  <h1 >{title}</h1>
                  <p >{description}</p>
                  <div className='lastProjectBtnCon' >
                      <button >LIVE</button>
                      <button>SOURCE CODE</button>
                  </div>
              </div>
          </div>
    )
}

export default LastProject