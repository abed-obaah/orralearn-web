import {styles} from "../../util/genral-style.js";
import  p1 from '../../assets/p1.png'
import  p2 from '../../assets/p2.png'
import  p3 from '../../assets/p3.png'
import ato from '../../assets/ato.png'

const Popular = () => {
    const populars = [
        {image:p1, cat:"Programming",title:"Introduction to JAVA Script",name:"ATO Tech",period:"2023 Enrolled",usrImg:ato},
        {image:p2, cat:"Coding",title:"Learn With ATO Tech",name:"ATO Tech",period:"2023 Enrolled",usrImg:ato},
        {image:p3, cat:"Design",title:"Building User Interface..",name:"ATO Tech",period:"2023 Enrolled",usrImg:ato},
    ]
    return (
        <div className={`${styles.paddingX} flex flex-col font-openSans  py-20 bgTwo`}>
            <div className={'flex flex-col'}>
                <h6 className={`${styles.homeHeadingStyle}`}>Explore Programs</h6>
                <h1 className={`${styles.homeSubHeadingStyle} mb-[20px] `}>Our Most Popular Class</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className={`${styles.homeHeadingDescriptionStyle}  `}>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
            </div>
            <div className={'isolate mx-auto  grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3  my-[40px]'}>
                {populars.map((item,i)=>(
                    <div className={' checkOutBorder p-6 rounded-[8px]'} key={i}>
                        <img className="aspect-[14/13] w-full rounded-md object-cover mb-10" src={item.image} alt="" />
                        <div className={'flex flex-col'}>
                            <h6 className={'text-sm textColorOne mb-2'}>Programming</h6>
                            <h1 className={'text-[24px] font-semibold mb-12'}>Introduction to JAVA Script</h1>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex items-center gap-2'}>
                                    <img className="mx-auto h-12 w-12 rounded-full" src={item.usrImg} alt="" />
                                    <div className={''}>
                                        <h6 className={'font-semibold text-sm'}>{item.name}</h6>
                                        <h6 className={'text-sm text-[#667085] '}>{item.period}</h6>
                                    </div>
                                </div>
                                <span className={`text-[#7F56D9] text-xl sm:text-[26px] font-bold`}>Free</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className={'flex justify-center'}>
                <div className={' py-[10px] px-[16px] w-[220px] checkOutBorder flex justify-center items-center font-semibold text-[18px] rounded-[8px] '}>Explore All Programs</div>
            </div>
        </div>
    );
};

export default Popular;