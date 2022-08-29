import FooterNav from "../FooterNav"
import PageHeader from "../section/PageHeader"
import './contact.css'
import emailjs from 'emailjs-com'
import { GiCheckMark } from 'react-icons/gi'
import { useEffect, useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
    useEffect(() => {
        AOS.init({duration : 500});
      }, [])
    const [openPopUp, setOpenPopUP] = useState(false)
    const togglePopUp =() => {
        setOpenPopUP(!openPopUp)
    }
    const sentData = (e :any) => {
        e.preventDefault();

        emailjs.sendForm('service_0j9qlv9', 'template_mrwk62n', e.target, '1DW4hN_RXe2eopdg_')
          .then((result) => {
              console.log(result.text);
              togglePopUp()
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        
    }
    return (
        <div  className="contact">
              <PageHeader 
                 PageTitle ="CONTACT"
              />
            <div className="formSection">
                {openPopUp  &&
                
                    <div data-aos="zoom-in" className="success">
                      <p>  Submission  Successfull !!!</p>
                       <GiCheckMark size="20"/>
                       <button  onClick={togglePopUp}>OK</button>
                    </div>
                
                }
               <form className="form" onSubmit={sentData}>
                   <h4>Drop a Message for me here</h4>
                   <div className="field">
                       <label htmlFor="name" >Name</label>
                       <input  id="name" name="name" type="text" placeholder="Type your name"/>
                   </div>
                   <div className="field">
                       <label htmlFor="email" >Email</label>
                       <input id="email" name="email" type="Email" placeholder="type your Email"/>
                   </div>
                   <div className="textarea">
                       <label > Message</label>
                      <textarea  name="message" ></textarea>
                   </div>
                   <input   type="submit"  value = "Submit"/>
               </form>
               <div className="svgCon">
                   <img className="svg" src="/react.svg" />
               </div>
            </div>


            <FooterNav
            page="contact"
            />
        </div>
    )
}


export default  Contact  