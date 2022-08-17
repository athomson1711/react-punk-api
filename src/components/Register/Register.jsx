import React, { useContext } from 'react'
import { UserContext } from '../../provider/UserProvider/UserProvider'
import { app } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  useNavigate
, Link
} from 'react-router-dom';

import styles from './Register.module.scss'

const Register = () => {

  const auth = getAuth(app);
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userContext.setUser(userCredential.user.email)
        alert('Thanks for signing up!');
        navigate('/');
      })
      .catch((error) => {
        alert('sorry something went wrong')
      });
  }

  return (
    <div className={styles.regArea}>
    <div className={styles.reg}>
    <h1>Enter your details below to register!</h1>
      <div></div>
      <form onSubmit={handleCreateUser}>
        <input type="text" placeholder='Email...' />
        <input type="text" placeholder='Password...' />
        <button type="submit">Click to register</button>
      </form>
      <div><h2>Already got an account?</h2>
            <Link to='../login'>Log in here</Link>
                </div>
        </div>
        </div>

  )
}

export default Register
