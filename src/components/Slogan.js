import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';

function Slogan() {
    return (
        <>
            <Container className='slogan'>
            
               
                    <Row className='sloganBox'>
                        <Col xs={12} lg={6}>
                            <div  data-aos="fade-right" className='sloganText'>
                                <h2 className='head-title-h2'>Simik doesn't just teach children how<span className='sloganTextspan'>to program</span></h2>
                                <p className='description-title-p'>Our goal is to prepare the child for any task, to teach him to apply this knowledge in practice, to interest him in his studies.</p>
                                
                            </div>
                        </Col>
                        <Col  xs={12} lg={6} data-aos="fade-left" className='sloganImg'>
                            <img alt='our methods' src='./slogan-img.svg'></img>
                        </Col>
                        
                    </Row>
                </Container>
           
        </>
    )
}

export default Slogan