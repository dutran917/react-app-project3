import Shoe from "./Shoe"
import {FcShop} from 'react-icons/fc'
const Shoes = ({shoes}) =>{
    const style = {
        tit:{
            borderTop: "3px black solid",
            display: "flex"
        },
        h1:{
            marginTop: "2px",
            paddingLeft: "30px",      
        },
        list:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }
    }
    return(
        <div style = {style.item}>
            <div style ={style.tit}>
                <h3 style={style.h1} > PRODUCT </h3> 
                <div style={{marginLeft: "10px"}}>
                    <FcShop size='40px'></FcShop>
                </div>
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


export default Shoes