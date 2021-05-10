import React from 'react';
import { CardImg,  CardBody, CardTitle,  Row, Col, Container } from 'reactstrap';
import html from '../html.png'
import css from '../css.png'
import javascript from '../javascript.png'
import react from '../react.png'
import bootstrap from '../bootstrap.png'
import regex from '../regex.png'


const Competences = () =>{

   
    const compét = [
        {
            title : "HTML",
            img : html, 
        },

        {
            title : "CSS",
            img : css, 
        },
        {
            title : "JAVASCRIPT",
            img : javascript, 
        },
        {
            title : "REACT",
            img : react, 
        },
        {
            title : "BOOTSTRAP",
            img : bootstrap, 
        },
        {
            title : "REGEX",
            img : regex, 
        }
        
    
    ]
    const card = (Card) =>{
        return(
            <div>

                
                <div>
                <Container>

                    <Row className="main-container ">
                        <Col sm="3" className="class-col">
                    <CardBody>
                        <CardTitle className="ti" tag="h5">{Card.title}</CardTitle>
                        <CardImg className = "cardimg text-center"  src=  {Card.img}  />
                    </CardBody>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>


        )

        
    }
    return <div className="gride" >{compét.map(card)}</div>;
}




export default Competences;