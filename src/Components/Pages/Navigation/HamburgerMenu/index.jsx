import { Link } from 'react-router-dom'
import './index.css'

const HamburgerMenu = ({ isOpen }) => {

    const handleClick = () => {
        setOpen(false);
    }

    return (
        <>
            <div className={`ham-modal-container ${isOpen ? 'active' : ''}`}>
                <div className='links-container'>
                        <Link to="/" onClick={handleClick}>Home</Link>
                        <Link to="/about" onClick={handleClick}>About</Link>
                        <Link to="/dashboard" onClick={handleClick}>Dashboard</Link>
                        <Link to="/mygifts" onClick={handleClick}>My Gifts</Link>
                        <Link to="/settings" onClick={handleClick}>Settings</Link>
                        <Link to="/familylogin" onClick={handleClick}>Log Out</Link>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu;