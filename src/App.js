import Header from './components/header'
import Ads from './components/ads'
import Body from './components/body';
import Login from './components/login';
import Register from './components/register';
import Brand from './components/brand'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './custom.scss'
import Detail from './components/detail';
import Mostpopular from './components/mostpopular';
import About from './components/about';
import Help from './components/help';
import Stories from './components/stories';
function App() {
 
  return (
      <Router>
        <Header></Header>  
        <Route exact path='/' component ={Ads}></Route>     
        <Route exact path='/' component ={Brand}></Route>
        <Route exact path='/' component ={Mostpopular}></Route>
        <Route exact path='/' component ={Stories}></Route>
        <Route path ='/brand/:brand' component={Body}></Route>
        <Route path ='/product/:shoe' component={Detail}></Route>
        <Route path='/account/login' component ={Login}></Route>
        <Route path='/account/register' component ={Register}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/help' component={Help}></Route>
      </Router>

  );
}

export default App;
