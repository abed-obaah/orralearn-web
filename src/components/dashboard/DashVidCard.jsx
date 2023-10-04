import ReactPlayer from 'react-player'
const DashVidCard = () => {
    return (
        <div className={'w-full flex flex-col rounded-[20px] p-4 bg-white font-openSans'}>
            <div className={'w-full relative'}>
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'100%'} style={{borderRadius:'20px'}} />
            </div>
            <div className={'flex flex-col gap-y-1 mt-2'}>
                <h1 className={'font-bold text-xl'}>Watch Tutorials</h1>
                <p>Learn the basics</p>
            </div>
        </div>
    );
};

export default DashVidCard;