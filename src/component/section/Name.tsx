import React from 'react'
import './name.css'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineProject} from 'react-icons/ai'

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
               <div className='namebtnCon'></div>
               <button className='namebtn'><AiOutlineProject className='nameIcon' size="20"/> My Projects</button>
               <button className='namebtn'> <CgProfile className='nameIcon' size="20"/> About Me </button>
           </div>
        </div>
    )
}

export default Name