import '../App.css'
import { Link } from "react-router-dom";
const Login = ()=>{
    return(
    <div class="login-page">
        <div class="form">
            
            <form class="login-form">
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p class="message">Not registered? <Link to='/register'>Create an account</Link></p>
            </form>
        </div>
    </div>
    )
}
export default Login