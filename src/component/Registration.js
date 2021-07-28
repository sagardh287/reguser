import React from 'react'
import "./registration.css"
import { useState } from 'react';
import QRCode from 'qrcode.react';

export default function Registration() {
    const [mob,setMob]=useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState();
    const [Rest, setRest] = useState("");
    const [amount, setAmmount] = useState("");
    const data={
        username:name,
        Email:email,
        Password:password,
        City:city,
        Pincode:pincode,
        Restaurant:Rest,
        Amount:amount,
    };
    const getdata = () => {
        console.log(data);
    }

    return (
            <div className="registercontainer">
                <div className="register">

                    <h3 className="registertext">Sign up</h3>
                    <input className="registerinput" type="text" name="name" id="" autoComplete="off" placeholder="Your name" onChange={(e) => { setName(e.target.value) }} />
                    <input className="registerinput" type="number" name="mobno" id="mobno" autoComplete="off" placeholder="Your mobile no" onChange={(e) => { setMob(e.target.value) }} />
                    <input className="registerinput" type="text" name="email" id="email" autoComplete="off" placeholder="Your email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="registerinput" type="text" name="Rest" id="Restname" autoComplete="off" placeholder="Restaurant name" onChange={(e) => { setRest(e.target.value) }} />
                    <input className="registerinput" type="password" name="pwd" id="pwd" autoComplete="off" placeholder="Your password" onChange={(e) => { setPassword(e.target.value) }} />
                    <input className="registerinput" type="text" name="Address1" id="address1" autoComplete="off" placeholder="Address1"  />
                    <input className="registerinput" type="text" name="Address2" id="address2" autoComplete="off" placeholder="Address2"  />

                    <select className="registerinput" id="inputState" onChange={(e) => { setCity(e.target.value) }}>
                        <option selected>Choose city...</option>
                        <option>pune</option>
                        <option>mumbai</option>
                        <option>nashik</option>
                        <option>shirawal</option>
                        <option>other</option>
                    </select>
                    <input className="registerinput" type="text" name="pincode" id="pincode" autoComplete="off" placeholder="Your pincode" onChange={(e) => { setPincode(e.target.value) }} />
                    <input className="registerinput" type="text" name="amount" id="amount" autoComplete="off" placeholder="Amount" onChange={(e) => { setAmmount(e.target.value) }} />
                    <button className="signupbtn" id="rzp-button1">Sign up</button>
                </div>
                <div>
                    <QRCode id="abc" 
                value={`"name=${name},email=${email},Password=${password},City=${city},Pincode=${pincode},Restaurant=${Rest},Amount=${amount}"`}
                ></QRCode>
                </div>
                
            </div>
    )
}
