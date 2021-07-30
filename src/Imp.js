import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';

export default function Imp() {
    const [nas,setNas]=useState([]);
    const [firstcheck, setFirstcheck] = useState(false);
    const [secondcheck, setSecondcheck] = useState(false);
    const [thirdcheck, setThirdcheck] = useState(false);
    const [validate,setValidate]=useState(false);

    function getvalue(){
        if(firstcheck && secondcheck && thirdcheck){
        console.log(firstcheck);
        
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
            <button onClick={()=>{
                getvalue();
                
                    if(validate){
                        console.log("sagar")
                    }
            }
            }>sfafa</button>
        </div>
    )
}

{/* <script>
  axios.post('/orders').then((info) =>{
      console.log(info)
      var options = {
          "key": "rzp_live_XWLTIL7PmeGLye", 
          "name": "BNB",
          "description": "Payment Integration",
          "order_id": info.data.id,
           
          "callback_url": "/is-order-completed",
          "handler": function (response){
              alert( "Your Payment is success","Your order id is : ", response.razorpay_payment_id);
              console.log("payment_id : ",response.razorpay_payment_id);
              console.log("order_id : ", response.razorpay_order_id);
              console.log("signatures : ",response.razorpay_signature)}

      };
      var rzp1 = new Razorpay(options);
      document.getElementById('rzp-button1').onclick = function(e){
          rzp1.open();
          e.preventDefault();
      }
  })
  
</script> */}