import {styles} from "../util/genral-style.js";
import Advantages from "../components/home/Advantages.jsx";
import Checkout from "../components/home/Checkout.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Learnmore from "../components/home/LearnMore.jsx";
import Practice from "../components/home/Practice.jsx";
import Popular from "../components/home/Popular.jsx";
import CallToAction from "./Components/CallToAction.jsx";
import SectionOne from "../components/home/SectionOne.jsx";

const Home = () => {

    return (
        <>
            <SectionOne/>
            <div className={`bg-white ${styles.paddingX}`}>
                <Advantages/>
                <Checkout/>
            </div>
            <Testimonials/>
            <Learnmore/>
            <Practice/>
            <Popular/>
            <div  className={`bg-white ${styles.paddingX} py-40`}>
            <CallToAction/>
            </div>
        </>
    )
}
export default Home