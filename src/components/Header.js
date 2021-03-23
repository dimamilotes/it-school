import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import Nav from './Nav.js';
import FreeLesson from './FreeLesson';
function Header() {
    const [modalActive, setModalActive] = useState (false)
   

    return (
        <>
            <Container fluid className='head'>
                <Nav/>
                <FreeLesson active={modalActive} setActive={setModalActive}/>
                
                <div className='headcomp'>

                    <div className='headerBlock'>
                        <Container className='headerContainer'>
                            <div className='he-title'>
                                <h1>SIMIK starts new student enrollment for programming courses</h1>
                            </div>
                            <div className='he-description'>
                            <p>for kids aged 7 to 14 years</p>
                            </div>
                            <div className='he-button'>
                            <button className='bigBtn' onClick={() => setModalActive(true)}>Get free lesson</button>
                            </div>
                        </Container>
                    </div>

                </div>
                
            </Container>
            
        </>
    )
}

export default Header