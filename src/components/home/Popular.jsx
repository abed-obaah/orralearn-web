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
        <div className={`${styles.paddingX} flex flex-col font-openSans `}>
            <div className={'flex flex-col text-center'}>
                <h6 className={`${styles.homeHeadingStyle}`}>Explore Programs</h6>
                <h1 className={`${styles.homeSubHeadingStyle} mb-[5px] `}>Our Most Popular Class</h1>
                <p className={`${styles.homeHeadingDescriptionStyle} mb-[60px] `}>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-3 gap-8'}>
                {populars.map((item,i)=>(
                    <div className={' checkOutBorder p-6 rounded-[8px]'} key={i}>
                        <img className="aspect-[14/13] w-full rounded-2xl object-cover mb-10" src={item.image} alt="" />
                        <div className={'flex flex-col'}>
                            <h6 className={'text-sm textColorOne mb-2'}>Programming</h6>
                            <h1 className={'text-[24px] font-semibold mb-16'}>Introduction to JAVA Script</h1>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex items-center gap-2'}>
                                    <img className="mx-auto h-12 w-12 rounded-full" src={item.usrImg} alt="" />
                                    <div className={''}>
                                        <h6 className={'font-semibold text-sm'}>{item.name}</h6>
                                        <h6 className={'text-sm text-[#667085] '}>{item.period}</h6>
                                    </div>
                                </div>
                                <span className={`text-[#7F56D9] text-[26px] font-bold`}>Free</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className={'flex justify-center my-[40px]'}>
                <div className={' py-[10px] px-[16px] w-[220px] checkOutBorder flex justify-center items-center font-semibold text-[18px] rounded-[8px] '}>Explore All Programs</div>
            </div>
        </div>
    );
};

export default Popular;