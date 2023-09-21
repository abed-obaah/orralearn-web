import {useState,useEffect} from "react";

import {books} from "../../../util/usefull-data.js";

import {useParams} from "react-router-dom";
import {GoStar} from "react-icons/go";

const EbooksDetails = () => {
    const [detail,setDetail] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const selectedEbook = books.find((item)=> item.id === +id )
        setDetail(selectedEbook)
    },[id])

    const reusebleStyle1 ='flex items-center gap-4 font-[16px]'
    const reusablefont = 'font-semibold'
    return (
        <div className={'w-full min-h-screen flex flex-col gap-y-10 font-openSans'}>
            <div className={'w-full grid  grid-cols-1 lg:grid-cols-2 gap-5 bg-white p-4 rounded-[20px]'}>
                <div className={'w-full flex gap-12'}>
                    <div className={' w-full'}>

                         <img src={detail.image} alt={'course title'} className={' aspect-[3/2] min-w-[250px] lg:min-w-[300px] xl:min-w-[400px] h-[425px] rounded-[20px] object-cover'}></img>
                    </div>
                    <div className={'w-full flex flex-col gap-y-4'}>
                        <div className={'flex flex-col gap-y-1'}>
                            <h1 className={'text-[20px]'}>{detail.author}</h1>
                            <h1 className={'font-semibold text-[26px]'}>{detail.title}</h1>
                        </div>
                        <div className={'w-full flex flex-col gap-y-2'}>
                            <div className={'flex gap-4 items-center text-[20px]'}>
                                <div className={'flex gap-1 items-center '}><GoStar className={'text-2xl'}/> <span>{detail.reviews} (100)</span> </div>
                                <span className={'border-b-[1px] border-b-black'}>{detail.reviews} reviews</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Category</span>
                                <span>Programming</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Publish date</span>
                                <span>{detail.publishDate}</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Language</span>
                                <div className={'flex items-center gap-2'}>
                                    {detail?.languages?.map((lang,i)=>(
                                        <span key={i}>lang</span>
                                    ))}

                                </div>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Pages</span>
                                <span>208</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Read time</span>
                                <span>Read time</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Type</span>
                                <span>Hardcover/Softcopy</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Publisher</span>
                                <span>ATO BradLey</span>
                            </div>
                            <div className={`${reusebleStyle1}`}>
                                <span className={`${reusablefont}`}>Price</span>
                                <span>{detail.price}</span>
                            </div>
                            <div className={'flex gap-2 items-center'}>
                                <button className={'rounded-[20px] w-32 text-semibold text-sm bg-[#634AFE] p-2 text-black'}>BUY NOW</button>
                                <button className={'rounded-[20px] w-32 border-2 border-[#634AFE] text-semibold text-sm bg-white p-2 text-black'}>ADD TO CARD</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'w-full flex  lg:justify-end'}>
                <div className={'flex flex-col justify-between lg:w-72'}>
                    <div className={'rounded-[20px] bg-[#F5F5F5] p-4 mb-10'} >
                        <h1 className={'font-semibold text-[20px]'}>SUMMARY</h1>
                        <p className={'lg:min-h-[200px]'}>Dive into the ever-evolving landscape of web development with "Introduction to Web Development 2023." This ebook offers a dynamic exploration of the latest tools, techniques, and trends that define web development in the current year. Whether you're taking your first steps in coding or seeking to enhance your existing skills, this ebook provides a clear and structured path to success.
                        </p>
                    </div>
                    <div className={'rounded-[20px] bg-[#F5F5F5] p-4'} >
                        <div>RECEPTION</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EbooksDetails;