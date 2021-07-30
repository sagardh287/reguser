import React from 'react'
import "./registration.css"
import { useState } from 'react';
// import Axios from "axios";

export default function Registration() {
    const [restaurant_name, setRestaurantname] = useState("");
    const [name, setName] = useState("");
    const [designation,setDesignation] = useState("");
    const [mobile_no, setMob] = useState("")
    const [email_id, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [landmark,setLandmark]=useState("")

    const setdata = () => {
        setRestaurantname("");
        setName("");
        setDesignation("")
        setEmail("");
        setPassword("");
        setMob("");
        setPincode("");
        setAddress1("");
        setAddress2("");
        setCity("")
        setState("")
        setLandmark("")
    }
    const getdata = (e) => {

        const data = {
            restaurant_name: restaurant_name,
            name: name,
            designation:designation,
            mobile_no:mobile_no,
            email_id: email_id,
            Password: password,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            pincode: pincode,
            landmark:landmark
        };
        console.log(data);
        setdata();
    }

    return (
        <div className="registercontainer">
            <div className="registersidebar">
                <div><img src="images/inventory.jpg"/></div>
                <div><img src="images/Logistimngmt4.jpg"/></div>
                <div><img src="images/Tabledescription2.jpg"/></div>
            </div>

            <div className="register">
                <h3 className="registertext">Sign up</h3>
                <span className="registerinputtext">Name of the Restaurant</span>
                <input className="registerinput" type="text" name="restaurant_name"  placeholder="Restaurant name" onChange={(e) => { setRestaurantname(e.target.value) }} required/>

                <span className="registerinputtext">Name of the Owner</span>
                <input className="registerinput" type="text" name="name" value={name} placeholder="Your name" onChange={(e) => { setName(e.target.value) }} required/>
   
                <span className="registerinputtext">Designation </span>
                <input className="registerinput" type="texy" name="designation" value={designation} placeholder="Designation" onChange={(e) => { setDesignation(e.target.value) }} required/>
                
                <span className="registerinputtext">Mobile number </span>
                <input className="registerinput" type="number" name="mobile_no" value={mobile_no} placeholder="Your mobile no" onChange={(e) => { setMob(e.target.value) }} required/>
                
                <span className="registerinputtext">Email address</span>
                <input className="registerinput" type="text" name="email_id" value={email_id} placeholder="Your email" onChange={(e) => { setEmail(e.target.value) }} required/>

                <span className="registerinputtext" >Password</span>
                <input className="registerinput" type="password" name="password" value={password} placeholder="Your password" />
                
                <span className="registerinputtext">Address 1</span>
                <input className="registerinput" type="text" name="address1" value={address1} placeholder="Address1" onChange={(e) => { setAddress1(e.target.value) }} required/>

                <span className="registerinputtext">Address 2</span>
                <input className="registerinput" type="text" name="address2" value={address2} placeholder="Address2" onChange={(e) => { setAddress2(e.target.value) }} required/>
                
                <span className="registerinputtext">City</span>
                <input className="registerinput" type="text" name="city" value={city} placeholder="City" onChange={(e) => { setCity(e.target.value) }} required/>
               
                <span className="registerinputtext">State</span>
                <input className="registerinput" type="number" name="state" value={state} placeholder="Your state" onChange={(e) => { setState(e.target.value) }} required/>
               
                <span className="registerinputtext">Pincode</span>
                <input className="registerinput" type="number" name="pincode" value={pincode} placeholder="Your pincode" onChange={(e) => { setPincode(e.target.value) }} required/>
                <span className="registerinputtext">Landmark</span>
                <input className="registerinput" type="text" name="landmark" value={landmark} placeholder="your exact landmark" onChange={(e) => { setLandmark(e.target.value) }} required/>
                <button className="signupbtn" id="" onClick={() => { getdata() }}>Sign up</button>
            </div>

            <div className="registersidebar">
            <div><img src="images/Customermngmt3.jpg"/></div>
                <div><img src="images/freerecipe00.jpg"/></div>
                <div><img src="images/onlineordering1.jpg"/></div>
            </div>
        </div>
    )
}


// import QRCode from 'qrcode.react';
{/* <QRCode id="abc" 
value={`"name=${name},email=${email},Password=${password},City=${city},Pincode=${pincode},Restaurant=${Rest},Amount=${amount}"`}
></QRCode> */}


//  ye colour code h blue colour ye dalke batao