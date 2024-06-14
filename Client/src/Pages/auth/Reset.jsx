import styles from './auth.module.scss'
import reset from '../../assets/undraw_Forgot_password_re_hxwm.png'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../../Components/card/Card'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'
import Loader from '../../Components/loader/Loader'

export default function Reset() {
  const [email , setEmail] = useState('')
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate()

  const resetPassword = (e)=>{
    e.preventDefault()
    setIsLoading(true)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success('Check your email for a reset Link')
      setIsLoading(false)
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

       <div className={styles.img}>
        <img src={reset} alt="Reset" width={400}/>
       </div>
      <Card>
       <div className={styles.form}>
          <h2>Reset Pasword</h2>
          <form onSubmit={resetPassword}>
            <input type="text" placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={styles.links}>
              <p>
              <Link to="/login">- Login</Link>
              </p>
              <p>
              <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
       </div>
      </Card>
    </section>
    </>
  )
}
