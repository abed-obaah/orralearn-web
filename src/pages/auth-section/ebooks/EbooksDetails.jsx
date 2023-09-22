import {useState,useEffect} from "react";

import Card from "../../../components/ebooks/Card.jsx";

import {books} from "../../../util/usefull-data.js";
import tony from '../../../assets/ato.png'
import NP from '../../../assets/imagePaul.jpg'

import {useParams} from "react-router-dom";
import {GoStar} from "react-icons/go";
import {BsArrowDownRight} from "react-icons/bs";
import ReviewForm from "../../../components/ebooks/ReviewForm.jsx";

const EbooksDetails = () => {
    const [detail,setDetail] = useState({})
    const [ newBooks,setNewbooks] =  useState([])
    const {id} = useParams()
    useEffect(()=>{
        const selectedEbook = books.find((item)=> item.id === +id )
        const  reformedBooks =    books.filter((book)=> book.id !== +id).slice(0, 4);
        setNewbooks(reformedBooks)
        setDetail(selectedEbook)
    },[id])

    function formatDate(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

// Example usage:




    const reusebleStyle1 ='flex items-center gap-4 font-[16px]'
    const reusablefont = 'font-semibold'

    const genContainerStyle = 'flex flex-col gap-y-5'
    const reusableHeadingStyles = 'text-xl sm:text-[24px] font-semibold'
    const reusableContainerHeading = 'flex-col gap-y-2'


    const readersReviews  = [
        {image:tony,name:'ATO bradley',date:new Date(),rating: 4,description:'This ebook is a game-changer for anyone looking to break into the world of web development. The explanations are crystal clear, and the practical examples make it easy to apply what you learn. It\'s the perfect resource for beginners like me. Highly recommended!"'},
        {image:tony,name:'ATO bradley',date:new Date(),rating: 4,description:'This ebook is a game-changer for anyone looking to break into the world of web development. The explanations are crystal clear, and the practical examples make it easy to apply what you learn. It\'s the perfect resource for beginners like me. Highly recommended!"'},
        {image:NP,name:'NJI Paul',date:new Date(),rating: 4,description:'This ebook is a game-changer for anyone looking to break into the world of web development. The explanations are crystal clear, and the practical examples make it easy to apply what you learn. It\'s the perfect resource for beginners like me. Highly recommended!"'},
        {image:NP,name:'NJI Paul',date:new Date(),rating: 4,description:'This ebook is a game-changer for anyone looking to break into the world of web development. The explanations are crystal clear, and the practical examples make it easy to apply what you learn. It\'s the perfect resource for beginners like me. Highly recommended!"'},
    ]
    return (
        <>

            <div className={'w-full min-h-screen flex flex-col gap-y-10 font-openSans'}>
                <div className={'w-full grid  grid-cols-1 lg:grid-cols-2 gap-5 bg-white p-4 rounded-[20px]'}>
                    <div className={'w-full flex flex flex-col md:flex-row  gap-12'}>
                        <div className={' w-full'}>

                            <img src={detail.image} alt={'course title'} className={' aspect-[3/2] min-w-[250px] lg:min-w-[300px] xl:min-w-[300px] h-[425px] rounded-[20px] object-cover'}></img>
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
                        <div className={'flex flex-col justify-between lg:w-96'}>
                            <div className={'rounded-[20px] bg-[#F5F5F5] p-4 mb-10'} >
                                <h1 className={'font-semibold text-[20px]'}>SUMMARY</h1>
                                <p className={'lg:min-h-[200px]'}>Dive into the ever-evolving landscape of web development with "Introduction to Web Development 2023." This ebook offers a dynamic exploration of the latest tools, techniques, and trends that define web development in the current year. Whether you're taking your first steps in coding or seeking to enhance your existing skills, this ebook provides a clear and structured path to success.
                                </p>
                            </div>
                            <div className={'rounded-[20px] bg-[#F5F5F5] p-4 flex justify-between items-center'} >
                                <div>RECEPTION</div>  <BsArrowDownRight className={'text-2xl'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${genContainerStyle} boxShadowOne`} >
                    <div className={`${reusableContainerHeading}`}>
                        <h1 className={`${reusableHeadingStyles}`}>YOU MAY ALSO LIKE</h1>
                    </div>
                    <div className={'w-full grid  sm:grid-cols-2 md:grid-cols-4 gap-4'}>
                        {newBooks.map((data,i)=>(
                            <Card data={data} key={i}/>
                        ))}
                    </div>
                </div>
                <div className={`${genContainerStyle} boxShadowOne`} >
                    <div className={`flex items-center justify-between`}>
                        <h1 className={`text-xl sm:text-[24px] font-semibold `}>YOU MAY ALSO LIKE</h1>
                       <ReviewForm/>
                    </div>
                    <div className={'w-full grid  sm:grid-cols-2 md:grid-cols-2 gap-4  '}>
                        {readersReviews.map((data,i)=>(
                            <div key={i} className={'flex flex-col gap-y-2 rounded-[20px] bg-white p-4 max-w-sm sm:max-w-full'}>
                                <div className={'flex items-center gap-4 '}>
                                    <div className="flex items-center gap-x-3">
                                        <img className=" h-10 w-10 min-w-[2.5rem] sm:h-12 sm:min-w-[3rem] rounded-full" src={data.image} alt="ato" />
                                    </div>
                                    <div className={'w-full flex flex-col   md:flex-row md:items-center justify-between  text-sm sm:text-base'}>
                                        <h3 className=" e font-semibold font-openSans leading-7 tracking-tight text-gray-900">{data.name}</h3>
                                        <span className={''}>{formatDate(data.date)}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className={'flex gap-1 items-center my-2 '}><GoStar className={'text-[#FFB800] text-2xl'}/> <span>4</span> </div>
                                    <p className={'text-[#555] text-[14px]'}>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default EbooksDetails;