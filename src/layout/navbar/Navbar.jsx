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
    <div className={`flex justify-between  ${styles.paddingX}`}>
      <img src={logo} alt='orralearn logo'/>
      <div className=' flex items-center gap-4'>
        {links.map((link,i)=>(
          <Link to={link.path} key={i}>{link.title}</Link>
          ))}
      </div>
      <div className='flex items-center gap-[24px]'>
        <Link to='/signUp'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar