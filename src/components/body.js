import '../custom.scss'
import { useState,useEffect } from 'react';
import Content from './content';
import { AiFillCaretLeft } from 'react-icons/ai';
import DataNike from '../data/data.json';
import DataDas from '../data/dataDas.json';
import {useParams} from 'react-router-dom'

const Body = () =>{
    const Style ={
        Right:{
            display: "flex",
            position: "relative"
            
        },
        Brand:{
            marginTop: 0,
            marginBottom: 0,
            color: "brown",
            textTransform: "uppercase",
            textAlign: "center",
            backgroundColor:"black",
            paddingBottom: "10px",
            paddingTop: "10px",
            border: "3px white dashed",
            borderRadius: "20px"
        },
        back:{
          position: "absolute",
          left: "50px"
        }
    }
    // const [brand,setBrand] = useState("")
    //setBrand là hàm thay đổi giá trị brand 
    //useState là đặt mặc định  brand ban đầu là Nike
 

    const [shoes,setShoes]  = useState([]) 
      
    const [shoesNike,setShoesNike]  = useState(DataNike) 

    const [shoesDas,setShoesDas]  = useState(DataDas) 
    const [shoe,setShoe] = useState(null)
    const [id,setId] = useState(-1)

    const {brand} = useParams()
    console.log(brand)
    useEffect(() => {
        switch(brand)
        {
            case 'Nike':
                setShoes(shoesNike)
                // console.log(shoes)
                break
            case 'Adidas':
                setShoes(shoesDas)
                break
            default:
              break
        }
        for(let i=0;i<shoes.length;i++)
        {
            if(id == shoes[i].id)
            {
              setShoe(shoes[i])
            }
        }
  },[id,brand])

  const [display,setDisplay] = useState(true)
  
  const clickonimg = (a)=> {
    setDisplay(false)
    setId(a.id)
    setShoe(a)
    console.log(shoe)
}
    
    return(
           <div className="right" style={Style.Right}>
           { display==false && <AiFillCaretLeft style={Style.back} size="50px" title="back" onClick={()=> setDisplay(true)}></AiFillCaretLeft>}
            <Content display={display} shoes={shoes} shoe={shoe} clickonimg={clickonimg}></Content>
           </div>
    )
}

export default Body
