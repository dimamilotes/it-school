import React, {useState} from 'react'
import FreeLesson from './FreeLesson';

function Nav() {
    const [modalActive, setModalActive] = useState (false)
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)

        var x = document.getElementById("myTopnav");
        if (x.className === "navResponse") {
            x.className += " responsive";
        } else {
            x.className = "navResponse";
        }
    }

    return (
        <>

            <div className='navBox'>
                <div className='logoBox'>
                    <i className="fab fa-digital-ocean logo"></i>
                    <div className='logoText'>Simik</div>
                </div>
                <div className='navResponse' id='myTopnav' onClick={handleClick}>
                    <ul>
                        <li><a href="#cours">Courses</a></li>
                        <li><a href="#methods">Our methods</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                <div className='btnHead'> 
                <button className='smallBtn navBtn' onClick={() => setModalActive(true)}>Get free lesson</button></div>   
                </div>
                <div className='burger' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
            <FreeLesson active={modalActive} setActive={setModalActive}/>

        </>
    )
}

export default Nav