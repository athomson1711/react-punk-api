import React, { useContext } from 'react'
import { UserContext } from '../../provider/UserProvider/UserProvider'
import { app } from '../../firebase'
import { signOut, getAuth} from 'firebase/auth';
import {
useNavigate
} from 'react-router-dom';

const SignOut = () => {

    const navigate = useNavigate()
    const userContext = useContext(UserContext)

    const handleSignout = (e) => {
        const auth =getAuth();
        e.preventDefault();
        signOut(auth).then(() => {
            userContext.setUser("")
            alert('Goodbye!');
            navigate('login')
        }).catch(e => {
            alert('sorry something went wrong, please try again')
        })
    }

    return (

        <button onClick={handleSignout}>Sign Out</button> 

    )
}

export default SignOut