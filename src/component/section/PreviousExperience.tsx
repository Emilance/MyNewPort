

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './previousExperience.css'
const PreviousExperience =() => {
    
    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
  const experienceInfo =[
    {
        image :"/hostinza.png",
        title :"Nodejs Developer ",
        date :"September 2022",
        jobDescription :"I setup   stripe payment workflow on Hostinza with Nodejs  and connected with NextJS  frontend, built some API endpoints  and cofigured the platform for matomo analytics"
    } , 
    {
        image :"/playjor2.jpg",
        title :"NextJs frontend Developer",
        date :"July 2022",
        jobDescription :" I worked together with a team of backend dev and front end dev to setup a marketplace on Playjor platform"
    } , 
    {
        image :"/fiverr.png",
        title :"Freelance Web Designer",
        date :"May 2021",
        jobDescription :"As a freelance  Web designer , I designed and redesigned websites for clients on CMS platforms like Wordpress, squarespace, Shopify e.t.c  Check out projects on the CMS tab of my project page"
    } 
  ]
    return (
        <div className="pExperience">
            <div className="experience">
                <h1>Work Experience</h1>
                <hr/>
                {experienceInfo.map((data, index)=>{
                    return(
                        <div data-aos="fade-up" className="company">
                        <div className="companyLogoCon">
                            <img src={data.image}  alt=""/>
                        </div>
                        <div className="workExperience">
                            <h3>{data.title}</h3>
                            <h5>{data.date}</h5>
                             <p>{data.jobDescription}</p>
                            <hr/>
                        </div>
                        </div>
                    )
                })}
              
                <div data-aos="fade-up" className="company">
                    <div className="companyLogoCon">
                        <img src="/fiverr1.png"  alt=""/>
                    </div>
                    <div className="workExperience">
                        <h3>Freelance Frontend Developer</h3>
                        <h5>May 2021</h5>
                         <p>As a freelance frontend developer on fiverr, I have been able to implement my proficiency in technologies like HTML,CSS, JAVASCRIPT and REACT.      Check out my fiverr profile <a target='_blank' href='https://www.fiverr.com/emilance'>HERE</a>  </p>
                        <hr/>
                    </div>
                </div>
              
            </div>

            
        </div>
    )
}
export default PreviousExperience