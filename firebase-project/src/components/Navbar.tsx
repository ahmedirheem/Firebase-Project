import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

function Navbar() {
    const [user] = useAuthState(auth)
    const logOut = async () => {
        await signOut(auth)
    }

    return (
        <div className='navbar'>
            <div className="links">
                <Link to='/'>Home</Link>
                {!user ? (<Link to='/login'>Login</Link>) : (<Link to='/create-post'>Create Post</Link>)}
            </div>

            {user && (
                <div className="user">
                    <p>{auth.currentUser?.displayName}</p>
                    <img src={auth.currentUser?.photoURL || ''} alt='' width='40' height='40' />
                    <button className='logout' onClick={logOut}>Log Out</button>
                </div>
            )}
        </div>
    )
}

export default Navbar