import Detail from "./detail"
import Shoes from "./Shoes"
const Content =({display,shoes,shoe,clickonimg,style})=> {
     return(
        <div style={style}>
            { display && <Shoes shoes ={shoes} clickonimg = {clickonimg } ></Shoes> }
            {display==false && <Detail shoe={shoe}></Detail>}
        </div>

        )
 
}
export default Content