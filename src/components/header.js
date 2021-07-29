import logo from './logo.png'
import { Link } from "react-router-dom";
import { Nav,Navbar,FormControl,Form,Button } from 'react-bootstrap';
import '../custom.scss'
const Header = () =>{
 
    return(
        // <div style = {Style.Header} >
        //     <Link to='/'>{<img src = {logo} style={Style.Logo}/>}</Link>
        //     <div>
        //         <h1> Sneaker Head </h1>
        //     </div>
        //     <Link to='/login' style={Style.login}>Login</Link>
        // </div>
        <Navbar bg='dark' variant ='dark' sticky ='top' expand="lg">
            <Navbar.Brand >
                <a className='logo' href='/'><img src={logo} width="60px" height='60px'></img></a>
                SNEAKER HEAD
            </Navbar.Brand>
            
            <Navbar.Toggle />
            <Navbar.Collapse className='choose'>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Sign up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header 

const Style = {
    Header: {
        color: "red",
        backgroundColor: "black",
        textTransform: "uppercase",
        display: "flex",
    },
    Logo: {
        width: "65px",
        marginRight: "10px"
    },
    login: {
        color: "white",
        textDecoration: "none",
        paddingLeft:"800px",
        paddingTop: "30px"
    }
}