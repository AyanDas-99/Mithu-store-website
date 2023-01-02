import { provider, auth } from '../../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

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
            <button onClick={googleSignIn}>Sign In</button>
            <button onClick={eventSignOut}>Sign Out</button>
        </div>
    )
}