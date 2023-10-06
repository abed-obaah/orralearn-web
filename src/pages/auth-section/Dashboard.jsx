import handWave from '../../assets/handwave.svg'
import humanSpace from '../../assets/Humans Space.png'
//import Webiners from "../../components/dashboard/Webiners.jsx";
import DashEbookCard from "../../components/dashboard/DashEbookCard.jsx";
import DashVidCard from "../../components/dashboard/DashVidCard.jsx";
import uc from '../../assets/uc.png'

// import hcj  from '../../assets/HCJ.png'
import {styles} from "../../util/genral-style.js";
import {Link} from "react-router-dom";
import {otherSections, recommendedEbooks} from "../../util/usefull-data.js";
import RecommendedChallenges from "../../components/dashboard/RecommendedChallenges.jsx";
import {useStateContext} from "../../context/contextProvider.jsx";


// eslint-disable-next-line react/prop-types


const Dashboard = () => {

    const {userInfo} = useStateContext()
    const genContainerStyle = 'flex flex-col gap-y-5'
    const reusableHeadingStyles = 'text-[18px] xl:text-[24px] font-semibold'
    const reusableContainerHeading = 'flex-col gap-y-2'
    const reusabletextStyle ='text-[13px] text-black  text-opacity-70 font-openSans'
    return (
        <div className={`w-full h-full flex  gap-10 gap-y-10 font-openSans`}>
            <div className={` flex flex-col w-full gap-y-10   `}>
                <div className={'flex items-center font-openSans  rounded-[20px]   h-[200px] w-full bgFour p-5 '}>
                    <div className={'sm:w-3/5 '}>
                        <div className={''}>
                            <div className={'flex items-center gap-2 mb-3'}>
                                <h1 className={'text-white font-bold text-2xl sm:text-xl  xl:text-2xl'}>Welcome, {userInfo.userName}</h1>
                                <img src={handWave} alt={'hand'}/>
                            </div>
                            <p className={'text-white text-base sm:text-sm xl:text-sm tracking-[0.3]'}>You've just started your journey with us,
                                and  we're excited to have you on board.</p>
                        </div>
                    </div>
                    <div className={'hidden sm:flex '}>
                    <img src={humanSpace} alt={''} className={'w-72 h-36'}/>
                    </div>
                </div>

                <div className={'lg:hidden'}>
                    <DashVidCard/>
                </div>
                <div className={`${genContainerStyle} boxShadowOne`}>
                    <div className={`${reusableContainerHeading}`}>
                        <h1 className={`${reusableHeadingStyles}`}>Upcoming Course just for you</h1>
                    </div>
                    <div className={'flex flex-col md:flex-row bg-white md:px-6 md:py-3 gap-6'}>
                        {/*<div></div>*/}
                        <img src={uc} alt={''} className={' md:w-72 md:h-40 h-64 object-fill'}/>
                        <div className={'flex flex-col gap-y-4 px-6 pb-3 lg:px-0 lg:pb-0'}>
                            <h6 className={'font-semibold text-[16px]'}>Full-Stack Mobile Application Development</h6>
                            <p className={`${reusabletextStyle}`}>Become a Full Stack Mobile App developer with just ONE course. HTML, CSS, Javascript, React, Node  and Web3</p>
                            <Link to={''} className={`${styles.buttonStyleTwo} w-40`}>Pre-Enroll</Link>
                        </div>
                    </div>
                </div>
                <div className={`${genContainerStyle}`}>

                    <div className={`${reusableContainerHeading}`}>
                        <h1 className={`${reusableHeadingStyles}`}>Recommended Ebooks</h1>
                        <p className={'text-[#555555] text-opacity-70 text-sm'}>Here is your study overview</p>
                    </div>
                    <div className={'w-full flex items-center gap-4'}>

                        <div className={'grid sm:grid-cols-2 gap-4  gap-y-6 w-full  justify-items-center'}>

                            {recommendedEbooks.map((item,i)=>(
                                <DashEbookCard item={item} key={i}/>
                            ))}
                        </div>
                        <div className={'bg-[#5E00D0] hidden 2xl:flex items-center justify-center rounded-3xl  gap-4 text-white font-openSans h-full w-40 '}>
                            <h1 className={'text-[25px] '}>See all</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.652229 15.367C0.529423 14.8802 0.82452 14.386 1.31135 14.2632L24.1152 8.5107L14.2916 2.64489C13.8605 2.38749 13.7198 1.82937 13.9772 1.39829C14.2346 0.967216 14.7927 0.826426 15.2238 1.08383L26.9317 8.07482C27.3628 8.33223 27.5036 8.89035 27.2462 9.32142L20.2552 21.0294C19.9978 21.4605 19.4397 21.6012 19.0086 21.3438C18.5775 21.0864 18.4367 20.5283 18.6941 20.0973L24.5599 10.2737L1.75607 16.0261C1.26924 16.1489 0.775035 15.8538 0.652229 15.367Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {otherSections.map((item,i)=>(
                    <div className={`${genContainerStyle} boxShadowOne`} key={i}>
                        <div className={`${reusableContainerHeading}`}>
                            <h1 className={`${reusableHeadingStyles}`}>{item.title}</h1>
                        </div>
                        <div className={'flex flex-col md:flex-row bg-white md:px-6 md:py-3 gap-6'}>
                            {/*<div></div>*/}
                            <img src={item.img} alt={''} className={' md:w-72 md:h-40 h-64 object-fill'} />
                            <div className={'flex flex-col gap-y-4 px-6 pb-3 lg:px-0 lg:pb-0'}>
                                <h6 className={'font-semibold text-[16px]'}>{item.subTitle}</h6>
                                <p className={`${reusabletextStyle}`}>{item.text}</p>
                                <Link to={''} className={`${styles.buttonStyleTwo} w-56`}>{item.button}</Link>
                            </div>
                        </div>
                    </div>

                ))}
                <div className={'lg:hidden'}>
                     <RecommendedChallenges/>
                </div>
            </div>
            <div className={'w-2/5  hidden lg:flex flex-col gap-y-10 font-openSans'}>
                {/*<Webiners/>*/}
                <DashVidCard/>
                <RecommendedChallenges/>
            </div>
        </div>
    );
};

export default Dashboard;