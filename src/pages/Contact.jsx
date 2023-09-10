import {styles} from "../util/genral-style.js";
import contact from '../assets/contact.png'
import CallToAction from "./Components/CallToAction.jsx";
import {BiRightArrowAlt} from  'react-icons/bi'


const Contact = () => {
  return (
    <div className={` generalNavPadding bgOne ${styles.paddingX} font-openSans ${styles.homePageGenPadding} font-openSans flex flex-col gap-y-20`}>
        <div className={'grid grid-cols-1 md:grid-cols-2 mb-20'}>
      <div className={'w-full  flex flex-col gap-y-4 '}>
        <h6 className={`${styles.homeHeadingStyle} `}>CONTACT US</h6>
        <p className={' text-4xl sm:text-5xl sm:leading-[61px] lg:text-6xl lg:leading-[61px] font-bold'}>We’d love to hear <br/>from you!.</p>
        <p className={'text-[#555] text-lg'}>Got a question? contact us  to learn more.</p>
          <div className={'flex '}>
              <img src={contact} alt={'contact'} className={'w-full md:w-[300px] h-72 object-contain'}/>
          </div>

      </div>
      <form className={'w-full bg-white rounded-lg p-8 flex flex-col gap-8'}>
          <div className={'w-full flex flex-col md:flex-row gap-5'}>
          <label htmlFor={'name'} className={'md:w-1/2 flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Name</p>
              <input id={'name'} name={'name'} className={'inputStyle'} placeholder={'Enter name'}/>
          </label>
              <label htmlFor={'email'} className={'md:w-1/2 flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Email</p>
              <input id={'email'} name={'email'} className={'inputStyle'} placeholder={'Enter email'}/>
          </label>

          </div>
          <label htmlFor={''} className={'flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Message</p>
              <textarea id={'message'} name={'message'} className={'inputStyle h-40'} placeholder={'Type your message here...'}/>
          </label>
          <div className={`${styles.buttonStyle} w-[210px] flex items-center gap-2`}>
              <span>Send message</span>
              <BiRightArrowAlt/>
          </div>
      </form>
        </div>

        <CallToAction/>
    </div>
  )
}

export default Contact