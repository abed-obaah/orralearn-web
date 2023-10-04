import {Link} from "react-router-dom";
import {authLinks} from "../../util/usefull-data.js";
const Authfooter = () => {
    return (
        <div className={'w-full flex flex-col gap-y-2 lg:flex-row items-center justify-between bgFive px-4 sm:px-6 lg:px-8 py-5 text-[#555555]'}>
            <div>© 2023 - Orralearn. All rights reserved</div>
            <div className={' flex items-2 gap-3 '}>
                {authLinks.map((item,i)=>(
                    <Link to={item.path} key={i} >{item.title}</Link>
                )) }
            </div>
        </div>
    );
};

export default Authfooter;