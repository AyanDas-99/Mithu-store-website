import { provider, auth } from '../../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './signin.css'
import googleLogo from '../../assets/images/google-logo.png';

export const Login = () => {

    // navigator
    const navigator = useNavigate();

    const googleSignIn = async () => {
        await signInWithPopup(auth, provider);
        console.log(auth.currentUser)
        navigator('/')
    }

    const eventSignOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="Login-form">
            <div className='side'>
                <h1>LOGIN</h1>
            </div>
            <div className='btns'>
                <div className={'loginBtn logBtn'} onClick={googleSignIn}><img src={googleLogo} alt="google logo" />Sign In With Google</div>
                <div className='logoutBtn logBtn' onClick={eventSignOut}>Sign Out</div>
            </div>
        </div>
    )
}