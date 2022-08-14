import React from "react"
import FooterNav from "../FooterNav"
import Header from "../Header"
import LastProject from "../section/LastProject"
import MyStack from "../section/MyStack"
import Name from "../section/Name"
import PreviousExperience from "../section/PreviousExperience"


const Home  = () =>{
    return(
        <div className="Home" >
           <Header/>
           <Name 
              name="Damilola Daniel Alabi"
              role ="ReactJs developer"
           />
           <LastProject
              image="/projects/dyen.PNG"
              review = "My review is that you are great"
              title = "DYEN CLOTHING ECOMMERCE WEBSITE"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
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