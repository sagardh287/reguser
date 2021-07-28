
import Navbar from "./component/navbar/Navbar"
import Main from "./component/Mainpage/Main"
import Stories from "./component/stories/Stories"
import Content from "./component/content/Content"
import Header from './component/Header/Header';
import Login from './component/Login';
import Registration from './component/Registration';
import Payment from "./component/Payment"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:4000/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }

render(){
  return (
    <div>
      <p className="App-intro">{this.state.apiResponse}</p>
      <button id="rzp-button1" >click here</button>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Content />
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
      </Router> */}
    </div>
  );
}
}
export default App;
