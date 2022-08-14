import FooterNav from "../FooterNav";
import PageHeader from "../section/PageHeader";
import {BsFacebook, BsInstagram,BsLinkedin,BsGithub, BsTwitter} from 'react-icons/bs'

import './about.css'
import PreviousExperience from "../section/PreviousExperience";

const About = ()=>{
    return (
        <div className="about">
          
              <PageHeader 
                 PageTitle ="ABOUT ME"
              />
            <div className="summary" >
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="damilola-daniel-alabi-120036218" data-version="v1">
           </div>
           
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum pariatur? Perferendis necessitatibus at dignissimos.</p>
            </div>
            <div className="data">
                <div className="leftCol">
                    <p>LOCATION ::  <span>OSUN STATE, NIGERIA</span></p>
                    <p>EDUCATION ::  <span>BSC MATHEMATICS OBAFEMI AWOLOWO UNIVERSITY</span></p>
                    <p>PHONE    ::  <span> 08140711202, 08122077565</span></p>
                    <p>EMAIL   ::     <span>EMMYFEDEF@GMAIL.COM</span></p>
                     <p>INTEREST   ::   <span>CODING, NETWORKING, JUGGLING, TRADING, MUSIC </span></p>
                </div>

            </div>

             <div className="socialIcon" >
                 <div className="sIcon">
                     <BsFacebook size="30"/>
                 </div>
                 <div className="sIcon">
                     <BsInstagram size="30"/>
                 </div>
                 <div className="sIcon">
                     <BsTwitter size="30"/>
                 </div>
                 <div className="sIcon">
                     <BsLinkedin size="30"/>
                 </div>
                 <div className="sIcon">
                     <BsGithub size="30"/>
                 </div>
             </div>


             <PreviousExperience/>

            




            <FooterNav
             page="about"
           />
        </div>
    )
}

export default About ;