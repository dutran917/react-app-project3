import React from 'react'
import qc from '../qc.png'
import qc4 from '../qc4.png'
import qc2 from '../qc2.png'
import {Carousel} from 'react-bootstrap'
const Ads = () => {
    return (
        <Carousel fade controls = {false}>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={qc4}
                alt="First slide"
                height='400px'
                />
                <Carousel.Caption className="caption">
                    {/* <div >
                        <h1 className="ads">Welcome !!</h1>
                    </div> */}
                    <div className="ads-details">
                        <h2>Every sneaker you want is always available and authentic</h2>
                    </div>
                  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={qc}
                alt="Second slide"
                height='400px'
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={qc2}
                alt="Third slide"
                height='400px'
                />
                <Carousel.Caption>
                <div className="ads-details">  
                    
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Ads