import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sling } from 'hamburger-react'

const HamburgerMenu = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Sling toggled={isOpen} toggle={setOpen} color="#FFFFFF"/>
            (<div className={`links-container ${isOpen ? 'active': ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/mygifts">My Gifts</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/familylogin">Log Out</Link>
            </div>
        </>
    )
}

export default HamburgerMenu;