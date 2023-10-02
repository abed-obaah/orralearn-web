import {Outlet} from "react-router-dom";
import ReusableNavbar from "../../../layout/navbar/auth-navs/ReusableNavbar.jsx";
import {styles} from "../../../util/genral-style.js";

const Ebooks = () => {
    return (
        <>
            <ReusableNavbar/>
            <div className={`bgOne min-h-screen font-openSans pt-[100px] pb-10 ${styles.paddingX} `}>
                <Outlet/>
            </div>
        </>
    );
};

export default Ebooks;