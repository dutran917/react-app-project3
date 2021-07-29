import React from 'react'
import qc from '../qc.png'
import qc4 from '../qc4.png'
import qc2 from '../qc2.png'
import {Carousel} from 'react-bootstrap'
const Ads = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={qc}
                alt="First slide"
                height='400px'
                />
                <Carousel.Caption>
                <h3>THE BEST SALE</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={qc4}
                alt="Second slide"
                height='400px'
                />
                <Carousel.Caption>
                <h3>POPULAR BRANDS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <h3>COLECTION</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Ads