import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Front End Development',
    title: 'Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    btnName:'Get Started',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name:'Back end development',
    title:"Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects",
    role:"user",
    email:"abed@gmail.com",
    telephone:"9058389203",
    btnName:"Get Started",
    imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name:'Back end development',
    title:"Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects",
    role:"user",
    email:"abed@gmail.com",
    telephone:"9058389203",
    btnName:"Get Started",
    imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name:'Back end development',
    title:"Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects",
    role:"user",
    email:"abed@gmail.com",
    telephone:"9058389203",
    btnName:"Get Started",
    imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name:'Back end development',
    title:"Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects",
    role:"user",
    email:"abed@gmail.com",
    telephone:"9058389203",
    btnName:"Get Started",
    imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name:'Back end development',
    title:"Complete breakdown guide of becoming a frontend developer in 2023. Get the basics of web form the ground up with hands on practice + real projects",
    role:"user",
    email:"abed@gmail.com",
    telephone:"9058389203",
    btnName:"Get Started",
    imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  
]

export default function LeaningPaths() {
  return (
    <>
        <h3 className=' text-2xl bold ml-3 pb-2'>All Learning Paths</h3>
            <div className="bg-white p-10 rounded-md"> 
        <ul role="list" className="  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className=" text-sm font-medium text-black">{person.name}</h3>
               
              </div>
              <p className="mt-2 text-sm text-gray-500">{person.title}</p>
            </div>
          </div>
          <div>
            <div className=" ml-8">
              <div className="">
                <a
                  href={`mailto:${person.btnName}`}
                  className="relative text-purple-700 inline-flex w-20 flex-1  gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  {person.btnName}
                </a>
              </div>
              
            </div>
          </div>
        </li>
      ))}
        </ul>
            </div>
    </>
    
    
  )
}
