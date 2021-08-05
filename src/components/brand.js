import React from 'react'
import das from './das.png'
import nike from './nike.png'
import mlb from './mlb.png'
import vans from './vans.png'
import nb from './nb.png'
import {Link} from 'react-router-dom'

const Brand = () => {

    return (
        <div className="brands"> 
            <h1> Popular Brands</h1>
            <div className="brand">
            <Link  to='/brand/Adidas' >
                <div className="card">
                    <img className="dasimg" src={das}></img>
                </div>
            </Link>
            <Link to='/brand/Nike' >
                <div className="card">
                    <img className="dasimg" src={nike}></img>
                </div>
            </Link>
            <Link to='/Vans'>
                <div className="card">
                    <img className="dasimg" src={vans}></img>
                </div>
            </Link>
            <Link to='/mlb' >
                <div className="card">
                    <img className="dasimg" src={mlb}></img>
                </div>
            </Link>
            <Link to='/newbalance' >
                <div className="card">
                    <img className="dasimg" src={nb}></img>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Brand
