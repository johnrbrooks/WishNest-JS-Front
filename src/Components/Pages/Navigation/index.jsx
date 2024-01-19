import './index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Sling } from 'hamburger-react'
import { FaGift } from "react-icons/fa6";


const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="nav-container">
                <div className="logo-container">
                    <FaGift color="rgb(146, 146, 255)" fontSize="2.5rem"/>
                </div>
                <Sling toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
            </div>
            {isOpen && <HamburgerMenu isOpen={isOpen}/>}
        </>
    )
}

export default NavBar;