import React from "react"
import FooterNav from "../FooterNav"
import Header from "../Header"
import LastProject from "../section/LastProject"
import MyStack from "../section/MyStack"
import Name from "../section/Name"
import PreviousExperience from "../section/PreviousExperience"
import {FaReact, FaCss3, FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'
import {BsGithub } from 'react-icons/bs'
import {SiHtml5, SiJavascript, SiTailwindcss, SiStyledcomponents,  SiTypescript, SiExpress, SiMongodb}  from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'




const Home  = () =>{
    return(
        <div className="Home" >
           <Header/>
           <Name 
              name="Damilola Daniel Alabi"
              role ="ReactJs developer"
           />
           <LastProject
              image="/projects/astro.png"
              review = "Hackhathon"
              title = "ASTROMUTATIO LEARNING PLATFOFRM"
              description ="Astromutatio is a learning platform built with NextJs for astronomy lovers, I worked together with a patner at NASA SPACE APP challlenge 2022, where we Utilize threeJs, React-three-fiber and NextJS in building astromutatio platform within 2days"
              coding = {true}
              reference= "NASA SPACE APP"
              live="https://astromutatio.vercel.app"
              source="https://github.com/Emilance/Astromutatio"
          />
           {/* <hr />
           <LastProject/> */}
           <MyStack/>
           <PreviousExperience/>
           <FooterNav
             page="home"
           />
        </div>
    )
}

export default Home 