import frame from  '../../../assets/Frame 427319004.png'
const files = [
    {
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        frame,
    },
    
  ]

  const people = [
    {
      name: 'Ato Bradley',
      role: 'Founder Of orralearn',
      time: 'days ago',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
   
  ]
  
  export default function StartChallenge() {
    return (
        <div className='bg-white p-10 rounded-md'>
                     <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img src={file.source} alt="" className="pointer-events-none w-full h-80 group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>

            <div className=" pl-6 pt-10 flex sm:flex sm:items-center sm:justify-between">
                <p className=" text-xl font-bold pointer-events-none mt-2 block truncate text-gray-900">🔥Challenge 1: build a Table in HTMl</p>
                <button type="button" className="inline-flex items-center rounded-md bg-[#5E00D0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">Start</button>
            </div>
            
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
      {people.map((person) => (
        <div
          key={person.name}
          className="relative flex items-center space-x-3 rounded-lg px-6 py-5"
        >
          
          <div className="min-w-0 flex-1">
            <div className="flex mb-5">
                        <div className="flex-shrink-0 pr-4">
                            <img className="h-10 w-10 rounded-md" src={person.imageUrl} alt="" />
                        </div>
                    <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-bold text-gray-900">{person.name} <small className="text-gray-500">10{person.time}</small></p>
                    <p className="truncate text-sm text-gray-900 font-bold">{person.role}</p>
                    </a>
            </div>
               

                <div>
                        <p>Hello Everyone! ATO here from Orralearn. For the next 2 weeks, I’m hosting an HTML Table Challenge. Lorem ipsum dolor sit amet consectetur. Elit est tristique leo adipiscing. Mauris purus purus augue eget vel leo velit. Vulputate viverra tortor leo dolor quam elit volutpat eu. 
                            <br/>
                            <br/>
                        Everyone is to create a Table in HTML and submit their works before deadline.Phasellus nec amet iaculis in non quis sagittis at.</p>
                </div>
                    <div className='mt-10'>
                        <h1 className=" font-bold text-xl">🔥 The Challenge</h1>
                        <div>
                            <p>Build a table in Html. Lorem ipsum dolor sit amet consectetur. Elit est tristique leo adipiscing. Mauris purus purus augue eget vel leo velit. Vulputate viverra tortor leo dolor quam elit volutpat eu. 
                        </p>    
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className=" font-bold">Deadline: 25th sept, 2023, 11pm (2 Weeks!)</h1>
                        <div>
                            <p>Challenge yourself for 2 weeks and get rewarded with a free eBook. Lorem ipsum dolor sit amet consectetur. Elit est tristique leo adipiscing. Mauris purus purus augue eget vel leo velit. Vulputate viverra tortor leo dolor quam elit volutpat eu. Phasellus nec amet iaculis in non quis sagittis at. Malesuada amet odio purus leo. 
                        </p>    
                        </div>
                    </div>
          </div>
            
         
        </div>
      ))}
    </div>
        </div>
     
    )
  }
  