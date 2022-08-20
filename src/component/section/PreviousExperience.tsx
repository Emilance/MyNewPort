

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './previousExperience.css'
const PreviousExperience =() => {
    
    useEffect(() => {
        AOS.init({duration : 800});
      }, [])
    return (
        <div className="pExperience">
            <div className="experience">
                <h1>Work Experience</h1>
                <hr/>
                <div data-aos="fade-up" className="company">
                    <div className="companyLogoCon">
                        <img src="/playjor2.jpg"  alt=""/>
                    </div>
                    <div className="workExperience">
                        <h3>NextJs frontend Developer</h3>
                        <h5>July 2022</h5>
                         <p>I was a frontend webdev @ plajor where I worked together with a team of backend dev and front end dev to build and setUp the PlayJor platform proficiently</p>
                        <hr/>
                    </div>
                </div>
                <div data-aos="fade-up" className="company">
                    <div className="companyLogoCon">
                        <img src="/fiverr.png"  alt=""/>
                    </div>
                    <div className="workExperience">
                        <h3>Freelance Frontend Developer</h3>
                        <h5>May 2021</h5>
                         <p>Having been a frontend dev on fiverr, I have been able to implement my proficiency in technologies like HTML,CSS, JAVASCRIPT and REACT.      Check out my fiverr profile <a href=''>HERE</a>  </p>
                        <hr/>
                    </div>
                </div>
                <div data-aos="fade-up" className="company">
                    <div className="companyLogoCon">
                        <img src="/fiverr1.png"  alt=""/>
                    </div>
                    <div className="workExperience">
                        <h3>Freelance Web Designer</h3>
                        <h5>May 2021</h5>
                         <p>I was a freelance  Web designer on Fiverr micro jobs platform where I designed and redesigned websites for clients on CMS platforms like Wordpress, squarespace, Shopify e.t.c  Check out my fiverr profile <a href=''>HERE</a>   </p>
                        <hr/>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default PreviousExperience