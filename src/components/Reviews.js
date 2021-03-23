
import React from 'react'
import {Container, Row} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// 
import 'swiper/swiper.scss';

function Reviews() {

    return (
        <>
            <Container fluid className='coursesBlock'>
            
                <Container>
                    <Row className='headcomp'>

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
                                  slidesPerView: 1,
                                },
                                1140: {
                                    // width: 1140,
                                    slidesPerView: 2,
                                  },
 
                              }}
                            autoplay={{ delay: 3000 }}

                            >
                            <SwiperSlide>
                            
                            <div className='review'>
                                <div className='review-text'>
                                My son James is 13 years old. He recently became interested in programming, so I gave him a basic programming course for his birthday. James is delighted with the lessons and his teacher! He is looking forward to every lesson, and even at home he spends a lot of time working on his own projects
                                </div>

                                <div className='reviewPerson'>
                                    <div className='reviewPersonAvatar'><img alt='client Nicolas' src='./ava1.jpg'></img></div>
                                    <div className='reviewPersonInfo'>
                                        <div className='reviewPersonName'>Nicolas</div>
                                        <div className='reviewPersonJob'>Worker</div>
                                    </div>
                                </div>
                            </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            
                            <div className='review'>
                                <div className='review-text'>
                                After the trial class, my daughter didn’t want to go home - she liked the class so much! I’m sure the teachers will strengthen her interest in programming and help her achieve academic success. Thanks SIMIK! 
                                </div>

                                <div className='reviewPerson'>
                                    <div className='reviewPersonAvatar'><img alt='client Lily' src='./ava3.jpg'></img></div>
                                    <div className='reviewPersonInfo'>
                                        <div className='reviewPersonName'>Lily</div>
                                        <div className='reviewPersonJob'>Nurse</div>
                                    </div>
                                </div>
                            </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                                
                            <div className='review'>
                                <div className='review-text'>
                                My son is a student of the Python course, he really likes it. So his choice of summer holidays was obvious, and I signed him up for the Summer Coding Camp. The son had a great time, he returned home with a lot of impressions and new skills, made new friends. Our family is very happy! 
                                </div>

                                <div className='reviewPerson'>
                                    <div className='reviewPersonAvatar'><img alt='client Jenny' src='./ava2.jpg'></img></div>
                                    <div className='reviewPersonInfo'>
                                        <div className='reviewPersonName'>Jenny</div>
                                        <div className='reviewPersonJob'>Manager</div>
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

export default Reviews