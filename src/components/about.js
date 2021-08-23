import {Carousel} from 'react-bootstrap'
import React from 'react'
import imgsrc from './SH.png'
import {MdPhone} from "react-icons/md";
import {GrLocation,GrInstagram } from "react-icons/gr";
import {BiTime} from "react-icons/bi";
import {FaFacebook} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import { Nav,Navbar } from 'react-bootstrap';
const About = () => {
    const Style = {
        img:{
            height: "500px",
            width: "100%"
        },
        h1:{
            fontWeight: "900"
        },
        flex:{
            display: "flex",
        }
    }
    return (
        <div>
            <div className="content">
                     <h1 className="text">
                        On Sneaker Head, every sneaker you want is always available and authentic. Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy and more!
                    </h1>
            </div>
            <div className="about-page">
                <div className="col1">
                    <h1 > SNEAKERHEAD.COM </h1>
                    <div className="phone">
                        <MdPhone size="40px"></MdPhone>
                        <h2> 0399513456 </h2>
                    </div>
                    <div className="address">
                        <GrLocation size="40px"></GrLocation>
                        <h2> 156 Hong Mai, Hai Ba trung, Ha noi </h2>
                    </div>
                    <div className="time">
                        <BiTime size="40px"></BiTime>
                        <h2>10AM – 9PM (ALL DAY)</h2>
                    </div>
                </div>
                <div className="col2">
                    <h1 >CUSTOMER CARE</h1>
                    <h2>SHOPPING GUIDE</h2>
                    <h2>CHECK ORDER</h2>
                    <h2>PAYMENTS</h2>
                    <h2>SHIPPING AND DELIVERY</h2>
                    <h2>WARRANTY AND REFUND</h2>
                    <h2>HANDLING OF COMPLAINTS</h2>
                </div>
                <div className="col3">

                </div>
            </div>
            <Navbar className="nav-foot" bg='dark' variant ='dark' sticky ='bottom' expand="lg">
            <div className="footer" style={Style.flex}>
                <div >
                    <p style={Style.h1}>SHIPPING</p>
                    <p>Giaohangtietkiem
                    Giaohangnhanh
                    Lalamove
                    Ahamove
                    GrabExpress</p>
                    <p style={Style.h1}>PAYMENT METHODS</p>
                    <p>Visa
                    Master Card
                    MOMO
                    Cash on Delivery</p>
                </div>
                <div className="icon-sns" style={Style.flex}>
                    <FaFacebook className="icon-display" size="70"></FaFacebook>
                    <GrInstagram className="icon-display" size="70"></GrInstagram>
                    <SiGmail className="icon-display" size="70"></SiGmail>
                </div>
                <div style={Style.flex}>
                    <AiOutlineCopyrightCircle size="50"></AiOutlineCopyrightCircle>
                    <h3> 2021 Snearker Head </h3>
                </div>
            </div>
            </Navbar>
        </div>
    )
}
export default About