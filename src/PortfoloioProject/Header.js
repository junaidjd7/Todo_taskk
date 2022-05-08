import React from 'react';
import Typed from 'react-typed'
const Header = () => {
  return (
   <div className="header-wraper">
       <div className="main-info">
           <h1>webdevelopment and websites promotions </h1>
           <Typed 
           className="typed-text"
           strings={["web designing","web development","facebook Ads smm","Google"]}
            typeSpeed={40}
            backSpeed={60}/>
            <a href='#' className="btn-main-offer">connect me</a>
       </div>
   </div>
  )
}

export default Header