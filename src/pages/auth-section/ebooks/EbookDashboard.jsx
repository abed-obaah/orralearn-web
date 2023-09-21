
import CheckboxesList from "../../../components/ebooks/CheckboxesList.jsx";
import {FaAngleDoubleRight} from "react-icons/fa";
import Card from "../../../components/ebooks/Card.jsx";
import {books, categories, coverStyle, languages, other, sizes} from "../../../util/usefull-data.js";


const EbookDashboard = () => {


    return (
        <div className={' gap-8 w-full flex '}>
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