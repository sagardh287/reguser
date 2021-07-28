import React from 'react'
import "./registration.css"

export default function Login() {
    return (
        <div>
            <div className="registercontainer">
                <div className="login">
                           
            <h3 className="registertext">Sign up</h3>
                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your email"  />
                    <input type="password" name="name" id="name" autoComplete="off" placeholder="Your password" />
                    <button className="signupbtn">Sign up</button>
                </div>
            </div>
        </div>
    )
}
