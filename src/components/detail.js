import {Button, Modal,Form} from 'react-bootstrap'
import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
const Detail =({shoe})=>{
    const Style={
        display: {
           paddingLeft: "150px",

        },
        h3:{
            fontFamily: 'Roboto'
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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div style={Style.display}>
            <img src={shoe.source} width={600}></img>
            <div>
                <h3 style={Style.h3}> RETAIL PRICE : {shoe.price} $ </h3>
                <h3 style={Style.h3}> COLORWAY: {shoe.color}  </h3>
                <h3 style={Style.h3}> STYLE: {shoe.style} </h3>
                <h3 style={Style.h3}> RELEASE DATE: {shoe.date} </h3>  
                <button style={Style.btn} onClick = {handleShow} > Đặt mua </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{shoe.name}</Modal.Title>
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