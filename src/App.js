import Header from './components/header'
import Ads from './components/ads'
import Body from './components/body';
import Login from './components/login';
import Register from './components/register';
import Brand from './components/brand'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './custom.scss'

function App() {
 
  return (
      <Router>
        <Header></Header>  
        <Route exact path='/' component ={Ads}></Route>     
        <Route exact path='/' component ={Brand}></Route>
        <Route path ='/brand/:brand' component={Body}></Route>
        <Route exact path='/login' component ={Login}></Route>
        <Route exact path='/register' component ={Register}></Route>
      
      </Router>

  );
}

export default App;
