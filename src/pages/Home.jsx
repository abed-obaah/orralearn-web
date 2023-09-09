import {styles} from "../util/genral-style.js";
import Advantages from "../components/home/Advantages.jsx";
import Checkout from "../components/home/Checkout.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Learnmore from "../components/home/LearnMore.jsx";
import Practice from "../components/home/Practice.jsx";
import Popular from "../components/home/Popular.jsx";

const Home = () => {

    return (
        <>
            <div className={`bg-white ${styles.paddingX}`}>
                <Advantages/>
                <Checkout/>
            </div>
            <Testimonials/>
            <Learnmore/>
            <Practice/>
            <Popular/>
        </>
    )
}
export default Home