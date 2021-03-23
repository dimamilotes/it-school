import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';

function Num() {
    
    return (
        <>
            <Container fluid className='number'>
                <Container>
               
                            <div data-aos="fade-right" className='number-title'>
                                <h2 className='number-title-h2 h2pad'>Join with us
                                <span className='sloganTextspan'>Work Together</span></h2>
                                
                            </div>
                    <Row data-aos="fade-left">
                        
                        <Col xs={6} lg={4} className='countBox'>
                            <div className='count'>
                                17 +
                            </div>
                            <div className='countText'>
                                Years
                            </div>
                        </Col >
                        <Col xs={6} lg={4} className='countBox'>
                            <div className='count'>
                                200 +
                            </div>
                            <div className='countText'>
                                Clients
                            </div>
                        </Col>
                        <Col xs={6} lg={4} className='countBox animRight'>
                            <div className='count'>
                                27 +
                            </div>
                            <div className='countText'>
                                Products
                            </div>
                        </Col>
                        <Col xs={6} lg={4} className='countBox'>
                            <div className='count'>
                                100 +
                            </div>
                            <div className='countText'>
                                Employees
                            </div>
                        </Col>
                        <Col xs={6} lg={4} className='countBox'>
                            <div className='count'>
                                22 +
                            </div>
                            <div className='countText'>
                                Services
                            </div>
                        </Col>
                        <Col xs={6} lg={4} className='countBox'>
                            <div className='count'>
                                11 +
                            </div>
                            <div className='countText'>
                                Industries
                            </div>
                        </Col>
                    </Row>
                </Container>    
            </Container>
           
        </>
    )

}

export default Num