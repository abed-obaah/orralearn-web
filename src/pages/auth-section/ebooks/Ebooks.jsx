import {Outlet} from "react-router-dom";
import ReusableNavbar from "../../../layout/navbar/auth-navs/ReusableNavbar.jsx";

const Ebooks = () => {
    return (
        <>
            <ReusableNavbar/>
            <div className={'bgOne min-h-screen font-openSans pt-[100px] px-10  '}>
                <Outlet/>
            </div>
        </>
    );
};

export default Ebooks;