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
const Body = () =>{
    const Style ={
        Section:{
            display: "flex"
        },
        Left:{
            paddingTop: "2%",
            paddingLeft: "5%",
            width: "20%"
        },
        Right:{
            width: "80%",
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
    let shoesNike = DataNike
    let shoesDas = DataDas
    let shoesVans = DataVans
    let shoesMLB = DataMLB
    let shoesNB = DataNB
    const [lineofshoe,setLoS] = useState(lineNike)
    // const [shoe,setShoe] = useState(null)
    const [id,setId] = useState(-1)
    const {shoe} = useParams()
    const {brand} = useParams()
    const [line, setline] = useState(null)
    function changeBrand(brand){
        switch(brand)
        {
            case 'Nike':
            {   
                setShoes(shoesNike)
                setLoS(lineNike)
                break
            }
            case 'Adidas':
            {   
                setShoes(shoesDas)
                setLoS(lineDas)
                break
            }
            case 'Vans':
            {
                setShoes(shoesVans)
                setLoS(lineVans)
                break
            }
            case 'MLB':
            {
                setShoes(shoesMLB)
                setLoS(lineMLB)
                break
            }
            case 'New-Balance':
            {
                setShoes(shoesNB)
                setLoS(lineNB)
                break
            }
            default:
              break
        }

    }

    useEffect(() => {
        changeBrand(brand)
        if(line != null)
        {
            let clone 
            if(brand=='Nike')
                clone = shoesNike
            else if(brand =='Adidas')
                clone = shoesDas
            else if(brand =='Vans')
                clone = shoesVans
            console.log(brand)
            let fil = clone.filter(shoe => shoe.shoeline === line)
            console.log(fil)          
            setShoes(fil)
        }
    },[brand,line])

    const [display,setDisplay] = useState(false)
  
    // const clickonimg = (a)=> {
    // setDisplay(false)
    // setId(a.id)
    // setShoe(a)
    // console.log(shoe)
    // }

    // useEffect(() => {
   
    // }, [line])
    
 

    const history = useHistory()

    // const goBack = () => {
      
    // }
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
        <section style={Style.Section}>
            <div className="left" style={Style.Left}>
                <Form > 
                    <h3>{brand}</h3>
                    <Form.Check type="radio" name='shoeline' label="All" defaultChecked onChange={()=>showAll()}/>
                    {lineofshoe.map((line)=>(
                       <Form.Check type="radio" name='shoeline' label={line} value={line} onChange = {(e)=>{setline(e.target.value) 
                                                                                                            setDisplay(true)}  }/>
                    ))}
                </Form>
                <Form> 
                    <h3>Price </h3>
                    <Form.Check type="radio" name="price" label="$50-100"></Form.Check>
                    <Form.Check type="radio" name="price" label="$100-200"></Form.Check>   
                    <Form.Check type="radio" name="price" label="$200-400"></Form.Check>
                    <Form.Check type="radio" name="price" label="$400-800"></Form.Check>
                    <Form.Check type="radio" name="price" label="$800-1200"></Form.Check>
                    <Form.Check type="radio" name="price" label="$>1200"></Form.Check>    
                </Form>
            </div>
            
            <div className="right" style={Style.Right}>
                <Shoes shoes ={shoes} line={line} display={display} ></Shoes>
            </div>
        </section>     
    )
}

export default Body
