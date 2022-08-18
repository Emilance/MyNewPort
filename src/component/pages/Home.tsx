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
              description ="A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with  unique login detail to view the admin dashboard "
              coding = {true}
              reference= "Fiverr"
              live="dyen.vercel.app"
              source=""
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