import React from 'react'
import Shoe from './Shoe'
const Related = ({shoes}) => {
    const Style = {
        list:{
            display: "flex",
            maxWidth: "800px"
        }
    }
    return (
        <div style={Style.list}>
            {shoes.map((shoe)=>(
                <Shoe shoe = {shoe} key = {shoe.id} ></Shoe>  
            )) 
            }
        </div>
    )
}
export default Related
