import React from "react";
import Main from "./component/Mainpage/Main";
import Header from './component/Header/Header';
import Login from './component/Validateuser/Login';
import Registration from './component/Validateuser/Registration';
import Tablereservation from './component/srvices/Tablereservation'
import Onlineordering from './component/srvices/Onlineordering'
import Logisticman from './component/srvices/Logisticman'
import Inventorymng from './component/srvices/Inventorymng'
import Freerecip from './component/srvices/Freerecip'
import Customermanagement from './component/srvices/Customermanagement'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Imp from "./Imp";
// 1page DFFA78
// 2page a6eca8
// 3page d2fdbb
// 4page e6f99e
// 5page e6f99e
// 6page b3dee5
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Onlineordering/>
            <Freerecip/>
            <Tablereservation/>
            <Customermanagement/>
            <Logisticman/>
            <Inventorymng/>
          </Route>
          <Route path="/free_recipe">
            <Header />
            <Freerecip />
          </Route>
          <Route path="/online_ordering">
            <Header />
            <Onlineordering />
          </Route>
          <Route path="/table_reservation">
            <Header />
            <Tablereservation />
          </Route>
          <Route path="/customer_management">
            <Header />
            <Customermanagement />
          </Route>
          <Route path="/logistic_management">
            <Header />
            <Logisticman />
          </Route>
          <Route path="/inventory_management">
            <Header />
            <Inventorymng/>
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/register">
            <Header/>
            <Registration />
          </Route>
          </Switch>
       </Router> 
  
    </div>
  )
}

export default App;
 



//       import * as emailjs from "emailjs-com"

// function App(){

//   const handlesubmit=()=>{
//           emailjs.sendForm(
//             "gmail",
//             "sagartemplate",
//             ".contactinfo",
//             "user_NSzR0SUSUvTfioK7PgmLC"
    
//           ).then().catch();
//       }

{/* <div>
<form className="contactinfo"
 onSubmit={handlesubmit()} >
   <div>
    <input type="text" name="name" value="sagar"></input>
    <input type="text" name="name" value="dhanawale"></input>
   
    <input type="button" value="submit" name="submit"/>
    </div>
</form>

</div> */}


// manifest
// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     },
//     {
//       "src": "logo192.png",
//       "type": "image/png",
//       "sizes": "192x192"
//     },
//     {
//       "src": "logo512.png",
//       "type": "image/png",
//       "sizes": "512x512"
//     }
//   ],
//   "start_url": ".",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
