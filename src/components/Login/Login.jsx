import React, { useContext } from 'react'
import { UserContext } from '../../provider/UserProvider/UserProvider'
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
useNavigate,Link
} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const userContext = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signInWithEmailAndPassword(getAuth(app), email, password).then(response => {
            // console.log(response.user.email);
            userContext.setUser(response.user.email)
            alert('Welcome back to our app');
            navigate('/')
            
        }).catch(e => {
            alert('sorry something went wrong')
        })
    }

    return (
        <div>
            <h1>Enter your details to login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email...' />
            <input type="text" placeholder='Password...' />
            <button type="submit">Sign In</button>
        </form>
        <h2>Not got an account?</h2>
        <Link to='../registration'>Sign up here</Link>
    </div>

    )
}

export default Login