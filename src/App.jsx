
import './App.css'
import Home from './pages/Home'

import { Routes,Route ,useLocation,Navigate} from 'react-router-dom'
import Pricing from './pages/Pricing'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './layout/navbar/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Notfound from './pages/Notfound'



function App() {
  const location = useLocation()
  return (
    <main>
      {location.pathname !=='/notfound' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="notfound" element={<Notfound />} />
        <Route path='*'element={<Navigate to="/notfound" replace />}/>
      </Routes>
    </main>
  )
}

export default App
