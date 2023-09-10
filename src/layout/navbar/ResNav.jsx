import {navLinks} from "../../util/usefull-data.js";
import {styles} from "../../util/genral-style.js";
import {NavLink} from "react-router-dom";
import {AiOutlineCloseCircle} from 'react-icons/ai'
// eslint-disable-next-line react/prop-types
const ResNav = ({open,setOpen}) => {
    return (
        <nav className={` bgOne  fixed w-full bg-white z-[999]  ${styles.paddingX} flex flex-col py-10 gap-14 lg:hidden transition-all duration-500 ease-in h-screen  ${open ? ' top-0':'top-[-100vh] '}`} >
            <div className={'w-full flex  justify-end'}>

              <AiOutlineCloseCircle onClick={()=>{setOpen(false)}} className={'text-4xl'}/>
            </div>
            <div className={`w-full flex flex-col gap-4 items-center justify-center`}>
                {navLinks.map(({title,path},i)=>(
                    <NavLink
                        to={path}
                        key={i}
                        className={({ isActive }) => (isActive ? styles.navLinksColor: `hover:${styles.navLinksColor} ${styles.textTransitionHover} `)}
                    >{title}</NavLink>
                ))}
                <NavLink to={'/signUp'} className={``}>Sign In</NavLink>
                <NavLink to={'/signUp'} className={`w-32 py-[10px] px-[16px] bg-[#5E00D0] rounded-[8px] shrink-0 text-white text-[20px] flex items-center justify-center transition ease-out  duration-300`}>Sign Up</NavLink>
            </div>
        </nav>
    );
};

export default ResNav;