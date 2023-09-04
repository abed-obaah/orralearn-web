import logo from '../../assets/logo.svg'
import { styles } from '../../util/genral-style'

import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {

  const links =[
    {title:"Home",path:"/"},
    {title:"Pricing",path:"/pricing"},
    {title:"FAQs",path:"/faqs"},
    {title:"About Us",path:"/about"},
    {title:"Contact Us",path:"/contact"},
  ]
  
  return (
    <nav className={`flex items-center justify-between  ${styles.paddingX} h-[100px] font-figtree`}>
      <img src={logo} alt='orralearn logo' className='w-[164px] h-[33px]'/>
      <div className=' flex items-center gap-4 text-[20px]'>
        {links.map((link,i)=>(
          <NavLink
          className={({ isActive }) => (isActive ? 'text-[#5E00D0]' : `hover:text-[#5E00D0] ${styles.textTransitionHover} `)}
          to={link.path}
           key={i}
           >{link.title}</NavLink>
          ))}
      </div>
      <div className='flex items-center gap-[24px] text-[20px]'>
        <NavLink to='/signIn'
         className={({ isActive }) => (isActive ? 'text-[#5E00D0]' : `hover:text-[#5E00D0] ${styles.textTransitionHover} `)}
      
         >Sign In </NavLink>
        <Link 
        to='/signUp'
         className={`${styles.buttonStyle} w-[150px] h-[60px] `}>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar