import {useState} from "react";
import background from '../../assets/coursebackground.png'
import ReusableSelect from "../../components/ReusableSelect.jsx";
import image1 from '../../assets/Course1.png'
import image2 from '../../assets/Course2.png'
import image3 from '../../assets/Course3.png'

import {AiFillStar} from  'react-icons/ai'
import {BsPerson} from "react-icons/bs";


const Courses = () => {

    const [time,setTime] = useState('')
    const [cat,setCat] = useState('')
    const [rating,setRating] = useState('')

    const imagesArray=[
        image1,
        image2,
        image3,
        image1,
    ]
    return (
        <div className={'flex flex-col gap-y-10 font-openSans'}>
            <div className={'flex flex-col gap-y-6 rounded-[20px] py-16 h-96 text-white'}
                 style={{
                     backgroundImage:`url(${background})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                 }}
            >
                <h1 className={'text-4xl font-semibold font-openSans  pl-10'}>Courses</h1>
                <div className={'pl-10 w-72 h-12 flex items-center gap-4 bgColorTwo rounded-r-[20px]'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clipPath="url(#clip0_287_9057)">
                            <path d="M16 6.66667C15.4696 6.66667 14.9609 6.45595 14.5858 6.08088C14.2107 5.70581 14 5.1971 14 4.66667V2C14 1.46957 14.2107 0.960859 14.5858 0.585786C14.9609 0.210714 15.4696 0 16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V4.66667C18 5.1971 17.7893 5.70581 17.4142 6.08088C17.0391 6.45595 16.5304 6.66667 16 6.66667ZM18 30V27.3333C18 26.8029 17.7893 26.2942 17.4142 25.9191C17.0391 25.544 16.5304 25.3333 16 25.3333C15.4696 25.3333 14.9609 25.544 14.5858 25.9191C14.2107 26.2942 14 26.8029 14 27.3333V30C14 30.5304 14.2107 31.0391 14.5858 31.4142C14.9609 31.7893 15.4696 32 16 32C16.5304 32 17.0391 31.7893 17.4142 31.4142C17.7893 31.0391 18 30.5304 18 30ZM6.66667 16C6.66667 15.4696 6.45595 14.9609 6.08088 14.5858C5.70581 14.2107 5.1971 14 4.66667 14H2C1.46957 14 0.960859 14.2107 0.585786 14.5858C0.210714 14.9609 0 15.4696 0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H4.66667C5.1971 18 5.70581 17.7893 6.08088 17.4142C6.45595 17.0391 6.66667 16.5304 6.66667 16ZM32 16C32 15.4696 31.7893 14.9609 31.4142 14.5858C31.0391 14.2107 30.5304 14 30 14H27.3333C26.8029 14 26.2942 14.2107 25.9191 14.5858C25.544 14.9609 25.3333 15.4696 25.3333 16C25.3333 16.5304 25.544 17.0391 25.9191 17.4142C26.2942 17.7893 26.8029 18 27.3333 18H30C30.5304 18 31.0391 17.7893 31.4142 17.4142C31.7893 17.0391 32 16.5304 32 16ZM23.3013 7.10533L24.6093 4.78133C24.8593 4.32006 24.918 3.77903 24.7728 3.27486C24.6276 2.7707 24.2901 2.34378 23.8331 2.08614C23.3761 1.8285 22.8361 1.76076 22.3296 1.89754C21.823 2.03432 21.3906 2.36465 21.1253 2.81733L19.816 5.14133C19.6869 5.37024 19.6042 5.62235 19.5726 5.88323C19.541 6.14412 19.5612 6.40867 19.6319 6.66178C19.7026 6.91488 19.8225 7.15156 19.9847 7.35831C20.1469 7.56505 20.3483 7.73779 20.5773 7.86667C20.876 8.03651 21.2137 8.12566 21.5573 8.12533C21.9124 8.12543 22.2611 8.031 22.5676 7.85174C22.8741 7.67248 23.1273 7.41486 23.3013 7.10533ZM10.8747 29.1827L12.184 26.8587C12.4444 26.3965 12.5106 25.8498 12.368 25.3388C12.2253 24.8278 11.8855 24.3944 11.4233 24.134C10.9612 23.8736 10.4144 23.8074 9.90346 23.95C9.39249 24.0927 8.95911 24.4325 8.69867 24.8947L7.39067 27.2187C7.14068 27.6799 7.08196 28.221 7.22716 28.7251C7.37237 29.2293 7.70987 29.6562 8.16691 29.9139C8.62395 30.1715 9.16392 30.2392 9.67044 30.1025C10.177 29.9657 10.6094 29.6353 10.8747 29.1827ZM7.86667 11.4227C8.12703 10.9606 8.19324 10.4141 8.05071 9.9033C7.90819 9.39247 7.56862 8.95916 7.10667 8.69867L4.78133 7.39067C4.32006 7.14068 3.77903 7.08196 3.27486 7.22716C2.7707 7.37237 2.34378 7.70987 2.08614 8.16691C1.8285 8.62395 1.76076 9.16392 1.89754 9.67044C2.03432 10.177 2.36465 10.6094 2.81733 10.8747L5.14133 12.184C5.37024 12.3131 5.62235 12.3958 5.88323 12.4274C6.14412 12.459 6.40867 12.4388 6.66178 12.3681C6.91488 12.2974 7.15156 12.1775 7.35831 12.0153C7.56505 11.8531 7.73779 11.6517 7.86667 11.4227ZM29.944 23.8493C30.2044 23.3873 30.2706 22.8408 30.128 22.33C29.9855 21.8191 29.646 21.3858 29.184 21.1253L26.86 19.816C26.6312 19.687 26.3791 19.6044 26.1184 19.5729C25.8576 19.5413 25.5931 19.5614 25.3401 19.632C25.0871 19.7027 24.8505 19.8224 24.6438 19.9845C24.4371 20.1466 24.2643 20.3478 24.1353 20.5767C24.0064 20.8055 23.9238 21.0575 23.8922 21.3183C23.8606 21.5791 23.8807 21.8435 23.9514 22.0965C24.094 22.6075 24.4338 23.0409 24.896 23.3013L27.22 24.6093C27.682 24.8697 28.2285 24.9359 28.7394 24.7934C29.2502 24.6509 29.6835 24.3113 29.944 23.8493ZM11.4227 7.86667C11.8848 7.6064 12.2247 7.17319 12.3675 6.66234C12.5103 6.15149 12.4443 5.60485 12.184 5.14267L10.8747 2.81733C10.6094 2.36465 10.177 2.03432 9.67044 1.89754C9.16392 1.76076 8.62395 1.8285 8.16691 2.08614C7.70987 2.34378 7.37237 2.7707 7.22716 3.27486C7.08196 3.77903 7.14068 4.32006 7.39067 4.78133L8.69867 7.10533C8.87282 7.41461 9.12615 7.67197 9.43263 7.85098C9.73912 8.03 10.0877 8.12423 10.4427 8.124C10.7861 8.12473 11.1239 8.03605 11.4227 7.86667ZM23.8493 29.944C24.3113 29.6835 24.6509 29.2502 24.7934 28.7394C24.9359 28.2285 24.8697 27.682 24.6093 27.22L23.3013 24.896C23.0409 24.4338 22.6075 24.094 22.0965 23.9514C21.5856 23.8087 21.0389 23.8749 20.5767 24.1353C20.1145 24.3958 19.7747 24.8292 19.632 25.3401C19.4894 25.8511 19.5556 26.3978 19.816 26.86L21.1253 29.184C21.3858 29.646 21.8191 29.9855 22.33 30.128C22.8408 30.2706 23.3873 30.2044 23.8493 29.944ZM26.8587 12.184L29.1827 10.8747C29.6353 10.6094 29.9657 10.177 30.1025 9.67044C30.2392 9.16392 30.1715 8.62395 29.9139 8.16691C29.6562 7.70987 29.2293 7.37237 28.7251 7.22716C28.221 7.08196 27.6799 7.14068 27.2187 7.39067L24.8947 8.69867C24.4325 8.95911 24.0927 9.39249 23.95 9.90346C23.8074 10.4144 23.8736 10.9612 24.134 11.4233C24.3944 11.8855 24.8278 12.2253 25.3388 12.368C25.8498 12.5106 26.3965 12.4444 26.8587 12.184ZM4.78133 24.6093L7.10533 23.3013C7.33418 23.1724 7.53539 22.9996 7.69747 22.7929C7.85955 22.5862 7.97933 22.3495 8.04996 22.0965C8.1206 21.8435 8.14071 21.5791 8.10914 21.3183C8.07758 21.0575 7.99496 20.8055 7.866 20.5767C7.73704 20.3478 7.56427 20.1466 7.35755 19.9845C7.15083 19.8224 6.91421 19.7027 6.66121 19.632C6.4082 19.5614 6.14375 19.5413 5.88297 19.5729C5.62219 19.6044 5.37018 19.687 5.14133 19.816L2.81733 21.1253C2.43259 21.3427 2.13067 21.6813 1.95871 22.0884C1.78676 22.4955 1.75446 22.948 1.86686 23.3754C1.97926 23.8027 2.23003 24.1808 2.58 24.4506C2.92997 24.7204 3.35944 24.8667 3.80133 24.8667C4.14481 24.8675 4.48256 24.7788 4.78133 24.6093Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_287_9057">
                                <rect width="32" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h3 className={'font-semibold text-lg'}>Hands-on Learning</h3>
                </div>
                <p className={'pl-10 text-lg  w-full pr-10 md:pr-0 md:w-2/5'}>Time to get hands-on and dive into our courses! We believe in learning by doing, so our interactive lessons seamlessly integrate videos with practical exercises for an immersive learning experience.
                </p>

            </div>
            <div className={'flex items-center gap-4'}>
                <div className={'flex flex-col  gap-y-1 w-72 '}>
                    <ReusableSelect title={'Sort by :'} selected={time} setSelected={setTime}/>
                </div>

                <div className={'flex flex-col gap-y-1 w-72'}>
                    <ReusableSelect title={'Sort by :'} selected={cat} setSelected={setCat}/>
                </div>

                <div className={'flex flex-col gap-y-2 w-72'}>
                    <ReusableSelect title={'Sort by :'} selected={rating} setSelected={setRating}/>
                </div>

            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-5 justify-items-center'}>
                {imagesArray.map((images,i)=>(
                    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg" key={i}>
                        <img className="w-full" src={images} alt="Sunset in the mountains"/>
                        <div className="py-4 font-openSans">
                            <div className="mx-6  w-56 font-bold text-sm mb-2 text-[#342F98] bg-[#EBEBFF] p-2">Developments</div>
                            <div className="px-6 font-bold text-xl mb-2">Introduction to Web Develpment and HTML</div>
                            <div className="px-6   py-4 flex justify-between items-center text-gray-700 text-base border-t-2  border-b-2 border-[#E9EAF0]">
                                <div className={'flex  gap-2 items-center'}>
                                    <AiFillStar className={' text-[#FD8E1F]'}/>
                                    <span>4.0</span>
                                </div>
                                <div className={'flex items-center gap-2'}>
                                    <BsPerson className={'text-2xl text-[#564FFD]'}/>
                                    <span className={'font-semibold'}> 511,123</span>
                                    <span className={'text-[#8C94A3]'}> students</span>
                                </div>
                            </div>

                        </div>
                        <div className="px-6 flex flex-col sm:flex-row gap-4 pb-4 ">
                            <div className={`cursor-pointer text-center w-full bg-[#5E00D0] rounded-[42px] py-2 px-5 text-white justify-center items-center  text-base`}>Start Learning</div>
                            <div className={`cursor-pointer text-center w-full bg-white rounded-[42px] border-[1px]  border-[#5E00D0]  py-2 px-5 text-black  justify-center  `}>Start Learning</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Courses;