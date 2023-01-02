import { Link } from 'react-router-dom'
import { Orders } from '../pages/orders'

export const Nav = () => {
    return (
        <div>
            <div className="main-logo"><Link to={'/'}><img alt="mithu store logo" /></Link></div>
            <nav>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/login'}>Login</Link>
                </ul>
            </nav>
        </div>
    )
}