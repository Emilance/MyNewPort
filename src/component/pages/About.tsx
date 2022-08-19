import FooterNav from "../FooterNav";
import PageHeader from "../section/PageHeader";
import {BsFacebook, BsInstagram,BsLinkedin,BsGithub, BsTwitter} from 'react-icons/bs'
import { FaDownload } from "react-icons/fa"
import './about.css'
import PreviousExperience from "../section/PreviousExperience";

const About = ()=>{
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
            <div className="data">
                <div className="leftCol">
                    <p>LOCATION ::  <span>OSUN STATE, NIGERIA</span></p>
                    <p>EDUCATION ::  <span>BSC MATHEMATICS OBAFEMI AWOLOWO UNIVERSITY</span></p>
                    <p>PHONE    ::  <span> 08140711202, 08122077565</span></p>
                    <p>EMAIL   ::     <span>EMMYFEDEF@GMAIL.COM</span></p>
                     <p>INTEREST   ::   <span>CODING, NETWORKING, JUGGLING, TRADING, MUSIC </span></p>
                </div>
                <div className="rightCol">
                    <div className="resumeCon">
                        <img src="/resume.png" alt="myresume"/>
                      <div className="downloadBtn">
                        <a href="/resume.png">Download Resume</a>
                        <FaDownload  size="20"/>
                      </div>
                    </div>
                </div>

            </div>

             <div className="socialIcon" >
                 <a  className="sIcon" href="">
                 
                     <BsFacebook size="30"/>
             
                 </a>
                 <a  className="sIcon" href="">
                     <BsInstagram size="30"/>
                 </a>
                 <a   className="sIcon"  target='_blank' href='https://twitter.com/AlabiDamilolaD3' >
               
                     <BsTwitter size="30" />
               
                 </a>
                 <a  className="sIcon" target='_blank'  href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'>               
                     <BsLinkedin size="30"/>
                 </a>
                 <a  className="sIcon" target="_blank" href='https://github.com/emilance'>
                     <BsGithub size="30"/>
                 </a>
             </div>


             <PreviousExperience/>

            




            <FooterNav
             page="about"
           />
        </div>
    )
}

export default About ;