import {useState} from "react";
import ReUsableModal from "../shared/ReUsableModal.jsx";
import {GoStar, GoStarFill} from "react-icons/go"
import ReactStars from "react-rating-stars-component";
import {FaRegStarHalfStroke} from "react-icons/fa6";


const ReviewForm = () => {
    const [ open,setOpen] = useState(false)
    const [ratingValue, setRatingValue] = useState(0)
    const [description,setDescription] = useState('')
    const [loading,setLoading] = useState(false)
    const handleRating = (rate) => {
        setRatingValue(rate)
    }

    const submitRating = (e)=>{
        e.preventDefault()
        console.log(ratingValue,description)
    }
    return (<>
        <ReUsableModal title={'Enter your review'} open={open} setOpen={setOpen}>
            <form className={'w-full flex flex-col '} onSubmit={submitRating}>
                <div className={'w-full flex justify-center'}>
                    <ReactStars
                        classNames={'outline-none'}
                        count={5}
                        onChange={handleRating}
                        size={40}
                        isHalf={true}
                        emptyIcon={<GoStar className="w-32"/>}
                        halfIcon={<FaRegStarHalfStroke/>}
                        fullIcon={<GoStarFill/>}
                        activeColor="#ffd700"
                    />
                </div>
                <div className="mt-2">
                    <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder={'Enter your description'}
                    />
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-[#634AFE] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#634AFE] sm:col-start-2"
                        disabled={loading}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={()=>{setOpen(false)}}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </ReUsableModal>
        <button onClick={()=>{setOpen(true)}} className={'rounded-[16px] text-xs sm:w-40 p-2 sm:p-4 border-[1px] border-[#0D0B32]'}>ADD REVIEW
        </button>
    </>);
};

export default ReviewForm;