import React,{useState} from 'react'
import "./login.css"

export default function Login() {
    const [email_id, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const getdata=()=>{
        const data={
            email_id:email_id,
            password:password
        }
        console.log(data);
    }
    return (
        <div>
            <div className="logincontainer">
                <div className="login">
                    <h3 className="logintext">Sign up</h3>
                    <span className="logininputtext" >Email</span>
                    <input className="logininput" type="text" name="email_id" placeholder="Your email" />
                    <span className="logininputtext" >Password</span>
                    <input className="logininput" type="password" name="password" placeholder="Your password" />
                    <button className="loginbtn" onClick={getdata()}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
