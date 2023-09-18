import {Outlet} from "react-router-dom";
import ReusableNavbar from "../../../layout/navbar/auth-navs/ReusableNavbar.jsx";

const Ebooks = () => {
    return (
        <div className={'bgOne min-h-screen font-openSans'}>
            <ReusableNavbar/>
            <Outlet/>
        </div>
    );
};

export default Ebooks;