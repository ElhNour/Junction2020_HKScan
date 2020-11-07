import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavLinks.css"


const NavLinks = (props)=>{
    return(
        <ul className="nav-links">
           
           <li>
                <NavLink to="/AgroFood">Agrofood Ecosystem®</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/Facts/Welfare">Facts</NavLink>
            </li>
            
            
            <li>
                <NavLink to="/Feedback">Tell us what do you think!</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;