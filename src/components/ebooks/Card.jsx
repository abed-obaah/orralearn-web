import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({data}) => {
    return (
        <div className={'w-full p-2 bg-white flex flex-col gap-y-8 max-w-sm sm:max-w-full '}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={data.image} alt={data.title}/>
            <div className={'flex flex-col gap-y-4 text-sm '}>
                <div className={'w-full flex justify-between items-center font-bold'}>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{data.title}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>{data.price}</span>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={'text-[#555] min-h-[50px] line-clamp-2'}>{data.description}</p>
                <Link to={`/ebooks/${data.id}`} className={'w-full h-12 flex justify-center items-center border border-black rounded-lg'}>Buy now</Link>
            </div>
        </div>
    );
};

export default Card;