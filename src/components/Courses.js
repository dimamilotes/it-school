import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
// import Swiper styles

function Courses() {
    SwiperCore.use([Autoplay])
    


    return (
        <>
            <Container fluid className='coursesBlock'>

                <Container id='cours'>
                    <h2 data-aos="fade-right" className='courses-title-h2 h2pad'>Our courses</h2>
                    <Row className='coursesRow'>
 
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={3}
                            breakpoints={{
                                
                                0: {
                                    // width: 340,
                                    slidesPerView: 1,
                                  },
                                768: {
                                //   width: 768,
                                  slidesPerView: 2,
                                },
                                1140: {
                                    // width: 1140,
                                    slidesPerView: 3,
                                  },

                              }}
                            autoplay={{ delay: 3000 }}

                            >
                            <SwiperSlide>
                            
                            <div className='coureseCard'>
                                <div className='coureseCardImg coureseBasic'>

                                </div>
                                <div className='coureseCardContent'>
                                    <div className='CardHeader'>
                                        Basics of programming
                                    </div>

                                    <div className='CardText'>
                                    Creating their own cartoons and computer games, children improve their logical and algorithmic thinking. It helps them towards their studies
                                    </div>

                                    <div className='CardYears'>7 - 8 years</div>

                                    <div className='CardButton'>
                                        <Link to='/basic'>
                                            <Button className='bigBtn'>Start course</Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                           
                            </SwiperSlide>
                            <SwiperSlide>
                            
                            <div className='coureseCard'>
                                <div className='coureseCardImg couresePython'>

                                </div>
                                <div className='coureseCardContent'>
                                    <div className='CardHeader'>
                                    Python
                                    </div>
                                    <div className='CardText'>
                                    Learning Python, children will work out the basic concepts of algorithmics and programming. They will immerse themselves in the culture and specifics of the IT world
                                    </div>
                                    <div className='CardYears'>12 - 14 years</div>
                                    <div className='CardButton'>
                                        <Link to='/python'>
                                            <Button  className='bigBtn'>Start course</Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                                
                                <div className='coureseCard'>
                                <div className='coureseCardImg coureseScratch'>

                                </div>
                                <div className='coureseCardContent'>
                                    <div className='CardHeader'>
                                    Scratch programming
                                    </div>
                                    <div className='CardText'>
                                    By creating their own cartoons and computer games. A course in which your child will not just play games, but know how to develop them from scratch.
                                    </div>
                                    <div className='CardYears'>10 - 11 years</div>

                                    <div className='CardButton'>
                                        <Link to='/scratch'>
                                            <Button  className='bigBtn'>Start course</Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                                
                                <div className='coureseCard'>
                                <div className='coureseCardImg coureseSummer'>

                                </div>
                                <div className='coureseCardContent'>
                                    <div className='CardHeader'>
                                    Summer Coding Camp
                                    </div>
                                    <div className='CardText'>
                                    For two weeks in the summer we will teach children how to create websites and 3D-models, shoot video for a blog and create virtual worlds
                                    </div>
                                    <div className='CardYears'>10 - 11 years</div>
                                    <div className='CardButton'>
                                        <Link to='/summercamp'>
                                                <Button  className='bigBtn'>Start course</Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                           
                            </SwiperSlide>

                            
                        </Swiper>
                        
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Courses