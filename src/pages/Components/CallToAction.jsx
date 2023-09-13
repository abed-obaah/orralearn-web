import logo from '../../assets/logo.svg'
import { styles } from '../../util/genral-style'

import {Link,NavLink} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'


const links =[
    {title:"Home",path:"/"},
    {title:"Pricing",path:"/pricing"},
    {title:"FAQs",path:"/faqs"},
    {title:"About Us",path:"/about"},
    {title:"Contact Us",path:"/contact"},
  ]

export default function CallToAction() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-normal text-white sm:text-5xl ">
              Get Started With 
              <br />
              Orralearn Today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Create an account in minutes and start your learning journey today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
        to='/signUp'
         className={`${styles.buttonStyle} w-[150px] h-[60px] `}>Sign Up</Link>
             
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }
  