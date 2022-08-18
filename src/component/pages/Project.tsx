import { Fragment, useState } from "react"
import FooterNav from "../FooterNav"
import LastProject from "../section/LastProject"
import PageHeader from "../section/PageHeader"
import './project.css'

const Project = () => {
    const [projectType, setProjectType] = useState("coding")
  const codingProjects =[
    {
      image:"/projects/dyen.PNG",
      review : "Work in progress",
      title : "DYEN CLOTHING ECOMMERCE WEBSITE",
      description :"A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with  unique login detail to view the admin dashboard  ",
      coding: true,
      reference: "Fiverr",
      live:"https://www.dyen.vercel.app",
      source: " "

    },
    {
      image:"/projects/TheVolink.PNG",
      review : "Perfect job done",
      title :"THEVOLINK LANDING PAGE",
      description :" A responsive and converting Landingpage for theVolink business, created with the motive of converting visitors to join the business waitlist and await its launching ",
      coding: true,
      reference: "Nill",
      live:"theVolink.vercel.app",
      source: " "
    },
    {
      image:"/projects/cryptopunk.PNG",
      review : "My review is that you are great",
      title : "CRYPTOPUNK NFT PAGE",
      description :"A cryptopunk nft website built with reactJs fetching nft data on thirdweb using opensea nft api",
      coding: true,
      reference: "Nill",
      live:"cryotopunk.vercel.app",
      source: " "
    },
    {
      image:"/projects/fbclone.PNG",
      review : "Personal Project",
      title : "AN FBCLONE WITH MERN's technology",
      description :"I built a facebook clone using React in the frontend, ExpressJs and NodeJS in the backend, and MongoDB as Database",
      coding: true,
      reference: "Nill",
       live:"fbclone.vercel.app",
      source: " "
    },
  ]

  const CMSProjects =[
    {
      image:"/projects/Thankyoupage.PNG",
      review : "My review is that you are great",
      title : "A THANK YOU PAGE FOR KAJABI COURSE WEBSITE",
      description :"A thank you page for  an Online course  designed on Kajabi CMS platform, ",
      coding: false,
      reference: "Fiverr",
      live:" ",
      source: " "
    },
    {
      image:"/projects/BONLABIN.PNG",
      review : "My review i",
      title : "BONLABIN BUSINESS  WEB SITE BUILD WITH WORDPRESS",
      description :"I optimized bonlabin website a business website built on wordpress CMS platform, I redesign and updated homepage, product page and some other pages making it more attractive and userfriendly ",
      coding: false,
      reference: "Fiverr",
      live:" ",
      source: ""
    },
    {
      image:"/projects/totswapfilter.PNG",
      review : "My review is that yo",
      title : "TOTSWAPSHOP ecommerce website",
      description :"I built a custom filter on totswapshop an eccommerce website  built on shopify, allowing users to filter through all products thereby improving its user experience ",
      coding: false,
      reference: "Fiverr",
      live:" ",
      source: ""
    },
    {
      image:"/projects/Sweetsorrella.PNG",
      review : "My review is that yo",
      title : "Sweetsorrella Podcast website",
      description :"I designed sweetsorrella website on squarespace ensuring its user friendly and  SEO friendly , its  a podcast website designed for sweetsorrela on squarespace",
      coding: false,
      reference: "Fiverr",
      live:" ",
      source: ""
    },
  
  ]

    return(
        <div className="project" >
              <PageHeader 
                 PageTitle ="PROJECTS"
              />
              <div className="projectPageButtons">
                  <div onClick={() => setProjectType("coding")} className={`button  ${projectType == "coding" ? "openTab" : ""} `} >
                      With Coding
                  </div>
                  <div  onClick={() => setProjectType("CMS")} className={`button  ${projectType == "CMS" ? "openTab" : ""} `}  >
                      With CMS
                  </div>
              </div>
              <>
          {projectType == "coding"  &&
            codingProjects.map((details, i) => {
              return(

              <Fragment key={i}>

                <LastProject
                     image={details.image}
                     review ={details.review}
                     title = {details.title}
                     description ={details.description}
                     coding ={details.coding}              
                     reference = {details.reference}
                     live ={details.live}
                     source={details.source}
                  />
                   <hr/>
              </Fragment>
              )
            })
         
            
          
          }
              </>
           {projectType == "CMS"  &&
        
          CMSProjects.map((details, i) => {
                return(

                  <Fragment key={i}>

                <LastProject
                     image={details.image}
                     review ={details.review}
                     title = {details.title}
                     description ={details.description}
                     coding = {details.coding}
                     reference = {details.reference}
                     live ={details.live}
                     source={details.source}
                  />
                   <hr/>
              </Fragment>
              )
            })
         
          }
          <FooterNav 
          page='project'
          />
        </div>
    )
}

export default Project