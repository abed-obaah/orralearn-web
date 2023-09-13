import {styles} from "../../util/genral-style.js";


const checkouElements =[
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
            <circle cx="57.5" cy="57.5" r="57.5" fill="#7F56D9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.1157 55.016C57.6264 55.8862 56.3736 55.8862 55.8843 55.016L49.075 42.9074C48.5951 42.0542 49.2117 41 50.1907 41L63.8093 41C64.7883 41 65.4048 42.0542 64.925 42.9074L58.1157 55.016ZM55.0161 58.1157C55.8862 57.6264 55.8862 56.3736 55.0161 55.8843L42.9074 49.075C42.0542 48.5951 41 49.2117 41 50.1906L41 63.8093C41 64.7883 42.0542 65.4048 42.9074 64.925L55.0161 58.1157ZM58.1157 58.984C57.6264 58.1138 56.3736 58.1139 55.8843 58.984L49.075 71.0926C48.5952 71.9459 49.2117 73 50.1907 73H63.8093C64.7883 73 65.4048 71.9458 64.925 71.0926L58.1157 58.984ZM58.984 55.8843C58.1138 56.3736 58.1138 57.6264 58.984 58.1157L71.0926 64.925C71.9459 65.4048 73 64.7883 73 63.8093V50.1907C73 49.2118 71.9458 48.5952 71.0926 49.075L58.984 55.8843Z" fill="white"/>
        </svg>
        ,title:'Sign Up',text:"Create your OrraLearn account by clicking the \"Sign Up\" button"},
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
            <circle cx="57.5" cy="57.5" r="57.5" fill="#EB9481"/>
            <path d="M57 73C55.6667 73 54.5556 72.5694 53.6667 71.7083C52.7778 70.8472 52.3333 69.8056 52.3333 68.5834C52.3333 67.889 52.4722 67.2638 52.75 66.7083C53.0278 66.1528 53.5139 65.5416 54.2083 64.875C54.9306 64.2083 55.5 63.5834 55.9167 63C56.3611 62.389 56.5833 61.8611 56.5833 61.4166V59.9166C55.9722 59.7778 55.4306 59.5 54.9583 59.0834C54.5139 58.6389 54.2222 58.111 54.0833 57.5H52.5833C52.1111 57.5 51.5556 57.7222 50.9167 58.1667C50.2778 58.611 49.6667 59.1528 49.0833 59.7917C48.5 60.4306 47.9167 60.9027 47.3333 61.2083C46.7778 61.5139 46.1389 61.6667 45.4167 61.6667C44.1667 61.6667 43.1111 61.2222 42.25 60.3333C41.4167 59.4445 41 58.3333 41 57C41 55.6667 41.4167 54.5556 42.25 53.6667C43.1111 52.7778 44.1667 52.3333 45.4167 52.3333C46.5833 52.3333 47.5833 52.75 48.4167 53.5833C49.25 54.4167 50 55.125 50.6667 55.7083C51.3333 56.2917 51.9722 56.5833 52.5833 56.5833H54.0833C54.2222 55.9444 54.5139 55.4167 54.9583 55C55.4306 54.5556 55.9722 54.2778 56.5833 54.1667V52.6667C56.5833 51.9444 56.0278 51.0278 54.9167 49.9167L54.0417 49.0417C52.9028 47.9028 52.3333 46.6944 52.3333 45.4167C52.3333 44.1667 52.7778 43.125 53.6667 42.2917C54.5833 41.4306 55.6944 41 57 41C58.3333 41 59.4445 41.4306 60.3333 42.2917C61.2222 43.1528 61.6667 44.1944 61.6667 45.4167C61.6667 46.8333 60.9722 48.1667 59.5834 49.4167C58.1944 50.6944 57.5 51.7778 57.5 52.6667V54.1667C58.1389 54.2778 58.6667 54.5556 59.0834 55C59.5278 55.4167 59.8056 55.9444 59.9166 56.5833H61.4166C62.3611 56.5833 63.4445 55.875 64.6667 54.4583C65.9166 53.0417 67.2222 52.3333 68.5834 52.3333C69.8333 52.3333 70.875 52.7917 71.7083 53.7083C72.5694 54.5972 73 55.6944 73 57C73 58.3333 72.5694 59.4445 71.7083 60.3333C70.8472 61.2222 69.8056 61.6667 68.5834 61.6667C67.4166 61.6667 66.4306 61.2638 65.625 60.4584C64.8195 59.6528 64.0694 58.9584 63.375 58.375C62.6805 57.7917 62.0278 57.5 61.4166 57.5H59.9166C59.6944 58.8333 58.889 59.6389 57.5 59.9166V61.4166C57.5 62.2499 58.1944 63.3195 59.5834 64.625C60.9722 65.9306 61.6667 67.2499 61.6667 68.5834C61.6667 69.8333 61.2083 70.875 60.2917 71.7083C59.4027 72.5694 58.3056 73 57 73Z" fill="white"/>
        </svg>,title:'Explore Courses',text:"We build courses by curating YouTube lessons in a comprehensive course."},
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
            <circle cx="57.5" cy="57.5" r="57.5" fill="#FF9B26"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58 58C58 58 60 52.6442 60 48.8571C60 45.07 59.1046 42 58 42C56.8954 42 56 45.07 56 48.8571C56 52.6442 58 58 58 58ZM58 58C58 58 60.373 63.2013 63.0507 65.8792C65.7286 68.5571 68.5326 70.0947 69.3138 69.3138C70.0947 68.5326 68.5571 65.7286 65.8792 63.0507C63.2013 60.373 58 58 58 58ZM58 58C58 58 63.3558 56 67.1429 56C70.9299 56 74 56.8954 74 58C74 59.1046 70.9299 60 67.1429 60C63.3558 60 58 58 58 58ZM58 58C58 58 52.7987 60.373 50.1208 63.0507C47.4429 65.7286 45.9052 68.5326 46.6863 69.3138C47.4673 70.0947 50.2714 68.5571 52.9492 65.8792C55.6271 63.2013 58 58 58 58ZM58 58C58.0045 58.0118 60 63.36 60 67.1429C60 70.9299 59.1046 74 58 74C56.8954 74 56 70.9299 56 67.1429C56 63.3558 58 58 58 58ZM58 58C58 58 52.6442 56 48.8571 56C45.07 56 42 56.8954 42 58C42 59.1046 45.07 60 48.8571 60C52.6442 60 58 58 58 58ZM58 58C58 58 63.2013 55.6271 65.8792 52.9492C68.5571 50.2713 70.0947 47.4673 69.3138 46.6863C68.5326 45.9052 65.7286 47.4429 63.0507 50.1208C60.373 52.7987 58 58 58 58ZM52.9492 50.1208C55.6271 52.7987 58 58 58 58C58 58 52.7987 55.6271 50.1208 52.9492C47.4429 50.2714 45.9052 47.4673 46.6863 46.6863C47.4673 45.9052 50.2714 47.4429 52.9492 50.1208Z" fill="white"/>
        </svg>,title:'Practice & Learn',text:"Access high-quality learning materials, including video tutorials and assignments."},
    {icon:<svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
            <circle cx="57.5" cy="57.5" r="57.5" fill="#369B83"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58 58C58 58 60 52.6442 60 48.8571C60 45.07 59.1046 42 58 42C56.8954 42 56 45.07 56 48.8571C56 52.6442 58 58 58 58ZM58 58C58 58 60.373 63.2013 63.0507 65.8792C65.7286 68.5571 68.5326 70.0947 69.3138 69.3138C70.0947 68.5326 68.5571 65.7286 65.8792 63.0507C63.2013 60.373 58 58 58 58ZM58 58C58 58 63.3558 56 67.1429 56C70.9299 56 74 56.8954 74 58C74 59.1046 70.9299 60 67.1429 60C63.3558 60 58 58 58 58ZM58 58C58 58 52.7987 60.373 50.1208 63.0507C47.4429 65.7286 45.9052 68.5326 46.6863 69.3138C47.4673 70.0947 50.2714 68.5571 52.9492 65.8792C55.6271 63.2013 58 58 58 58ZM58 58C58.0045 58.0118 60 63.36 60 67.1429C60 70.9299 59.1046 74 58 74C56.8954 74 56 70.9299 56 67.1429C56 63.3558 58 58 58 58ZM58 58C58 58 52.6442 56 48.8571 56C45.07 56 42 56.8954 42 58C42 59.1046 45.07 60 48.8571 60C52.6442 60 58 58 58 58ZM58 58C58 58 63.2013 55.6271 65.8792 52.9492C68.5571 50.2713 70.0947 47.4673 69.3138 46.6863C68.5326 45.9052 65.7286 47.4429 63.0507 50.1208C60.373 52.7987 58 58 58 58ZM52.9492 50.1208C55.6271 52.7987 58 58 58 58C58 58 52.7987 55.6271 50.1208 52.9492C47.4429 50.2714 45.9052 47.4673 46.6863 46.6863C47.4673 45.9052 50.2714 47.4429 52.9492 50.1208Z" fill="white"/>
        </svg>,title:'Track Progress & Succeed',text:"Monitor your progress with our tracking tools.\n"},
]
const Checkout = () => {
    return (
        <div className={` w-full ${styles.paddingX} bgTwo`}>

            <div className={`w-full  ${styles.homePageGenPadding} flex flex-col items-center `}>
                <div className={'w-full flex flex-col mb-[20px]'}>
                    <h6 className={`w-full  ${styles.homeHeadingStyle}`}>HOW IT WORKS</h6>
                    <h1 className={`w-full  ${styles.homeSubHeadingStyle}`}>Check out this simple guides to <br/> get started</h1>
                </div>
                <p className={`sm:w-9/12 ${styles.homeHeadingDescriptionStyle} mb-[60px]`}>We’re building an engine that educates people at scale and empowers them with in-demand skills of the future. Achieve this in four steps.</p>
                <div className={'isolate mx-auto  grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4 '}>
                    {checkouElements.map((element,i)=>(
                        <div className={'w-full flex flex-col gap-y-4  items-center p-6 rounded-[20px] h-[300px] checkOutBorder'} key={i}>
                            {element.icon}
                            <h6 className={'font-bold'}>{element.title}</h6>
                            <p className={'text-black text-opacity-80 text-center text-sm'}>{element.text}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Checkout;