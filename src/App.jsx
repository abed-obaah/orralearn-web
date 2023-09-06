
import './App.css'
import Home from './pages/Home'

import { Routes,Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './layout/navbar/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './layout/footer/Footer'



function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
