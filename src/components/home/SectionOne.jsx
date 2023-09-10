import bgLines from '../../assets/backLines.png'
const SectionOne = () => {
    return (
        <div className={'h-[600px] md:min-h-screen w-full bg-white'}
             style={{
                 backgroundImage: `url(${bgLines})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}
        >
            
        </div>
    );
};

export default SectionOne;