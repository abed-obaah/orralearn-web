
const Card = ({data}) => {
    return (
        <div className={'w-full p-2 bg-white flex flex-col gap-y-8 '}>
            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={data.image} alt={data.title}/>
            <div className={'flex flex-col gap-y-4 text-sm '}>
                <div className={'w-full flex justify-between items-center font-bold'}>
                    <p>{data.title}</p>
                    <span>{data.price}</span>
                </div>
                <p className={'text-[#555] min-h-[50px]'}>{data.description}</p>
                <button className={'w-full h-12 flex justify-center items-center border border-black rounded-lg'}>Buy now</button>
            </div>
        </div>
    );
};

export default Card;