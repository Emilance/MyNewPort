import React from "react"
import  './header.css'

const Header = () => {
return (
    <div className="header"> 
      <div className="cover">
          <img className="coverImg" src="/comp5.jpg" alt=""/>
      </div>
      <div className="dp">
          <img  className="dpImg" src="/dp.jpg" alt =""/>
      </div>

    </div>
)
}

export default  Header