import React from 'react';
import {Link} from "react-router-dom";
import {styles} from "../../util/genral-style.js";

const DashEbookCard= ({item}) => {
    return (
        <div className={`w-full rounded-3xl bg-white  p-6 font-openSans flex  gap-4 `}>
            <div className={`rounded-3xl w-full max-w-[200px] h-72     `}>
                <img src={item.image} alt={item.title} className={'h-72 w-full object-fill'}/>
            </div>
            <div className={' flex flex-col justify-between'}>
                <div className={'flex flex-col gap-y-2'}>
                    <h1 className={'text-[#5E00D0] text-[14px]'}>Programming</h1>
                    <p className={'font-semibold text-black text-opacity-80'}>{item.title}</p>
                </div>
                <div className={'flex items-center gap-4'}>
                    <span className={'text-[#555555] text-opacity-40'}>{item.oldPrice}</span>
                    <span className={'text-black'}>{item.newPrice}</span>
                </div>
                <Link to={''} className={`${styles.buttonStyleTwo} w-40`}>Buy Now</Link>
            </div>
        </div>
    );
};

export default DashEbookCard;