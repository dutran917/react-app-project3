import React from 'react'
import {Link} from 'react-router-dom'
import { Nav,Navbar } from 'react-bootstrap'
import {ImFacebook,ImTwitter} from 'react-icons/im'
import {FiInstagram} from 'react-icons/fi'
import {AiFillYoutube} from 'react-icons/ai'
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return (
        <Navbar bg="light" expand="lg" sticky="bottom">
            <div className="footer-main">
                <div className="footer-brand">
                    <Link className="footer-link" to='/brand/Adidas' onClick={scrollToTop}>Adidas Originals</Link>
                    <p> Yeezy Boost 350  </p>
                    <p> Yeezy Boost 350 V2 </p>
                    <p> Yeezy Boost 700 V2 </p>
                    <p> Yeezy 500</p>
                    <p> Yeezy Foam RNNR</p>
                </div>
                <div className="footer-brand">
                    <Link className="footer-link" to='/brand/Nike' onClick={scrollToTop}>Nike Air Jordan</Link>
                    <p> Air Jordan 1</p>
                    <p>Air Jordan 4</p>
                    <p> Jordan 1 Low </p>
                    <p> Collab Travis Scott </p>
                    <p> Air Jordan 11 </p>
                </div>
                <div className="footer-brand">
                    <Link className="footer-link" to='/brand/Vans' onClick={scrollToTop}>Vans Off The Wall</Link>
                    <p> Vans-SK8 High </p>
                    <p> Vans X Fear of God </p>
                    <p> Old Skool </p>
                    <p> Vault </p>
                    <p> Era 95 DX FOG </p>
                </div>
                <div>

                <div className="footer-sns">
                    <div className="ic-sns">
                        <ImFacebook size="50px"></ImFacebook>   
                    </div>
                    <div>
                        <ImTwitter size="50px"></ImTwitter>
                    </div>
                    <div>
                       <FiInstagram size="50px"></FiInstagram>
                    </div>
                    <div>
                       <AiFillYoutube size="50px"></AiFillYoutube>
                    </div>
                   
                </div>
                <div className="footer-sns-1">
                    <p>©2021 Sneaker Head. All Rights Reserved.</p>
                </div>
                </div>
                
            </div>
           
    
        </Navbar>
    )
}

export default Footer
