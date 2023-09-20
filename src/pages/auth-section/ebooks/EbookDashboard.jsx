import image1 from '../../../assets/html1.png'
import image2 from '../../../assets/python3.jpg'
import CheckboxesList from "../../../components/ebooks/CheckboxesList.jsx";
import {FaAngleDoubleRight} from "react-icons/fa";
import Card from "../../../components/ebooks/Card.jsx";


const EbookDashboard = () => {

    const categories = [
        {name: 'programming', title: 'Programming', described: 'programming-description'},
        {name: 'design', title: 'Design', described: 'design-description'},
        {name: 'educational', title: 'Educational', described: 'educational-description'},
        {name: 'business', title: 'Business', described: 'business-description'},
    ]
    const sizes = [
        {name: 'sm', title: 'SM', described: 'sm-description'},
        {name: 'md', title: 'MD', described: 'md-description'},
        {name: 'LG', title: 'lg', described: 'lg-description'},
        {name: 'XL', title: 'xl', described: 'xl-description'},
        {name: 'XXL', title: 'xxl', described: 'xxl-description'},
    ]
    const languages = [
        {name: 'english', title: 'English', described: 'english-description'},
        {name: 'french', title: 'French', described: 'french-description'},
    ]

    const coverStyle = [
        {name: 'hardcover', title: 'Hardcover', described: 'hardcover-description'},
        {name: 'softcover', title: 'Softcover', described: 'softcover-description'},
    ]
    const other = [
        {name: 'four', title: '4+ stars', described: 'four-description'},
    ]

    const books = [
        {image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
        {image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
        {image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
        {image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},  {image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
        {image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
        {image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
        {image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
    ]
    return (
        <div className={'pt-10 pb-10 px-10 gap-8 w-full flex '}>
            <div className={'w-72 bg-white rounded-[20px] p-4 flex flex-col gap-y-6'}>
                {/*<legend className="sr-only">Notifications</legend>*/}
                <CheckboxesList listElements={categories} title={'Categories'}/>
                <CheckboxesList listElements={sizes} title={'Size'}/>
                <div className={'flex flex-col'}>
                    <div className={'flex justify-between'}>
                        <h1 className={'font-bold text-lg'}>Price</h1>
                        <p className={'text-[#5E00D0] text-sm'}>Apply</p>
                    </div>
                    <div  className={'fex flex-col'}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <CheckboxesList listElements={languages} title={'Languages'}/>
                <CheckboxesList listElements={coverStyle} title={'Cover style'}/>
                <CheckboxesList listElements={other} title={'Other'}/>
            </div>
            <div className={'w-full  flex  flex-col gap-4'}>
                <div className={'  w-full flex justify-between items-center'}>
                    <div className={'flex flex-col gap-2 '}>
                        <div className={'flex gap-2 items-center text-[#A0A0A0] text-xs '}>
                            <span>Home</span>
                            <FaAngleDoubleRight/>
                            <span>search</span>
                        </div>
                        <div className={'flex gap-2 items-center font-bold'}>
                            <span className={'text-[#A0A0A0]'}>19</span>
                            <span>Results</span>
                            <span className={'text-[#A0A0A0]'}>For Ebooks</span>
                        </div>
                    </div>
                    <div>
                        <select
                            id="location"
                            name="location"
                            className="block cursor-pointer  w-60 rounded-xl border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue="Sort by"
                        >
                            <option>United States</option>
                            <option>Sort by</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                </div>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4'}>
                    {books.map((data,i)=>(
                        <Card data={data} key={i} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default EbookDashboard;