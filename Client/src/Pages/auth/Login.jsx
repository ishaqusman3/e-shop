import React, { useState } from 'react'
import styles from './auth.module.scss'
import login from '../../assets/undraw_Login_re_4vu2.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { Card } from '../../Components/card/Card'
import { toast } from 'react-toastify'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../Components/loader/Loader'

export default function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const loginUser = (e)=>{
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      toast.success('Logged in Successful!!')
      setIsLoading(false)
      navigate('/')
    })
    .catch((error) => {
      toast.error(error.message)
      setIsLoading(false)
    });
  }
  const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    toast.success('Signed in Successful!!')
    navigate('/')
  }).catch((error) => {
    toast.error(error.message)
  });
  }
  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>

       <div className={styles.img}>
        <img src={login} alt="Login" width={400}/>
       </div>
      <Card>
       <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input type="text" placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <button className='--btn --btn-primary --btn-block' type='submit'>Login</button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password?</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className='--btn --btn-danger --btn-block'onClick={signInWithGoogle}><FaGoogle />  Sign in with google</button>
          <span className={styles.register}>
            <p>Dont have an account?</p>
            <Link to="/register">Register</Link>
          </span>
       </div>
      </Card>
    </section>
    </>
  )
}
