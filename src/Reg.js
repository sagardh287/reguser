import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';

export default function Reg() {
    const [nas,setNas]=useState([]);
    const [firstcheck, setFirstcheck] = useState(false);
    const [secondcheck, setSecondcheck] = useState(false);
    const [thirdcheck, setThirdcheck] = useState(false);

    function getvalue(){
        // setFirstcheck(e);
        // console.log(firstcheck);
        // console.log(secondcheck);
        // console.log(thirdcheck);
        if(firstcheck && secondcheck && thirdcheck){
            
        console.log(firstcheck);
        return(
            <Redirect to="/free_recipe"/>
        )

        }

    }
    return (
        <div>
             <h1>this is checkbox</h1>
            <Checkbox value={firstcheck} color="primary" onChange={(e)=>{
                setFirstcheck(e.target.checked);
            }}/>
            <Checkbox value={secondcheck} color="primary" onChange={(e)=>{
                setSecondcheck(e.target.checked);
            }}/>
            <Checkbox value={thirdcheck} color="primary" onChange={(e)=>{
                setThirdcheck(e.target.checked);
                }}/>
            <button onClick={()=>getvalue()}></button>
        </div>
    )
}
