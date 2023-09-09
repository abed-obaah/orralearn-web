import {styles} from "../../util/genral-style.js";
import lines from "../../assets/lines.png";
import practice from "../../assets/practice.png";


const Practice = () => {
    return (
        <div className={`${styles.paddingX}  `}>

            <div className={`flex flex-col sm:flex-row gap-10 gap-y-12 py-10`}>
                <div className={'font-openSans w-full'}>
                    <h6 className={`${styles.homeHeadingStyle}  uppercase`}>Hands on Exercise</h6>
                    <h1 className={`${styles.homeSubHeadingStyle}`}>Hands on Exercise</h1>
                    <div className={` pt-[30px]`}>
                        <img src={practice} alt={'practcice'}/>
                    </div>

                </div>
                <div className={`w-full flex flex-col gap-y-10 justify-center`}>
                    <div className={'flex flex-col gap-y-6 w-full h-64 p-10 checkOutBorder rounded-[20px]'}>
                        <div className={'w-full flex gap-2 font-openSans'}>

                                <div className={'rounded-full min-w-[5px] h-[5px] mt-2 bg-black'}></div>
                            <p> <b>On Orralearn</b>, you learn by doing. Challenge yourself on small coding exercises. Each Exercises is crafted by the community to help you strengthen different coding techniques.</p>

                        </div>
                        <div className={'w-full flex gap-2 font-openSans'}>

                            <div className={'rounded-full min-w-[5px] h-[5px] mt-2 bg-black'}></div>
                            <p>
                                You also have an <b>online coding</b>  environment to practice in real time.</p>

                        </div>

                    </div>
                    <div className={   `${styles.buttonStyle} w-[210px]`}>Get Started its free</div>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <img src={lines} alt={'lines'}/>
            </div>
        </div>
    );
};

export default Practice;