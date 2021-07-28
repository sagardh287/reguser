import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Main from "../Mainpage/Main"

export default function Header() {
    return (
        <div className="headerpage">
            <div className="header">
                <img className="headerlogo"></img>

                <div className="headersearch">
                    <input className="headersearchinput" type="text" />
                    <Search className="headersearchicon" />
                </div>
                <div className="headeroptioncart">
                    <ShoppingCart className="shoppingcart" />
                    <span className="hederoptionlinetwo headeroptioncount">0</span>
                </div>
                <div className="headernav">
                    <Link to="login">
                        <div className="headeroptionlogin">
                            <span>Login</span>
                        </div>
                    </Link>

                    <Link to="register">
                        <div className="headeroptionRegister">
                            <span>Register</span>
                        </div>
                    </Link>

                    </div>
                </div>
                <div className="nav">
                    <ul className="navul">
                        <li className="navli">HOME</li>
                        <li className="navli">SERVICES</li>
                        <li className="navli">MEDIA</li>
                        <li className="navli">CONTACT US</li>
                    </ul>
                </div>
        </div>

    )
}
