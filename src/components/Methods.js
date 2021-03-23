import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';

function Methods() {
    return (
        <>
            <Container className='method' id='methods'>
            
               
            <Row className='methodBox'>
                <Col xs={12} lg={8}>
                    <div data-aos="fade-right" className='methodText'>
                        <h2 className='head-title-h2'>Special training method </h2>
                        <p className='description-title-p'>Our courses are developed by an international team of methodologists, including Derek Brin, a world-renowned teacher of programming. His books on creative programming have been translated into 7 languages.</p>
                        
                    </div>
                </Col>
                <Col xs={12} lg={4} className='method'>
                    <div  data-aos="fade-left" className='methodCont'>
                        <div className='methodBoxIcon'>
                        <i className="fas fa-bullseye"></i>
                        </div>
                        <div className='methodBoxHeader'>
                        Development of algorithmic thinking and logic
                        </div>
                        <div className='methodBoxText'>
                        These versatile skills allow the child to learn any school subject and help to achieve success in any profession.
                        </div>
                    </div>
                </Col>
                
            </Row>
            <Row data-aos="fade-up">
                <Col xs={12} lg={4} className='method'>
                    <div className='methodCont'>
                        <div className='methodBoxIcon'>
                        <i className="fab fa-discourse"></i>
                        </div>
                        <div className='methodBoxHeader'>
                        Development of project thinking
                        </div>
                        <div className='methodBoxText'>
                        Creating projects teaches the child to see how the gained knowledge can be applied to the realization of his ideas.
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={4} className='method'>
                    <div className='methodCont'>
                        <div className='methodBoxIcon'>
                        <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className='methodBoxHeader'>
                        Learning the basics of programming
                        </div>
                        <div className='methodBoxText'>
                        Programming is the most sought-after profession of the 21st century. Even if the child chooses another career path in the future, any employer will appreciate the skills in this area.
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={4} className='method'>
                    <div className='methodCont'>
                        <div className='methodBoxIcon'>
                        <i className="fas fa-brain"></i>
                        </div>
                        <div className='methodBoxHeader'>
                        Development of curiosity
                        </div>
                        <div className='methodBoxText'>
                        Each lesson in SIMIK is a fascinating story that develops curiosity and maintains interest in learning.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Methods