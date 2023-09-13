import {styles} from "../../util/genral-style.js";
import elipse from '../../assets/ellipse.png'
import dash from '../../assets/dash.png'
import {Link} from "react-router-dom";

const SectionOne = () => {
    return (
        <div className={`  relative  h-full  md:min-h-screen md:h-full w-full    bg-transparent pt-40 pb-20 gap-y-10 sm:gap-y-0  flex flex-col items-center  ${styles.paddingX} `}>
            <div className={'flex flex-col items-center gap-y-5   z-10 xs:absolute '}>
                <h1 className={'text-center text-3xl sm:text-5xl md:text-5xl  lg:text-6xl font-space font-bold leading-[50px] sm:leading-[60px] md:leading-[60px] lg:leading-[80px] tracking-[-0.5px]'}>
                    Up your <span className={'text-[#7F56D9]'}>Skills</span> <br/>  to Advance Your  <span className={'text-[#7F56D9]'}>Career</span> <br className={'hidden sm:flex'}/> Path
                </h1>
                <p className={`px-6 ${styles.homeHeadingDescriptionStyle} md:w-1/2 text-center`}>Discover an innovative approach to learning programming – It’s all made effortlessly easy! Learn, code and find opportunity on Orralearn Community.</p>
                <Link to={'/'} className={`${styles.buttonStyle}`}>Get Started its free</Link>
            </div>
            <div className={'hidden xs:flex xs:mt-[230px] sm:mt-80'}>
            <div className={'relative flex  items-center justify-center'}>
                <img src={elipse} alt={'elipse'} className={'max-w-[1000px] w-full'}/>
                <div className={'absolute  max-w-[900px] w-full rounded-lg p-2 bg-white'}>
                    <img src={dash} alt={''} className={'max-w-[900px] w-full rounded-lg'}/>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SectionOne;