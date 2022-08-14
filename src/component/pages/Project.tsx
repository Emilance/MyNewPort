import { useState } from "react"
import FooterNav from "../FooterNav"
import LastProject from "../section/LastProject"
import PageHeader from "../section/PageHeader"
import './project.css'

const Project = () => {
    const [projectType, setProjectType] = useState("coding")


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
          {projectType == "coding"  &&
            <>
         <LastProject
              image="/projects/dyen.PNG"
              review = "My review is that you are great"
              title = "DYEN CLOTHING ECOMMERCE WEBSITE"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
           />
            <hr/>
            <LastProject
              image="/projects/TheVolink.PNG"
              review = "Damilola is great"
              title = "THEVOLINK LANDING PAGE"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
           />
            <hr/>
            <LastProject
              image="/projects/dyen.PNG"
              review = "My review is that you are great"
              title = "DYEN CLOTHING ECOMMERCE WEBSITE"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
           />
            
            </>
          }
           {projectType == "CMS"  &&
            <>
 
            <LastProject
              image="/projects/Thankyoupage.PNG"
              review = "My review is that you are great"
              title = "A THANK YOU PAGE FOR KAJABI COURSE WEBSITE"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
           />
            <hr/>
            <LastProject
              image="/projects/BONLABIN.PNG"
              review = "My review is that you are great"
              title = "BONLABIN BUSINESS  WEB SITE BUILD WITH WORDPRESS"
              description ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusamus accusantium odit voluptatem, ipsa blanditiis perspiciatis dicta! Quisquam sit maiores necessitatibus aliquid minus quidem amet accusamus similique ut modi dolorum maxime aliquam rem nostrum beatae ad quibusdam, est vitae quis."
           />
            
            </>
          }
          <FooterNav 
          page='project'
          />
        </div>
    )
}

export default Project