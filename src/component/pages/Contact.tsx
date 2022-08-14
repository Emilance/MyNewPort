import FooterNav from "../FooterNav"
import PageHeader from "../section/PageHeader"


const Contact = () => {
    return (
        <div  className="contact">
              <PageHeader 
                 PageTitle ="CONTACT"
              />
            <div className="formSection">

               <form className="form">
                   <div className="field">
                       <label htmlFor="name" >Name</label>
                       <input id="name" type="text" placeholder="Type your name"/>
                   </div>
                   <div className="field">
                       <label htmlFor="email" >Email</label>
                       <input id="email" type="Email" placeholder="type your Email"/>
                   </div>
                   <div className="textarea">
                       <label > Message</label>
                      <textarea ></textarea>
                   </div>
                   <input type="submit" value = "Submit"/>
               </form>
            </div>


            <FooterNav
            page="contact"
            />
        </div>
    )
}


export default  Contact  