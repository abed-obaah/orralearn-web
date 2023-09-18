
import './App.css'
import { useStateContext } from './context/contextProvider'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './layout/navbar/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './layout/footer/Footer'
import Notfound from './pages/Notfound'
import AuthLayout from './layout/auth-layout/AuthLayout'

import { Routes,Route ,useLocation,Navigate} from 'react-router-dom'
import Dashboard from "./pages/auth-section/Dashboard.jsx";
import Courses from "./pages/auth-section/Courses.jsx";
import CodingPlayground from "./pages/auth-section/CodingPlayground.jsx";
import Projects from './pages/auth-section/Projects'
import FrontEndEditor from './components/FrontEndEditor'


function App() {
  const {isLoggedIn} = useStateContext()
  const location = useLocation()

  let content = (
    <>
     {location.pathname !== '/notfound' && location.pathname !== '/signUp' && location.pathname !== '/signIn' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='faqs' element={<FAQs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="notfound" element={<Notfound />} />
        <Route path='*'  element={<Navigate to="/notfound" replace />}/>
      </Routes>
      {location.pathname !== '/notfound' && location.pathname !== '/signUp' && location.pathname !== '/signIn' &&<Footer/>}
    </>
  )
  
  if(isLoggedIn){
      content =(
          <Routes>
              <Route to={'/'} element={<AuthLayout/>}>
                  <Route index element={<Dashboard/>} />
                  <Route path={'courses'} element={<Courses/>}/>
                  <Route path={'codingPlayGround'} element={<CodingPlayground/>} />
                  <Route path={'projects'} element={<Projects/>} />
              </Route>
              <Route path={'editor'} element={<FrontEndEditor/>} />
              <Route path="notfound" element={<Notfound />} />
              <Route path='*'  element={<Navigate to="/notfound" replace />}/>
          </Routes>
      )
  // content =(<AuthLayout/>)
  }
  return (
    <main className={'max-w-screen'}>
      {content}
    </main>
   
  )
}

export default App
