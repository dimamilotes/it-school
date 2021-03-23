import React from 'react'
import {Form } from 'react-bootstrap';

function FreeLesson(props) {
    const newLesson = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value
        const phone = e.target.elements.phone.value
        const city = e.target.elements.city.value
        const email = e.target.elements.email.value


        if (!email || !city  || !name || !phone ) {alert ('Please fill out the form')}
        else {console.log (email, city, name, phone)}
        
    }
    return (
        <div className={props.active ? 'popup' : 'popup hide'} onClick ={() => props.setActive(false)}>
            <div className='btnFormBox' onClick={e => e.stopPropagation()}>
                <div className='formFree'>Free trial lesson</div>
                <div className='formClose' onClick={() => props.setActive(false)}>
                    <i className='fas fa-times'/>
                </div>
                <Form onSubmit={newLesson}>
                <Form.Control type="text" name='name' placeholder='Your name'/>
                <Form.Control type="tel" type='tel' name='phone' placeholder='Your phone' />
                <Form.Control type="text" name='city' placeholder='Your city'/>
                <Form.Control type="email" name='email' placeholder='Your email'/>
                <button className='smallBtn navBtn' value="freeLesson"  type="submit">Send information</button>
                </Form>
            </div>
        </div>
    )
}

export default FreeLesson