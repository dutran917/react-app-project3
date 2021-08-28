import '../custom.scss'
import { useState,useEffect } from 'react';
import Shoes from './Shoes'
import { AiFillCaretLeft } from 'react-icons/ai';
import DataNike from '../data/data.json';
import DataDas from '../data/dataDas.json';
import DataVans from '../data/dataVans.json'
import DataMLB from '../data/dataMlb.json'
import DataNB from '../data/dataNB.json'
import lineNike from '../data/shoelineNike.json'
import lineDas from '../data/shoelineDas.json'
import lineVans from '../data/shoelineVans.json'
import lineMLB from '../data/shoelineMlb.json'
import lineNB from '../data/shoelineNB.json'
import {useParams,useHistory} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import { Link } from "react-router-dom";
import bg from '../bg.png'
import banner from '../data/banner.json'

const Body = () =>{
    const Style ={
        Section:{
            marginTop: "2%",
            display: "flex"
        },
        Left:{
            paddingLeft: "5%",
            width: "20%"
        },
        Right:{
            width: "80%",
            display: "flex",
            position: "relative",
            paddingRight: "3%"
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
        },
        img:{
          width: "100%",
          height: "400px"  
        }
    }
    // const [brand,setBrand] = useState("")
    //setBrand là hàm thay đổi giá trị brand 
    //useState là đặt mặc định  brand ban đầu là Nike
 

    const [shoes,setShoes]  = useState([]) 
    let shoesNike = DataNike
    let shoesDas = DataDas
    let shoesVans = DataVans
    let shoesMLB = DataMLB
    let shoesNB = DataNB
    const [des,setDes] = useState(null)
    const [lineofshoe,setLoS] = useState(lineNike)
    // const [shoe,setShoe] = useState(null)
    const {brand} = useParams()
    const [line, setline] = useState(null)
    const [max,setMax] = useState(null)
    const [min,setMin] = useState(null)
    function changeBrand(brand){
        switch(brand)
        {
            case 'Nike':
            {   
                setShoes(shoesNike)
                setLoS(lineNike)
                setDes(banner.nike)
                break
            }
            case 'Adidas':
            {   
                setShoes(shoesDas)
                setLoS(lineDas)
                setDes(banner.adidas)
                break
            }
            case 'Vans':
            {
                setShoes(shoesVans)
                setLoS(lineVans)
                setDes(banner.vans)
                break
            }
            case 'MLB':
            {
                setShoes(shoesMLB)
                setLoS(lineMLB)
                setDes(banner.mlb)
                break
            }
            case 'New-Balance':
            {
                setShoes(shoesNB)
                setLoS(lineNB)
                setDes(banner.nb)
                break
            }
            default:
              break
        }

    }

    useEffect(() => {
        changeBrand(brand)
        let clone 
            if(brand=='Nike')
                clone = shoesNike
            else if(brand =='Adidas')
                clone = shoesDas
            else if(brand =='Vans')
                clone = shoesVans
            else if(brand =='MLB')
                clone = shoesMLB
            else if(brand =='New-Balance')
                clone = shoesNB
               
        let fil = clone.filter(shoe => shoe.shoeline === line)
        if(line != null)
        {                  
            console.log(brand)
            
            console.log(fil)          
            setShoes(fil)
            
        }
        if(line==null&&min!=null)
        {
            setShoes(clone.filter(shoe => shoe.price <= max && shoe.price >=min))
        }
        else if(line != null && min != null )
        {
            setShoes(fil.filter(shoe => shoe.price <= max && shoe.price >=min))
        }
 

    },[brand,line,max,min])
    // window.scrollTo(0, 0)
    const [display,setDisplay] = useState(false)
  
 
    function showAll(){
        switch(brand)
        {
            case 'Nike':
            {   
                setShoes(shoesNike)
                break
            }
            case 'Adidas':
            {   
                setShoes(shoesDas)
                break
            }
            case 'Vans':
            {
                setShoes(shoesVans)
                break
            }
            case 'MLB':
            {
                setShoes(shoesMLB)
                break
            }
            case 'New-Balance':
            {
                setShoes(shoesNB)
                break
            }
            default:
              break
        }
        setline(null)
        setDisplay(false)
        
    }  
    
  
    return(
       <div>
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bg}
                    height='400px'
                    />
                    <Carousel.Caption>
                        <div className="des">
                            <h1>{des}</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
            <section style={Style.Section}>
            <div className="left" style={Style.Left}>
                <Form className="filter"> 
                    <h3>{brand}</h3>
                    <Form.Check type="radio" name='shoeline' label="All" defaultChecked onChange={()=>showAll()}/>
                    {lineofshoe.map((line)=>(
                       <Form.Check type="radio" name='shoeline' label={line} value={line} onChange = {(e)=>{setline(e.target.value) 
                                                                                                            setDisplay(true)}  }/>
                     
                    ))}
                    <h3>Price </h3>
                    <Form.Check type="radio" name="price" label="All" defaultChecked onChange={()=>setMin(null)}></Form.Check>
                    <Form.Check type="radio" name="price" label="$50-100" onChange={()=>{setMax(100) 
                                                                                        setMin(50)}}></Form.Check>
                    <Form.Check type="radio" name="price" label="$100-200" onChange={()=>{setMax(200) 
                                                                                        setMin(100)}}></Form.Check>   
                    <Form.Check type="radio" name="price" label="$200-400" onChange={()=>{setMax(400) 
                                                                                        setMin(200)}}></Form.Check>
                    <Form.Check type="radio" name="price" label="$400-800" onChange={()=>{setMax(800) 
                                                                                        setMin(400)}}></Form.Check>
                    <Form.Check type="radio" name="price" label="$800-1200" onChange={()=>{setMax(1200) 
                                                                                        setMin(800)}}></Form.Check>
                    <Form.Check type="radio" name="price" label="$>1200" onChange={()=>{setMax(5000) 
                                                                                        setMin(1200)}}></Form.Check>   
                    
                </Form>
                
            </div>
            
            <div className="right" style={Style.Right}>
                <Shoes shoes ={shoes} line={line} display={display} ></Shoes>
            </div>
        </section>     
       </div>
    )
}

export default Body
