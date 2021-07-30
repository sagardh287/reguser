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
                    <ul className="headernavul">
                        <Link to="login" >
                        <li className="headernavli">Login</li>
                        </Link>
                        <li className="headernavli">Register
                        <ul className="dropdownregister">

                            <li>Customer</li>
                            <Link to="register" >
                            <li>Publisher</li>
                            </Link>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav">
                <ul className="navul">
                    <Link to="/">
                        <li className="navli">HOME</li>
                    </Link>
                    <li className="navli navlidrop">SERVICES
                    <ul className="dropdown">
                        <Link to="/online_ordering" className="headernavulink">
                        <li>Online Ordering</li>
                        </Link>
                        <Link to="/free_recipe" className="headernavulink">
                        <li>Free Recipe</li>
                        </Link>
                        <Link to="/table_reservation" className="headernavulink">
                        <li>Table Reservation</li>
                        </Link>
                        <Link to="/customer_management" className="headernavulink">
                        <li>Customer Management</li>
                        </Link>
                        <Link to="/logistic_management" className="headernavulink">
                        <li>Logistic Management</li>
                        </Link>
                        <Link to="/inventory_management" className="headernavulink">
                        <li>Inventory Management</li>
                        </Link>
                    </ul>
                    </li>
                    <li className="navli">MEDIA</li>
                    <li className="navli">CONTACT US</li>
                </ul>
            </div>
        </div>

    )
}
