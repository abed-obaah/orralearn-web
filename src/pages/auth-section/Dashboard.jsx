import handWave from '../../assets/handwave.svg'
import humanSpace from '../../assets/Humans Space.png'
import googleMeet from '../../assets/googlemeet.svg'
import uc from '../../assets/uc.png'
import hcj  from '../../assets/HCJ.png'
import {styles} from "../../util/genral-style.js";
import {Link} from "react-router-dom";
import {MdArrowForwardIos} from 'react-icons/md'
import {otherSections, recommendedEbooks, upcomming} from "../../util/usefull-data.js";


// eslint-disable-next-line react/prop-types
const Card =({item})=>{
    return (
        <div className={`w-full rounded-3xl bg-white  p-6 font-openSans flex  gap-4 `}>
            <div className={`rounded-3xl w-full  max-w-[200px] h-72 flex flex-col gap-y-4 px-4  ${item.bgColr} pt-5`}>

                    <h6 className={`${item.textColor}`}>{item.ctnH}</h6>
                    <p className={'font-bold text-base text-white'}>{item.ctnText}</p>

            </div>
            <div className={' flex flex-col justify-between'}>
                <div className={'flex flex-col gap-y-2'}>
                    <h1 className={'text-[#5E00D0] text-[14px]'}>Programming</h1>
                    <p className={'font-semibold text-black text-opacity-80'}>{item.title}</p>
                </div>
                <div className={'flex items-center gap-4'}>
                    <span className={'text-[#555555] text-opacity-40'}>{item.oldPrice}</span>
                    <span className={'text-black'}>{item.newPrice}</span>
                </div>
                <Link to={''} className={`${styles.buttonStyleTwo} w-40`}>Buy Now</Link>
            </div>
        </div>
    )
}


const Dashboard = () => {


    const webiners =[
        {logo:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.6367 21.741V22.741" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19.707 5.66968L18.9999 6.37678" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.27344 19.1052L5.56633 19.8123" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22.6367 12.741L21.6367 12.741" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19.707 19.8123L18.9999 19.1051" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2.63672 12.741C2.63672 18.2638 7.11387 22.741 12.6367 22.741C18.1596 22.741 22.6367 18.2638 22.6367 12.741C22.6367 7.21812 18.1596 2.74097 12.6367 2.74097M2.63672 12.741C2.63672 7.21812 7.11387 2.74097 12.6367 2.74097M2.63672 12.741H3.63672M12.6367 2.74097V3.74097M6.27271 6.37701L5.5656 5.66991M12.6367 18.741C10.0243 18.741 7.8018 17.0714 6.97813 14.741H18.2953C17.4716 17.0714 15.2492 18.741 12.6367 18.741ZM12.6367 6.74097C15.2492 6.74097 17.4716 8.41058 18.2953 10.741L6.97813 10.741C7.8018 8.41058 10.0243 6.74097 12.6367 6.74097Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,title:"JavaScipt Beginners Guide",time:"10:00 - 11:30"},
        {logo:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M22.6367 19.0077L20.0217 17.4387C18.588 16.5785 16.7705 16.7007 15.4649 17.7452L15.1355 18.0087C13.6746 19.1774 11.5988 19.1774 10.1379 18.0087L9.80854 17.7452C8.50296 16.7007 6.68548 16.5785 5.25178 17.4387L2.63672 19.0077M22.6367 13.0077L20.0217 11.4387C18.588 10.5785 16.7705 10.7007 15.4649 11.7452L15.1355 12.0087C13.6746 13.1774 11.5988 13.1774 10.1379 12.0087L9.80854 11.7452C8.50296 10.7007 6.68548 10.5785 5.25178 11.4387L2.63672 13.0077M22.6367 7.00774L20.0217 5.4387C18.588 4.57848 16.7705 4.70073 15.4649 5.7452L15.1355 6.00871C13.6746 7.17741 11.5988 7.17741 10.1379 6.00871L9.80854 5.7452C8.50296 4.70073 6.68548 4.57848 5.25178 5.4387L2.63672 7.00774" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>,title:"Meeting with ATO Bradley",time:"11:40 - 01:00"},
        {logo:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M8.63672 2.00696H16.6367M6.63672 12.007H18.6367M10.6367 2.00696H14.6367V8.29684C17.5282 9.15739 19.6367 11.8359 19.6367 15.007C19.6367 18.873 16.5027 22.007 12.6367 22.007C8.77073 22.007 5.63672 18.873 5.63672 15.007C5.63672 11.8359 7.74523 9.15739 10.6367 8.29684L10.6367 2.00696Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,title:"Mastering Design Guides",time:"01:10 - 02:30"},
    ]






    const genContainerStyle = 'flex flex-col gap-y-5'
    const reusableHeadingStyles = 'text-[24px] font-semibold'
    const reusableContainerHeading = 'flex-col gap-y-2'
    const reusabletextStyle ='text-[13px] text-black  text-opacity-70 font-openSans'
    return (
        <div className={`w-full h-full flex  gap-10 gap-y-10 font-openSans`}>
            <div className={` flex flex-col w-3/5 gap-y-10   `}>
                <div className={'flex items-center font-openSans  rounded-[20px]   h-[200px] w-full bgFour p-5 '}>
                    <div className={'w-3/5 '}>
                        <div className={'flex items-center gap-6 mb-3'}>
                            <h1 className={'text-white font-bold  text-4xl'}>Welcome, ATO</h1>
                            <img src={handWave} alt={'hand'}/>
                        </div>
                        <p className={'text-white text-[15px] tracking-[0.3]'}>You've just started your journey with us,
                            and we're excited to have you on board.</p>

                    </div>
                    <img src={humanSpace} alt={''}/>
                </div>
                <div className={`${genContainerStyle} boxShadowOne`}>
                    <div className={`${reusableContainerHeading}`}>
                        <h1 className={`${reusableHeadingStyles}`}>Upcoming Course just for you</h1>
                    </div>
                    <div className={'flex bg-white px-6 py-3 gap-6'}>
                        {/*<div></div>*/}
                        <img src={uc} alt={''}/>
                        <div className={'flex flex-col gap-y-4'}>
                            <h6 className={'font-semibold text-[16px]'}>Full-Stack Mobile Application Development</h6>
                            <p className={`${reusabletextStyle}`}>Become a Full Stack Mobile App developer with just ONE course. HTML, CSS, Javascript, React, Node  and Web3</p>
                            <Link to={''} className={`${styles.buttonStyleTwo} w-40`}>Pre-Enroll</Link>
                        </div>
                    </div>
                </div>
                <div className={`${genContainerStyle}`}>

                    <div className={`${reusableContainerHeading}`}>
                        <h1 className={`${reusableHeadingStyles}`}>Recommended Ebooks</h1>
                            <p className={'text-[#555555] text-opacity-70'}>Here is your study overview</p>
                    </div>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'w-full rounded-3xl bg-white  p-6 font-openSans flex  gap-4'}>
                            <div className={'rounded-3xl max-w-[200px] flex flex-col h-72 items-center  bg-[#FCC52A] pt-5'}>
                                <div className={'full bg-black p-2' }>
                                    <p className={'text-[#FF9B26] text-center font-semibold'}>Full-Stack Web Development in 2 weeks</p>
                                </div>
                                <div className={'my-10'}>
                                    <img src={hcj} alt={''}/>
                                </div>
                                <div className={'w-full bg-black text-[#FF9B26] text-center rounded-b-3xl font-semibold py-2 text-xs'}> BY ATO Bradley</div>
                            </div>
                            <div className={' flex flex-col justify-between'}>
                                <div className={'flex flex-col gap-y-2'}>
                                    <h1 className={'text-[#5E00D0] text-[14px]'}>Programming</h1>
                                    <p className={'font-semibold text-black text-opacity-80'}>Full Stack web <br/> Development in 2 weeks</p>
                                </div>
                                <div className={'flex items-center gap-4'}>
                                    <span className={'text-[#555555] text-opacity-40'}>$3.50</span>
                                    <span className={'text-black'}>$4.50</span>
                                </div>
                                <Link to={''} className={`${styles.buttonStyleTwo} w-40`}>Buy Now</Link>
                            </div>
                        </div>
                        {recommendedEbooks.map((item,i)=>(
                        <Card item={item} key={i}/>
                        ))}
                        <div className={'bg-[#5E00D0] flex items-center justify-center rounded-3xl  gap-4 text-white font-openSans '}>
                             <h1 className={'text-[32px] '}>See all</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.652229 15.367C0.529423 14.8802 0.82452 14.386 1.31135 14.2632L24.1152 8.5107L14.2916 2.64489C13.8605 2.38749 13.7198 1.82937 13.9772 1.39829C14.2346 0.967216 14.7927 0.826426 15.2238 1.08383L26.9317 8.07482C27.3628 8.33223 27.5036 8.89035 27.2462 9.32142L20.2552 21.0294C19.9978 21.4605 19.4397 21.6012 19.0086 21.3438C18.5775 21.0864 18.4367 20.5283 18.6941 20.0973L24.5599 10.2737L1.75607 16.0261C1.26924 16.1489 0.775035 15.8538 0.652229 15.367Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {otherSections.map((item,i)=>(
                    <div className={`${genContainerStyle} boxShadowOne`} key={i}>
                        <div className={`${reusableContainerHeading}`}>
                            <h1 className={`${reusableHeadingStyles}`}>{item.title}</h1>
                        </div>
                        <div className={'flex bg-white px-6 py-3 gap-6'}>
                            {/*<div></div>*/}
                            <img src={item.img} alt={''}/>
                            <div className={'flex flex-col gap-y-4'}>
                                <h6 className={'font-semibold text-[16px]'}>{item.subTitle}</h6>
                                <p className={`${reusabletextStyle}`}>{item.text}</p>
                                <Link to={''} className={`${styles.buttonStyleTwo} w-56`}>{item.button}</Link>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
            <div className={'w-2/5  flex flex-col gap-y-10 font-openSans'}>
                <div className={'bg-[#F9FAFB] w-full min-h-[384px] flex flex-col gap-y-4 p-4 borderThree'}>
                    <h1 className={`${styles.dashboardHeadingOne}`}>Upcoming Webiners</h1>
                    <div className={'bg-[#FFC136] p-2 border-b-8 border-b-[#8338EC]'}>
                        <h4 className={'text-white font-sans font-bold text-[15px]'}>Up-next</h4>
                        <div className={'bg-white w-full flex gap-6 items-center py-5 px-2 font-openSans'}>
                            <img src={googleMeet} alt={''}/>
                            <div className={'flex flex-col gap-y-1'}>
                                <p className={'text-[9px] text-black text-opacity-50 font-bold'}>10:00 - 10:30</p>
                                <p className={'ext-black text-opacity-80 font-bold'}>Mastering Web Development in
                                    2023</p>
                                <p className={`${reusabletextStyle}`}>Join us for an
                                    insightful journey into the world of web development in 2023. Discover the latest
                                    trends, tools, and best practices to become a proficient web developer</p>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full font-openSans'}>
                        <h1 className={'text-[12px] font-bold  text-[#615E83] mb-4'}>After</h1>
                        <div className={'flex flex-col gap-y-5'}>
                            {webiners.map((item,i)=>(
                                <div className={'flex items-center gap-4 shadow-lg'} key={i}>
                                    <div className={'bg-[#8338EC]  h-12 w-12 flex items-center justify-center'}>
                                        {item.logo}
                                    </div>
                                    <div className={'flex flex-col'}>
                                        <p className={'text-[9px] text-black text-opacity-50 font-bold'}>{item.time}</p>
                                        <p className={'text-[#615E83] font-bold text-[10px]'}>{item.title}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-4 p-4 bg-white borderThree'}>
                    <div className={'flex items-center justify-between font-openSans'}>
                        <h1 className={`${styles.dashboardHeadingOne}`}>Upcoming Events</h1>
                        <Link to={'/'} className={'text-[#07F] text-[13px] font-bold'}>See all</Link>
                    </div>
                    <div className={'flex flex-col gap-y-10'}>

                        {upcomming.map((item,i)=>(

                            <div className={`flex gap-2 rounded-[20px] font-openSans p-8 ${item.color}`} key={i}>
                                {console.log(item)}
                                <div className={'flex gap-2 items-center'}>
                                    <div className={'flex items-center gap-4'}>
                                        <div className={`w-16 h-16 rounded-full flex justify-center items-center  ${item.figurebg} font-bold  text-white text-lg`}>{item.number}</div>
                                        <div className={'flex flex-col gap-y-2'}>
                                            <h6 className={'font-bold'}>{item.title}</h6>
                                            <div className={'flex items-center gap-1 text-[9px] text-black text-opacity-50 font-bold'}>
                                                <span>{item.date}</span>
                                                <span className={'w-2 h-2 bg-[#07F] rounded-full'}></span>
                                                <span>{item.time}</span>
                                            </div>
                                            <p className={'text-[9px] text-black text-opacity-50 font-bold'}>{item.platform}</p>
                                        </div>
                                    </div>
                                    <MdArrowForwardIos/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;