


import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
        <div className="left">
            <div className="tittle">
                <h3>Shooping Mall</h3>
            </div>
        </div>
        <div className="centre">
            <ul>
                <li> Women </li>
                <li> Men </li>
                <li> Children</li>
                <li> Beauty </li>
            </ul>
        </div>
        <div className="search">
            <input type = "text" placeholder='Search....'/>
        </div>
        <div className="right">
            <div className="signin">
                 Signin / Signup 
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header
