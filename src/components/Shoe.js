import { Link } from "react-router-dom";
import { useEffect } from "react";
const Shoe = ({shoe}) => {
    const a = "/product/" + shoe.name
    const Style = {
        h3: {
     
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      
   
    return(
        
        <div className="item">
            <Link to={a} className="linkto">
                <figure onClick={scrollToTop}>
                    <img  src={shoe.source} alt="shoe"/>
                    <div className="shoe-name">
                        <p> {shoe.name} </p>                       
                    </div>
                    <h3 style={Style.h3} className="price"> ${shoe.price} </h3>
                </figure>
            </Link>
        </div>
    )
}
export default Shoe