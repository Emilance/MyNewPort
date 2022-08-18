import React from 'react'
import './name.css'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineProject} from 'react-icons/ai'
import { Link } from "react-router-dom"




type NamePropsType ={
    name : string,
    role: string
}

const Name =(props : NamePropsType ) => {
    return (
        <div className="name">
           <h1>{props.name}</h1>
           <p>{props.role}</p>
           <div className='buttonCon' >
             
               <Link className='nlink' to="/projects">
               <div className='namebtn'><AiOutlineProject className='nameIcon' size="20"/> My Projects</div>
               </Link>
               <Link className='nlink' to="/about">
               <div  className='namebtn'> <CgProfile className='nameIcon' size="20"/> About Me </div>
               </Link>
           </div>
        </div>
    )
}

export default Name