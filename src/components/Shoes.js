import Shoe from "./Shoe"
import {FcShop} from 'react-icons/fc'
const Shoes = ({shoes, clickonimg}) =>{
    const style = {
        tit:{
            borderTop: "3px black solid",
            borderBottom: "1px black solid",
            display: "flex"
        },
        h1:{
            marginTop: "2px",
            paddingLeft: "30px",
            marginBottom: "2px",        
        },
        list:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }
    }
    return(
        <div style = {style.item}>
            <div style ={style.tit}>
                <h3 style={style.h1} > Best Seller </h3> 
                <div style={{marginLeft: "10px"}}>
                    <FcShop size='40px'></FcShop>
                </div>
            </div>
            <div style = {style.list}>
            {shoes.map((shoe)=>(
                <Shoe shoe = {shoe} key = {shoe.id} clickonimg={clickonimg}></Shoe>  
            )) 
            }
            </div>
        </div>
    )
}
const Style ={
    listItem: {
        display: "flex",
        flexWrap: "wrap"
    }
}
export default Shoes