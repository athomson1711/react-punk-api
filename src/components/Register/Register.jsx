import React, { useContext } from 'react'
import { UserContext } from '../../provider/UserProvider/UserProvider'
import { app } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  useNavigate
} from 'react-router-dom';

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
    <>
      <div>REGISTRATION!</div>
      <form onSubmit={handleCreateUser}>
        <input type="text" placeholder='Email...' />
        <input type="text" placeholder='Password...' />
        <button type="submit">Click to register</button>
      </form>

    </>

  )
}

export default Register
