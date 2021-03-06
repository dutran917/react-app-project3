import React from 'react'
import das from './das.png'
import nike from './nike.png'
import mlb from './mlb.png'
import vans from './vans1.png'
import nb from './nb.png'
import {Link} from 'react-router-dom'
// import {Strong} from 'react-bootstrap'
const Brand = () => {

    return (
        <div className="content-main"> 
            <div >
                <h3 className="content-title"> <span className="span-name">Popular Brands</span> </h3>
            </div>
            <div className="brand">
            <Link  to='/brand/Adidas' className="name-brand">
                <div className="card-adidas">
                    <img className="dasimg" src={das}></img>    
                </div>
            </Link>
            <Link to='/brand/Nike' >
                <div className="card-nike">
                    <img className="dasimg" src={nike}></img>
                </div>
            </Link>
            <Link to='/brand/Vans'>
                <div className="card-vans">
                    <img className="dasimg" src={vans}></img>
                </div>
            </Link>
            <Link to='/brand/New-Balance' >
                <div className="card-nb">
                    <img className="dasimg" src={nb}></img>
                </div>
            </Link>
            <Link to='/brand/MLB' >
                <div className="card-mlb">
                    <img className="dasimg" src={mlb}></img>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Brand
