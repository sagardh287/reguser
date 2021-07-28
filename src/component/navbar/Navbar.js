import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import "./navbar.css"

export default function div() {
    return (
        <div className="nav">
        <div className="logo">
            <div>
                <img></img>
            </div>
            <div>
            <h2 className="t1">Bites & Beverages</h2>
            <h2 className="t2">“Taking Local Tastes, Across Boundaries”</h2>
            </div>
        </div>
                <div className="navbarcontent">
                    <input type="text" name="name" id="name"></input>
                    <div className="navbarreg">
                        <div className="login">Login</div>
                        <div className="Register">Registration</div>
                        <div className="">
                            <AddShoppingCart/>
                        </div>
                    </div>
            </div>
            <div className="navbarimgcontent">
                <img src="favicon.ico" alt="" className="navbarimg"></img>
                
                <img src="favicon.ico" alt="" className="navbarimg"></img>
                <img src="favicon.ico" alt="" className="navbarimg"></img>
                <img src="favicon.ico" alt="" className="navbarimg"></img>
            </div>
   </div>
    )
}
