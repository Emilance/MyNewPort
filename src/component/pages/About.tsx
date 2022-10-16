import FooterNav from "../FooterNav";
import PageHeader from "../section/PageHeader";
import {BsFacebook, BsInstagram,BsLinkedin,BsGithub, BsTwitter} from 'react-icons/bs'
import { FaDownload } from "react-icons/fa"
import './about.css'
import PreviousExperience from "../section/PreviousExperience";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Award from "../section/Award";

const About = ()=>{

    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
    return (
        <div className="about">
          
              <PageHeader 
                 PageTitle ="ABOUT ME"
              />
            <div className="summary" >
            {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="damilola-daniel-alabi-120036218" data-version="v1">
           </div>   */}
              <p>I am Damlola Daniel, an enthusiastic  ReactJS developer who is  eager to contribute to team success through hard work, attention to detail and excellent  organizational skills. With clear understanding of client application and server based application, I’m motivated  to learn, grow and excel in the tech space.  </p>
            </div>
            <div data-aos="flip-left" className="data">
                <div className="leftCol">
                    <p>LOCATION ::  <span>OSUN STATE, NIGERIA</span></p>
                    <p>EDUCATION ::  <span>BSC MATHEMATICS </span></p>
                    <p>SCHOOL    ::  <span> OBAFEMI AWOLOWO UNIVERSITY</span></p>
                    <p>PHONE    ::  <span> 08140711202, 08122077565</span></p>
                    <p>EMAIL   ::     <span>EMMYFEDEF@GMAIL.COM</span></p>
                     <p>INTEREST   ::   <span>CODING, NETWORKING, MUSIC </span></p>
                     <p>MORE   ::     <span> JUGGLING, TRADING,</span></p>
                </div>
                <div className="rightCol">
                    <div className="resumeCon">
                        <img src="/resume.png" alt="myresume"/>
                        <a href="/Resume.pdf" >

                      <div className="downloadBtn">
                        <a >View Resume</a>
                        <FaDownload  size="20"/>
                      </div>
                        </a>
                    </div>
                </div>

            </div>

             <div className="socialIcon" >
                 <a target='_blank' href="https://web.facebook.com/damiloladaniel.alabi/"  className="sIcon" >
                 
                     <BsFacebook size="30"/>
             
                 </a>
                 <a  className="sIcon" target='_blank' href="https://www.instagram.com/eminencedd/">
                     <BsInstagram size="30"/>
                 </a>
                 <a   className="sIcon"  target='_blank' href='https://twitter.com/EminenceX3' >
               
                     <BsTwitter size="30" />
               
                 </a>
                 <a  className="sIcon" target='_blank'  href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'>               
                     <BsLinkedin size="30"/>
                 </a>
                 <a  className="sIcon" target="_blank" href='https://github.com/emilance'>
                     <BsGithub size="30"/>
                 </a>
             </div>
              <Award/>

             <PreviousExperience/>


            <FooterNav
             page="about"
           />
        </div>
    )
}

export default About ;