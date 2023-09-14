import { Disclosure } from '@headlessui/react'
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline/index.js";
import advantageImg from '../../assets/advantage.png'
import {styles} from "../../util/genral-style.js";
import {Link} from 'react-router-dom'


const svgStyle= ''
const advantages = [
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 33" fill="none" className={`${svgStyle}`}>
            <path d="M15.9992 32.5V23.535L0 16.4992H8.96501L15.9992 0.5V9.46501L32 16.4992H23.035L15.9992 32.5Z" fill="black" fillOpacity="0.8"/>
        </svg>,text:"Quality Learning Content",description:"OrraLearn provides access to high-quality learning materials, including video tutorials, reading materials, and hands-on coding exercises. "},
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" className={`${svgStyle}`}>
            <g clipPath="url(#clip0_401_31)">
                <path d="M15.9279 3.52539C15.9279 -5.12007 21.3302 7.13515 19.173 10.8785C21.334 7.13515 34.6505 5.68629 27.1618 10.01C34.6505 5.68629 26.7382 16.5003 22.4162 16.5003C26.7382 16.5003 34.6505 27.3085 27.1618 22.9906C34.6505 27.3142 21.334 25.8654 19.173 22.1221C21.334 25.8654 15.9279 38.1206 15.9279 29.4752C15.9279 38.1206 10.5238 25.8654 12.6828 22.1221C10.5219 25.8654 -2.79468 27.3142 4.69397 22.9906C-2.79468 27.3142 5.11775 16.5003 9.44143 16.5003C5.11775 16.5003 -2.79468 5.69201 4.69397 10.01C-2.79468 5.68629 10.5219 7.13515 12.6828 10.8785C10.5238 7.13133 15.9279 -5.12007 15.9279 3.52539Z" fill="black" fillOpacity="0.8"/>
            </g>
            <defs>
                <clipPath id="clip0_401_31">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>,text:"Flexible Learning Experience",description:"OrraLearn provides access to high-quality learning materials, including video tutorials, reading materials, and hands-on coding exercises. "},
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 33" fill="none" className={`${svgStyle}`}>
            <path d="M16 2.5L21.12 18.18L32 30.5L16 27.14L0 30.5L10.88 18.18L16 2.5Z" fill="black" fillOpacity="0.8"/>
        </svg>,text:"Supportive Community & Mentorship",description:"OrraLearn provides access to high-quality learning materials, including video tutorials, reading materials, and hands-on coding exercises. "}
]

const Advantages = () => {
    return (
        <div className={`w-full h-full flex flex-col gap-y-16  bgTwo ${styles.homePageGenPadding} ${styles.paddingX}`}>
            <div className={'font-openSans'}>
                <h6 className={`${styles.homeHeadingStyle} `}>BENEFITS</h6>
                <h1 className={`${styles.homeSubHeadingStyle}`}>Advantages of Using <br/>  Orralearn</h1>
                <p className={`${styles.homeHeadingDescriptionStyle} pt-[30px]`}>Discover Various ways Orralearn will be useful to you and <br/>others </p>
            </div>

            <div className='w-full flex flex-col lg:flex-row'>
                <div className={'w-full pr-4'}>
                    <img className={''} src={advantageImg} alt={'advantages'}/>
                </div>
                <dl className={'w-full flex flex-col gap-y-8 mt-20'}>
                    {advantages.map((advantage) => (
                        <Disclosure as="div" key={advantage.text} className="pt-5 border-b-2 py-4">
                            {({ open }) => (
                                <>
                                    <dt className={''}>
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 ">
                                            <div className={'flex gap-2 items-center '}>
                                               <span>{advantage.icon}</span>
                                                <span className=" leading-7 text-black text-opacity-80 text-[16px] sm:text-[24px] font-medium ">{advantage.text}</span>
                                            </div>
                                            <span className="ml-6 flex h-7 items-center">
                                                <div className={' flex justify-center items-center w-8 h-8 bgColorTwo rounded-md'}>
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                                                    </div>
                        </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                        <p className="text-base leading-7 text-gray-600">{advantage.description}</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                    <Link to={'/signUp'} className={`${styles.buttonStyle} mt-8 text-lg  w-[210px]`}>Get Started its free </Link>
                </dl>
            </div>

        </div>
    );
};

export default Advantages;