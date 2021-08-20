import { Link } from "react-router-dom";
const Shoe = ({shoe}) => {
    const a = "/product/" + shoe.name
    const Style = {
        h3: {
            fontWeight: "900" 
        }
    }
    return(
        
        <div className="item">
            <Link to={a} className="linkto">
                <figure>
                    <img className="shoe-img" src={shoe.source} alt="shoe"/>
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