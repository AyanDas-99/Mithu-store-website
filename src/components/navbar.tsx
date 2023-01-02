import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/mithuStoreLogo.png';
import search from '../assets/images/search-icon.png';
import '../assets/styles/navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import userLogo from '../assets/images/user.png';
import { signOut } from 'firebase/auth'
import { useState } from 'react';

// interface for the User component's prop
interface UserInterface {
    displayName: string | null;
    photoURL: string | null;
}


export const Nav = () => {

    // login user details using useAuthState
    const [user] = useAuthState(auth)
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
                    {user ? <User displayName={user?.displayName} photoURL={user?.photoURL} /> : <Link to={'/login'}>Login</Link>}

                </ul>
            </nav>
        </div>
    )
}

const User = (user: UserInterface) => {

    const [profileVisible, setProfileVisible] = useState(false);

    const navigate = useNavigate();
    return (
        <div className='user-details'>
            <div className='profile-pic' onClick={() => setProfileVisible(!profileVisible)}>
                <img src={user.photoURL || userLogo} alt='user profile' />
            </div>
            {profileVisible &&
                <div className='profile'>
                    <h3>{user.displayName}</h3>
                    <button onClick={() => navigate('/login')}>Switch Account</button>
                    <button onClick={() => signOut(auth)}>Logout</button>
                </div>
            }
        </div>
    )
}
