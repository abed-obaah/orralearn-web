import handWave from '../../assets/handwave.svg'
import humanSpace from '../../assets/Humans Space.png'
import googleMeet from '../../assets/googlemeet.svg'
import {styles} from "../../util/genral-style.js";
import {Link} from "react-router-dom";
import {MdArrowForwardIos} from 'react-icons/md'



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

    const upcomming=[
        {title: "Python Bootcamp",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"8",platform:"Zoom platform"},
        {title: "Java Bootcamp",date:"13th July 2023",time:"8 A.M - 9 A.M ",number:"13",platform:"Google Meet"},
        {title: "Step-by-Step guide to Web Dev",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"18",platform:"**To be submitted via Email"},
        {title: "ATO Bradley meet & greet",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"23",platform:"Google Meet"},

    ]
    return (
        <div className={`w-full h-full flex  gap-10 gap-y-10`}>
            <div className={` flex flex-col w-3/5    `}>
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
            </div>
            <div className={'w-2/5  flex flex-col gap-y-10'}>
                <div className={'bg-[#F9FAFB] w-full min-h-[384px] flex flex-col gap-y-4 p-4'}>
                    <h1 className={`${styles.dashboardHeadingOne}`}>Upcoming Webiners</h1>
                    <div className={'bg-[#FFC136] p-2 border-b-8 border-b-[#8338EC]'}>
                        <h4 className={'text-white font-sans font-bold text-[15px]'}>Up-next</h4>
                        <div className={'bg-white w-full flex gap-6 items-center py-5 px-2 font-openSans'}>
                            <img src={googleMeet} alt={''}/>
                            <div className={'flex flex-col gap-y-1'}>
                                <p className={'text-[9px] text-black text-opacity-50 font-bold'}>10:00 - 10:30</p>
                                <p className={'ext-black text-opacity-80 font-bold'}>Mastering Web Development in
                                    2023</p>
                                <p className={'text-[13px] text-black  text-opacity-70 font-openSans'}>Join us for an
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
                <div className={'flex flex-col gap-y-4 p-4 bg-white'}>
                    <div className={'flex items-center justify-between font-openSans'}>
                        <h1 className={`${styles.dashboardHeadingOne}`}>Upcoming Events</h1>
                        <Link to={'/'} className={'text-[#07F] text-[13px] font-bold'}>See all</Link>
                    </div>
                    <div className={'flex gap-2 rounded-[20px] p-8'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'flex items-center'}>
                                <div className={'w-16 h-16 rounded-full'}></div>
                                <MdArrowForwardIos/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;