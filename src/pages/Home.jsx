import {styles} from "../util/genral-style.js";
import Advantages from "../components/home/Advantages.jsx";
import Checkout from "../components/home/Checkout.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Learnmore from "../components/home/LearnMore.jsx";
import Practice from "../components/home/Practice.jsx";
import Popular from "../components/home/Popular.jsx";
import CallToAction from "../components/shared/CallToAction.jsx";
import SectionOne from "../components/home/SectionOne.jsx";


import bgImage from '../assets/bgImage.svg'
const Home = () => {

    return (
        <div className={'w-full h-full flex flex-col gap-y-40 '}
             style={{
                 backgroundImage:`url(${bgImage})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundAttachment: 'fixed',
             }}
        >
            <SectionOne/>
            <Advantages/>
            <Checkout/>
            <Testimonials/>
            <Learnmore/>
            <Practice/>
            <div className={``}>
            <Popular/>
                <div  className={`bg-white ${styles.paddingX} py-40 bgOne`}>
                    <CallToAction/>
                </div>
            </div>

        </div>
    )
}
export default Home