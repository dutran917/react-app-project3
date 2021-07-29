import Header from './components/header'
import Ads from './components/ads'
import Body from './components/body';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
const a = {
  title: "Sneaker Head",
  content: "The Cheapest"
}

function App() {
  return (
      <Router>
        <Header></Header>  
        <Route exact path='/' component ={Ads}></Route>     
        <Route exact path='/' component ={Body}></Route>
        <Route path='/login' component ={Login}></Route>
        <Route path='/register' component ={Register}></Route>
       
        {/* <Route path='/register' component ={Register}></Route> */}
      </Router>

  );
}

export default App;
