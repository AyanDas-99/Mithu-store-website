import { Link } from 'react-router-dom';
import logo from '../assets/images/mithuStoreLogo.png';
import search from '../assets/images/search-icon.png';
import '../assets/styles/navbar.css'

export const Nav = () => {
    return (
        <div className='header'>
            <Link to={'/'}><div className="main-logo"><img src={logo} alt="mithu store logo" /><span>MITHU STORE</span></div></Link>
            <div className='search-bar'>
                <input type={"text"} />
                <input type={"image"} src={search} alt="search button" />
            </div>
            <nav>
                <ul>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/login'}>Login</Link>
                </ul>
            </nav>
        </div>
    )
}