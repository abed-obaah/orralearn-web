import {styles} from "../../util/genral-style.js";
import learnImg from  '../../assets/learnImg.png'
import lines from "../../assets/lines.png";

const LearnMore = () => {
    return (
        <div className={`${styles.paddingX}  `}>
            <div className={'flex justify-center'}>
                <img src={lines} alt={'lines'}/>
            </div>
            <div className={`flex flex-col md:flex-row sm:justify-between gap-10 gap-y-16 py-20 md:py-40`}>
            <div className={'font-openSans w-full'}>
                <h6 className={`${styles.homeHeadingStyle} uppercase`}>Learn more for less</h6>
                <h1 className={`${styles.homeSubHeadingStyle}`}>Learning on Orralearn <br/>is free</h1>
                <p className={`${styles.homeHeadingDescriptionStyle} pt-[30px]`}>We create courses with Curated Youtube lessons in a comprehensive way. You do not need to search for courses, Orralearn has made it easier for you to learn for FREE!</p>
                <div className={`${styles.buttonStyle} w-[210px] mt-[30px]`}>Get Started its free</div>
            </div>
            <div className={`w-full md:max-w-full md:w-full md:flex md:justify-end`}>
                <img src={learnImg} alt={'learn '} className={' w-full h-[356px] lg:h-[538px] lg:w-[568px]'}/>
            </div>
            </div>
        </div>
    );
};

export default LearnMore;