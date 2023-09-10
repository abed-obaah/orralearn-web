import {useState} from 'react'

import logo from '../../assets/logo.svg'
import { styles } from '../../util/genral-style'

import {Link,NavLink} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import {navLinks} from "../../util/usefull-data.js";
import ResNav from "./ResNav.jsx";

const Navbar = () => {
const [open,setOpen] = useState(false)
    const [colorChangeOnScroll, setColorChangeOnscroll] = useState(false);
    const colorChangeOnScrollHandler = () => {
        if (window.scrollY >= 64) {
            setColorChangeOnscroll(true);
        } else {
            setColorChangeOnscroll(false);
        }
    };
    window.addEventListener("scroll", colorChangeOnScrollHandler);

  
  return (
      <>
         <ResNav open={open} setOpen={setOpen}/>
        <nav className={` ${colorChangeOnScroll && 'shadow-lg'}  bgOne w-full flex items-center justify-between fixed z-[900]    ${styles.paddingX} h-[100px] font-figtree  `}>
          <img src={logo} alt='orralearn logo' className='w-[164px] h-[33px]'/>
          <div className=' hidden lg:flex items-center gap-8 text-[20px]  '>
            {navLinks.map((link,i)=>(
              <NavLink
              className={({ isActive }) => (isActive ? 'text-[#5E00D0]' : `hover:text-[#5E00D0] ${styles.textTransitionHover} `)}
              to={link.path}
               key={i}
               >{link.title}</NavLink>
              ))}
          </div>
          <div className='hidden lg:flex items-center gap-[24px] text-[20px] '>
            <NavLink to='/signIn'
             className={({ isActive }) => (isActive ? styles.navLinksColor: `hover:${styles.navLinksColor} ${styles.textTransitionHover} `)}

             >Sign In </NavLink>
            <Link
            to='/signUp'
             className={`${styles.buttonStyle} w-[150px] h-[60px] `}>Sign Up</Link>
          </div>
          <RxHamburgerMenu className='flex lg:hidden text-2xl' onClick={()=>{setOpen(true)}}/>
        </nav>
      </>
  )
}

export default Navbar