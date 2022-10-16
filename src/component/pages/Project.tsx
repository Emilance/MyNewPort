import { Fragment, useState } from "react"
import FooterNav from "../FooterNav"
import LastProject from "../section/LastProject"
import PageHeader from "../section/PageHeader"
import './project.css'

const Project = () => {
    const [projectType, setProjectType] = useState("coding")
  const codingProjects =[
    {
      image:"/projects/astro.png",
      review : "Hackhathon",
      title : "ASTROMUTATIO LEARNING PLATFOFRM",
      description :"Astromutatio is a learning platform built with NextJs for astronomy lovers, I led a team to participant at NASA SPACE APP challlenge 2022, where we Utilize threeJs, React-three-fiber and NextJS in building astromutatio platform",
      coding : true,
      reference: "NASA SPACE APP",
      live:"https://astromutatio.vercel.app",
      source:"https://github.com/Emilance/Astromutatio"
    },
    {
      image:"/projects/dyen.PNG",
      review : "Work in progress",
      title : "DYEN CLOTHING ECOMMERCE WEBSITE",
      description :"A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with  unique login detail to view the admin dashboard  ",
      coding: true,
      reference: "Nill",
      live:"https://dyen.vercel.app",
      source: "https://github.com/Emilance/Dyenwebsite"

    },
    {
      image:"/projects/TheVolink.PNG",
      review : "Perfect job done",
      title :"THEVOLINK LANDING PAGE",
      description :" A responsive and converting Landingpage for theVolink business, created with the motive of converting visitors to join the business waitlist and await its launching ",
      coding: true,
      reference: "Nill",
      live:"https://theVolink.netlify.app",
      source: "https://github.com/Emilance/thevolink"
    },
    {
      image:"/projects/cryptopunk.PNG",
      review : "Persona Project",
      title : "CRYPTOPUNK NFT PAGE",
      description :"A cryptopunk nft website built with reactJs fetching nft data on thirdweb using opensea nft api",
      coding: true,
      reference: "Nill",
      live:"https://www.cryptopunk.netlify.app",
      source: "https://github.com/Emilance/Cryptopunknft"
    },
    {
      image:"/projects/fbclone.PNG",
      review : "Personal Project",
      title : "AN FBCLONE WITH MERN's technology",
      description :"I built a facebook clone using React in the frontend, ExpressJs and NodeJS in the backend, and MongoDB as Database",
      coding: true,
      reference: "Nill",
       live:"",
      source: "https://github.com/Emilance/Fb-clone-Backend"
    },
  ]

  const CMSProjects =[
   
    {
      image:"/projects/Thankyoupage.PNG",
      review : "A+++++ service!! Went above and beyond with my expectations. I can't wait to use again!!",
      title : "A THANK YOU PAGE FOR KAJABI COURSE WEBSITE",
      description :"A thank you page for  an Online course  designed on Kajabi CMS platform, ",
      coding: false,
      reference: "Fiverr",
      live:'https://stevie-m-hahn-llc.mykajabi.com/thank-you/',
      source: " "
    },
    {
      image:"/projects/BONLABIN.PNG",
      review : "fast and prompt service",
      title : "BONLABIN BUSINESS  WEB SITE BUILD WITH WORDPRESS",
      description :"I optimized bonlabin website a business website built on wordpress CMS platform, I redesign and updated homepage, product page and some other pages making it more attractive and userfriendly ",
      coding: false,
      reference: "Fiverr",
      live:"https://www.bonlabin.com ",
      source: ""
    },
    {
      image:"/projects/totswapfilter.PNG",
      review : "I needed some coding added to my shopify website in order to get around some of the filter limitations and Emilance did exactly what I needed and delivered the project a day early for an extremely reasonable price. He was lovely to work with and responded to all queries quickly and efficiently. Would absolutely 100% recommend!",
      title : "TOTSWAPSHOP ecommerce website",
      description :"I built a custom filter on totswapshop an eccommerce website  built on shopify, allowing users to filter through all products thereby improving its user experience ",
      coding: false,
      reference: "Fiverr",
      live:"https://www.totswapshop.com/ ",
      source: ""
    },
    {
      image:"/projects/Sweetsorrella.PNG",
      review : "Emilance was able to within a day get the flow and functionality of my square space website. He had great ideas that let me think of other ways my website could function. I recommend and look forward to working together again.",
      title : "Sweetsorrella Podcast website",
      description :"I designed sweetsorrella website on squarespace ensuring its user friendly and  SEO friendly , its  a podcast website designed for sweetsorrela on squarespace",
      coding: false,
      reference: "Fiverr",
      live:"http://www.sweetsorrella.com/",
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