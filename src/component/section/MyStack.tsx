import {FaReact, FaCss3, FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'
import {BsGithub } from 'react-icons/bs'
import {SiHtml5, SiJavascript, SiTailwindcss, SiStyledcomponents,  SiTypescript, SiExpress, SiMongodb}  from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import AOS from "aos";
import "aos/dist/aos.css";

import './myStack.css'
import { useEffect } from 'react'

const MyStack = ()=> {


    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
    const markups =[
        {
            name : "HTML",
            icon : <SiHtml5 size="30"  className="techIcon"  />,
        },
        {
            name : "CSS",
            icon : <FaCss3 size="30"  className="techIcon"/>,
        },          
    ]

    const languages = [
        {
            name : "JavaScript",
            icon : <SiJavascript size="30"  className="techIcon"/>,
        },
        {
            name : "TypeScript",
            icon : <SiTypescript size="30"  className="techIcon"/>,
        },
        {
            name : "Python",
            icon : <FaPython size="30"  className="techIcon"/>,
        },
        
    ]
    const frameworks =[
        {
            name : "Tailwind",
            icon : <SiTailwindcss size="30"  className="techIcon"/>,
        },
        {
            name : "Bootstrap",
            icon : <FaBootstrap size="30"  className="techIcon"/>,
        },
        {
            name : "React",
            icon : <FaReact size="30"  className="techIcon"/>,
        },
        {
            name : "NextJs",
            icon : <TbBrandNextjs size="30"  className="techIcon"/>,
        },
        {
            name : "ExpressJS",
            icon : <SiExpress size="30"  className="techIcon"/>,
        },
        {
            name : "NodeJs",
            icon :  <FaNodeJs size="30"  className="techIcon"/>,
        },
    ]

    const otherTechs = [
        {
            name : "Styled Component",
            icon :  <SiStyledcomponents size="30"  className="techIcon"/>,
        },
        {
            name : "MongoDb",
            icon :  <SiMongodb size="30"  className="techIcon"/>,
        },
        {
            name : "Git",
            icon :  <BsGithub size="30"  className="techIcon"/>,
        },
    ]
    return(
        <div className="mystack" > 
                <h1> MY STACKS</h1>
                <div className="technologies">
                    <div data-aos="fade-left" className="stackCon">
                        <div className='techname' >
                            <h5>Mark Ups</h5>
                        </div>
                        <div className='stackIcons'>
                        {markups.map((stack, i) => {
                            return(
                                <div className='singleTechCon'>
                                  <p>{stack.name}</p>
                                  {stack.icon}
                               </div>
                            )
                        })}

                        </div>
                       
                    </div>
                 
                    <div data-aos="fade-right" className="stackCon">
                        <div className='techname' >
                            <h5>Languages</h5>
                        </div>
                        <div className='stackIcons'>
                        {languages.map((stack, i) => {
                            return(
                                <div className='singleTechCon'>
                                  <p>{stack.name}</p>
                                  {stack.icon}
                               </div>
                            )
                        })}

                        </div>
                       
                    </div>
         
                    <div data-aos="fade-left" className="stackCon">
                        <div className='techname' >
                            <h5>Frameworks</h5>
                        </div>
                        <div className='stackIcons'>
                        {frameworks.map((stack, i) => {
                            return(
                                <div className='singleTechCon'>
                                  <p>{stack.name}</p>
                                  {stack.icon}
                               </div>
                            )
                        })}

                        </div>
                       
                    </div>
               
                    <div data-aos="fade-right" className="stackCon">
                        <div className='techname' >
                            <h5>Others</h5>
                        </div>
                        <div className='stackIcons'>
                        {otherTechs.map((stack, i) => {
                            return(
                                <div className='singleTechCon'>
                                  <p>{stack.name}</p>
                                  {stack.icon}
                               </div>
                            )
                        })}

                        </div>
                       
                    </div>
                </div>
        </div>
    )
}

export default MyStack