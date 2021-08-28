import React from 'react'
import Popular from '../data/pupular.json'
import Shoe from './Shoe'
const Mostpopular = () => {
    const shoes = Popular
    const style = {
        list:{
            display:"flex",
            justifyContent:"space-around",
            alignItems: "flex-end"
        }
    }
    return (
        <div className="content-main">
            <div >
                <h3 className="content-title"> <span className="span-name">Most Popular Sneakers</span> </h3>
            </div>
            <div style = {style.list}>
                {shoes.map((shoe)=>(
                    <Shoe shoe = {shoe} key = {shoe.id} ></Shoe>  
                )) 
                }
            </div>
        </div>

    )
}
export default Mostpopular