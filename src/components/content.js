import Detail from "./detail"
import Shoes from "./Shoes"
const Content =({display,shoes,shoe,clickonimg,style})=> {
     return(
        <div style={style}>
            <Shoes shoes ={shoes}  ></Shoes>
        </div>

        )
 
}
export default Content