import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Scratch() {
    return (
        <>
        <div className='about'>
            
            <div className=''>
                <Link to='/'>
                <i className="fas fa-times-circle closeIcon"></i>
                </Link>
            </div>
      
            <Container className='CoursBoxContainer'>
                <div >
                    <h2 className='abCourseTitle'>Visual programming on Scratch</h2>
                </div>
                <Row  className='abCourseUl'>
                        <Col md={7}>
                            <div className='CourseDescrAll'>
                                <div className='descriptionTitle'>
                                    About the course
                                </div>
                                <p className='description-title-p'>
                                    Visual programming develops children's imagination and teaches them to set tasks correctly and look for opportunities to solve them in a playful way.
                                    In addition to working at the computer, children draw, count, invent and design in groups, make presentations.
                                    At the end of the course, children create their own project — a game, a cartoon or an interactive book.
                                </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset: 1}}>
                           
                            <Col xs={12} className='abNum'>
                                12-14 years old
                            </Col>
                            <Col xs={12} className='abNum'>
                                8-10 kids in each group
                            </Col>
                            <Col xs={12} className='abNum'>
                                1 class per week
                            </Col>
   
                        </Col>
                            
                    </Row>
                <div>
                    <Row>
                        <Col xs={6} mb={3} md={4}>

                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    think logically
                                </div>

                                </div>
                            </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    programming in Scratch
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    create cartoons and online games
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    work in team
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    think over the algorithm of creating their own projects
                                </div>

                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                            <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    apply the basic concepts of programming and algorithmics
                                </div>

                            </div>
                        </Col>
                    </Row>

                </div>

            </Container>

    </div>
            
        </>
    )
}

export default Scratch