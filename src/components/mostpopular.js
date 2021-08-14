import React from 'react'
import Popular from '../data/pupular.json'
import Shoe from './Shoe'
const Mostpopular = () => {
    const shoes = Popular
    const style = {
        list:{
            display:"flex",
            alignItems: "flex-end"
        }
    }
    return (
        <div>
            <h3> Most Popular Sneakers </h3>
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