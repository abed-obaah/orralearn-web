import {styles} from "../../util/genral-style.js";
import {Link} from "react-router-dom";
import {upcomming} from "../../util/usefull-data.js";
import {MdArrowForwardIos} from "react-icons/md";

const RecommendedChallenges = () => {
    return (
        <div className={'flex flex-col  gap-y-4 p-4 bg-white borderThree'}>
            <div className={'flex items-center justify-between font-openSans'}>
                <h1 className={`font-bold text-base`}>Recommended Challenges</h1>
                <Link to={'/challenges'} className={'text-[#07F] text-sm font-bold'}>See all</Link>
            </div>
            <div className={'flex flex-col gap-y-10'}>

                {upcomming.map((item,i)=>(

                    <Link to={'challenges'} className={`flex gap-2 rounded-[20px] font-openSans p-8 ${item.color}`} key={i}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'flex items-center gap-4'}>
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
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default RecommendedChallenges;