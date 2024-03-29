import {styles} from "../util/genral-style.js";
import imageOne from '../assets/aboutImg.png'
import {mentors} from "../util/usefull-data.js";
import CallToAction from "../components/shared/CallToAction.jsx";



const About = () => {


  return (
    <div className={`generalNavPadding bgOne ${styles.paddingX} font-openSans ${styles.homePageGenPadding} flex flex-col gap-y-20`} >
      <div className={'w-full  lg:w-4/5  flex flex-col gap-y-2 '}>
        <h6 className={`${styles.homeHeadingStyle} `}>About Us</h6>
        <p className={`${styles.homeSubHeadingStyle}`}>We’re a Social Learning Platform for aspiring and established developers across <span className={'text-[#5E00D0]'}>Africa</span>.</p>
      </div>

      <div className={'w-full grid grid-cols-1   sm:grid-cols-2  gap-8'}>
        <div className={'w-full h-72 md:h-[300px] lg:h-[400px] rounded-lg'}>
            <img src={imageOne} alt={''} className={'rounded-lg w-full h-72  md:h-[300px] lg:h-[400px] object-cover'}/>
        </div>
        <div className={'w-full bg-white rounded-lg p-[38px]'}>
           <p className={'font-openSans text-black font-[300] text-opacity-70'}>We stand out by curating comprehensive learning curriculums using free YouTube tutorials, elimainating the need for our resources. We also foster supportive and collaborative community for developers to connect and grow together.</p>
        </div>
      </div>
        <div className={'mb-20'}>
            <div className={'w-full  sm:w-4/5 md:w-1/2 flex flex-col gap-y-2'}>
                <h6 className={`${styles.homeHeadingStyle} `}>About Us</h6>
                <p className={'text-2xl font-bold'}>Meet Our Mentors.</p>
                <p className={'text-[#555] text-lg'}>In Orralearn, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>

            </div>
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
            >
                {mentors.map((person) => (
                    <li key={person.name} className="rounded-2xl bg-white px-8 py-10 borderTwo">
                        <div className={'flex justify-center items-center'}>
                          <img className="mx-auto h-16 w-16 rounded-full md:h-16 md:w-16" src={person.image} alt="" />
                        </div>
                        <h3 className="mt-6 text-base leading-7 tracking-tight text-center font-[400]">{person.name}</h3>
                        <p className="text-sm leading-6 text-center text-[#5E00D0]">{person.title}</p>
                        <p className="text-sm leading-6 text-center text-[#555]">{person.subTitle}</p>
                        <ul role="list" className="mt-6 flex justify-center gap-x-6">
                            <li>
                                <a href={person.tweeter} className="text-[#555]  hover:text-gray-300">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href={person.linkedIn} className="text-[#555] hover:text-gray-300">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
        <CallToAction/>
    </div>
  )
}

export default About