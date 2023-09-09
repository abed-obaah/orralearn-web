
import {styles} from "../../util/genral-style.js";
import {testimonials} from "../../util/usefull-data.js";



const Testimonials = () => {
    return (
        <div className={`${styles.homePageGenPadding} ${styles.paddingX} bg-[#5E00D0] flex flex-col gap-y-[60px]`}>
            <div className={'flex flex-col text-center'}>
                <h6 className={`text-lg font-[400] text-white`}>Testimonials</h6>
                <h1 className={`${styles.homeSubHeadingStyle} text-white pb-[5px]`}>Hear From Our Students</h1>
                <p className={`${styles.homeHeadingDescriptionStyle} text-white`}>See what our students have to say about learning on Orralearn and the results so far</p>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-4 font-openSans'}>
                {testimonials.map((item)=>(
                    <div className={'p-8 bg-[#CEBFEE] border-[1px] border-opacity-60  rounded-[41.037px] '} key={item.name}>
                        <p className={'font-[400] text-lg '}>{item.text}</p>
                        <div className={'flex flex-col gap-1 pt-10'}>
                            <h6 className={'font-semibold'}>{item.name}</h6>
                            <h6 className={'font-semibold'}>{item.tag}</h6>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Testimonials;