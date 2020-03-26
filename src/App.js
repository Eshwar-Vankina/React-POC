import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/NavigationComponent'
import SideNav from './components/Side-Nav/SideNav'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Card from './components/card/card';


class App extends Component {
  state = {  }
  render() { 
    return (
    <Router>  
        <React.Fragment>
          <Navigation/>
          <SideNav/>

            <Switch>
              <Route path="/Login" component={ Login }/>
              <Route path="/Signup" component={ SignUp }/>
            </Switch>
          

           <Card/>
      </React.Fragment>
    </Router>
   
  );
}
  }

 
export default App;
  // state = {
  //   isLogin : false,
  // }
 
