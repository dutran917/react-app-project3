import { Link } from "react-router-dom";
const Shoe = ({shoe}) => {
    const a = "/product/" + shoe.name
    return(
        
        <div className="item">
            <Link to={a} className="linkto">
                <figure>
                    <img  src={shoe.source} alt="shoe"/>
                    <div>
                        <p> {shoe.name} </p>
                        <h3 className="price"> ${shoe.price} </h3>
                    </div>
                </figure>
            </Link>
        </div>
    )
}
export default Shoe