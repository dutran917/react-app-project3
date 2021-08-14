import {Button, Modal,Form} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import DataNike from '../data/data.json'
import DataDas from '../data/dataDas.json'
import DataVans from '../data/dataVans.json'
import DataMLB from '../data/dataMlb.json'
import DataNB from '../data/dataNB.json'
import { useParams } from 'react-router-dom';
import Related from './Related';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ads from './ads';
const Detail =()=>{
    const Style={
        display: {
           paddingLeft: "100px",

        },
        name: {
            fontSize: "60px",
            textAlign: "center"
        },
        image: {
            display: "flex",
            justifyContent: "center"
        },
        details: {
            display: "flex",
            justifyContent: "space-between"
        },
        tag:{
            fontSize: "150%"
        },
        left:{
            
            paddingLeft: "5%",
            width: "30%"
        },
        right:{
            paddingLeft: "5%",
            width:"70%"
        },
        btn:{
            backgroundColor: "#21759B",
            backgroundImage: "linear-gradient(to bottom, #2A95C5, #21759B)",
            boxShadow: "0 1px 0 rgba(120, 200, 230, 0.5) inset",
            borderColor: "#21759B #21759B #1E6A8D",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "3px 3px 3px 3px",
            fontSize: "16px",
            padding: "10px 24px"
        }

    }
    const [shoes,setShoes]  = useState([]) 
    const [show, setShow] = useState(false);
    const {shoe} = useParams()
    console.log(shoe)
    let Data = DataNike.concat(DataDas,DataVans,DataMLB,DataNB)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let obj = Data.find(elm => elm.name == shoe)
    console.log(obj)
    Data.map((shoe)=> {
            if(shoe.shoeline == obj.shoeline)
                shoes.push(shoe)
        })
    const url = window.location.href
    console.log(url)
    // switch(obj.brand)
    //     {
    //         case 'Nike':
    //          {   setShoes(DataNike)
    //             break}
    //         case 'Adidas':
    //          {   setShoes(DataDas)
    //             break}
    //         default:
    //           break
    //     }


    return(
        <div >
            <h1 style = {Style.name}> {obj.name}</h1>
            <div style={Style.image}>
                <img src={obj.source} width="80%"></img>
            </div>
            <div className="order">
                <div className="order-tag">
                    <h2>Order</h2>
                </div>
            </div>
            <div style={Style.details}>
                <div style={Style.left}>
                    <p style={Style.tag}> RETAIL PRICE : {obj.price} $ </p>
                    <p style={Style.tag}> COLORWAY : {obj.color}  </p>
                    <p style={Style.tag}> STYLE : {obj.style} </p>
                    <p style={Style.tag}> RELEASE DATE : {obj.date} </p>  
                    <button style={Style.btn} onClick = {handleShow} > Đặt mua </button>
                </div>
                <div style={Style.right}>
                    <p>{obj.detail}</p>
                </div>              
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{obj.name}</Modal.Title>
                    <AiFillCloseCircle size='30px' onClick={handleClose}></AiFillCloseCircle>
                </Modal.Header>
                <Modal.Body>
                    <Form> 
                        <p>Size</p>
                        <Form.Check defaultChecked type="radio" inline name='size' label='40'/>
                        <Form.Check type="radio" inline name='size' label='40.5'/>
                        <Form.Check type="radio" inline name='size' label='41'/>
                        <Form.Check type="radio" inline name='size' label='41.5'/>
                        <Form.Check type="radio" inline name='size' label='42'/>
                        <Form.Check type="radio" inline name='size' label='42.5'/>
                        <Form.Check type="radio" inline name='size' label='43'/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add to cart
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
    
}


export default Detail