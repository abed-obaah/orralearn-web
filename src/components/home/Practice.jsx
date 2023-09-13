import {styles} from "../../util/genral-style.js";
import practice from "../../assets/practice.png";


const Practice = () => {
    return (
        <div className={`${styles.paddingX} bgTwo `}>

            <div className={`flex flex-col gap-10 gap-y-12 py-20`}>
                <div className={'font-openSans w-full'}>
                    <h6 className={`${styles.homeHeadingStyle}  uppercase`}>Hands on Exercise</h6>
                    <h1 className={`${styles.homeSubHeadingStyle}`}>Hands on Exercise</h1>
                </div>
                <div className={`w-full flex flex-col gap-y-12 justify-center `}>
                    <div className={'grid  grid-cols-1 md:grid-cols-2 items-center gap-14'}>
                        <div className={`w-full  md:max-w-full order-last md:order-first`}>
                            <img className={'h-[300px] w-full md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[600px] object-fill'} src={practice} alt={'practcice'}/>
                        </div>
                        <div className={'flex flex-col gap-y-8'}>
                            <div
                                className={'flex flex-col gap-y-6 w-full px-5  md:p-10 md:checkOutBorder rounded-[20px]'}>
                                <div className={'w-full flex gap-2 font-openSans'}>

                                    <div className={'rounded-full min-w-[5px] h-[5px] mt-2 bg-black'}></div>
                                    <p><b>On Orralearn</b>, you learn by doing. Challenge yourself on small coding
                                        exercises. Each Exercises is crafted by the community to help you strengthen
                                        different coding techniques.</p>
                                </div>
                                <div className={'w-full flex gap-2 font-openSans'}>

                                    <div className={'rounded-full min-w-[5px] h-[5px] mt-2 bg-black'}></div>
                                    <p>
                                        You also have an <b>online coding</b> environment to practice in real time.</p>
                                </div>
                            </div>
                            <div className={`${styles.buttonStyle} w-[210px]`}>Get Started its free</div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;