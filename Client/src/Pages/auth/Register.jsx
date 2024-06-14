import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../../Components/card/Card'
import styles from './auth.module.scss'
import signup from '../../assets/undraw_Sign_up_n6im.png'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../Components/loader/Loader'

export default function Register() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [cPassword , setCPassword] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e)=>{
    e.preventDefault()
    if (password !== cPassword){
      toast.error("Passwords do not match")
    }
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsLoading(false)
      toast.success('Registration Successful!')
      navigate('/login')
    })
    .catch((error) => {
      toast.error(error.message)
      setIsLoading(false)
    });
  }
  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <Card>
       <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="text" placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input type="password" placeholder='Confirm password' required value={cPassword} onChange={(e) => {setCPassword(e.target.value)}} />
            <button className='--btn --btn-primary --btn-block' type='submit'>Register</button>
          </form>
          <span className={styles.register}>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
       </div>
      </Card>
      <div className={styles.img}>
        <img src={signup} alt="Register" width={400}/>
      </div>
    </section>
    </>
  )
}
