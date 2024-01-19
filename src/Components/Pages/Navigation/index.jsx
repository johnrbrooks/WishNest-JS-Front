import './index.css'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const NavBar = () => {

    return (
        <div className="nav-container">
            <div className="logo-container">
                <img src="" alt="This is the logo" />
            </div>
            <HamburgerMenu />
        </div>
    )
}

export default NavBar;