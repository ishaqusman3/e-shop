import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import {Home, Contact, Cart, Login, Register, Reset} from './Pages'
import {Header, Footer} from './Components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Header />
        <Routes>
          <Route path ='/' element = {<Home />}></Route>
          <Route path ='/contact' element = {<Contact />}></Route>
          <Route path ='/cart' element = {<Cart />}></Route>
          <Route path ='/login' element = {<Login />}></Route>
          <Route path ='/register' element = {<Register />}></Route>
          <Route path ='/reset' element = {<Reset />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
