import React, { Component } from 'react'; 
import { Modal,Button } from 'react-bootstrap';  

const styles = {
    button: {
        margin:"10px"
    },
    modal:{
        margin:'auto',
        marginTop:'5%'
    }
};

class ContactModal extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
	}
	render(){
        return <span>
            <Button variant="dark" onClick={this.handleShow.bind(this)} style={styles.button}>
                Contact
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose.bind(this)} style={styles.modal}>
            <Modal.Header closeButton>
                <Modal.Title>Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>Chairperson : Vijay - <a href="tel:+919791607243"> 9791607243</a></p>
                    <p>Head, OC : Toshith - <a href="tel:+919600921975">9600921975</a></p>
                    <p>Head, OC : Gayatri - <a href="tel:+919745264465">9745264465 </a></p>
                    <p>Head, Design : Hameed - <a href="tel:+916385540655">6385540655 </a></p>
                    <p>Head, Content : Surya - <a href="tel:+918939011659">8939011659 </a></p>
                    <p>Head, Marketing : Adithya - <a href="tel:+917032392007">7032392007 </a></p>
                    <p>Treasurer : Vijitendra  - <a href="tel:+918681098600">8681098600 </a></p>
                    <p>WebOps : Aananth - <a href="tel:+917397457031">7397457031 </a></p>
                </div>
            </Modal.Body>
        </Modal>
        </span>		
	}
}  
export default ContactModal;  