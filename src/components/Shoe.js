
const Shoe = ({shoe, clickonimg}) => {
  
    return(
        
        <div className="item">
            <figure>
                <img onClick ={()=>clickonimg(shoe)} src={shoe.source} alt="shoe"/>
                <figcaption > {shoe.name} </figcaption>
            </figure>
        </div>
    )
}
export default Shoe