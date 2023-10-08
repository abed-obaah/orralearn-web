import {storeImages} from "../../util/usefull-data";


export default function QA() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mx-auto my-auto rounded-lg max-w-7xl bg-white sm:px-6 lg:px-8">
        <h1 className="py-20 mx-auto text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
          The Orralearn Community is currently on the Mobile App and is currently Available on:
        </h1>
        <ul role="list" className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {storeImages.map((person) => (
            <li key={person.email} className="mx-auto col-span-1 flex flex-col text-center">
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center"> 
                  {person.imageUrl.map((image, index) => (
                    <img key={index} className="mx-auto flex-shrink-0" src={image} alt="" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
