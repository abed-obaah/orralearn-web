import {Outlet} from "react-router-dom";
import {styles} from "../../../util/genral-style.js";
import AuthResNav from "../../../layout/navbar/auth-navs/AuthResNav.jsx";

const Ebooks = () => {
    return (
        <>
            <AuthResNav/>
            <div className={`bgOne min-h-screen font-openSans pt-[100px] pb-10 ${styles.paddingX} `}>
                <Outlet/>
            </div>
        </>
    );
};

export default Ebooks;