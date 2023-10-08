import { Fragment } from 'react'
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { GrLocation } from "react-icons/gr";
import { BsEmojiSmile,BsCalendar } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { FiImage } from "react-icons/fi";
import community from '../../assets/community.jpg'
import { EllipsisVerticalIcon,EllipsisHorizontalIcon  } from '@heroicons/react/20/solid'
// import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'


const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
  }
  const clients = [
    {
      id: 1,
      name: 'Tuple',
      imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
      lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
    },
    // {
    //   id: 2,
    //   name: 'SavvyCal',
    //   imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    //   lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
    // },
    // {
    //   id: 3,
    //   name: 'Reform',
    //   imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    //   lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
    // },
  ]

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      imageUrlBack:community,
    comment:
      'sLorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '15 hours ago',
    PostFeat: [
        { name: 'like', href: '#', color: 'fill-red-500' },
        { name: 'comment', href: '#', color: 'fill-indigo-500' },
        { name: 'save', href: '#', color: 'fill-indigo-500' },
        { name: 'share', href: '#', color: 'fill-indigo-500' },
      ],
    assigned: { name: 'Kristin Watson', href: '#', number:254 },
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'ATO Bradley', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: 'just now',
    comment:'Hey Amarachi, I totally agree with you. Learning on Orralearn will be impactful and filled with knowledge. Can’t wait for the website to be fully released.'
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'like', href: '#', color: 'fill-red-500' },
      { name: 'comment', href: '#', color: 'fill-indigo-500' },
      { name: 'save', href: '#', color: 'fill-indigo-500' },
      { name: 'share', href: '#', color: 'fill-indigo-500' },
    ],
    
  },
//   {
//     id: 4,
//     type: 'comment',
//     person: { name: 'ATO Bradley', href: '#' },
//     imageUrl:
//       'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
//     comment:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
//     date: 'just now',
//   },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Community() {
  

  return (
    <>
        <div className="bg-white rounded-lg shadow sm:rounded-lg max-w-3xl h-40">
            <div className="px-8 py-5 sm:p-6 inline-flex items-center space-x-4">
                <div className="flex-shrink-0 -mt-4 mr-5">
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <form className="-mt-4 w-96 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="What's on your mind?"
                        />
                    </div>
                </form>
            </div>
            <div className="flex">
                <div className="flex items-center ml-12 px-8">
                    <GrLocation style={{ marginRight: '16px' }} />
                    <BsEmojiSmile style={{ marginRight: '16px' }} /> 
                    <FiImage style={{ marginRight: '16px' }} />
                    <BsCalendar/>
                </div>
                <div className="flex ml-44">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>


      <div>
        <main className="lg:-ml-5">
            <div className="xl:pr-96">
                <div className="mt-2 rounded-md px-4 py-0 sm:px-6 lg:px-8 lg:py-6">
                    <div className="flow-root bg-white">
                        <ul role="list" className="-mb-8">
                            {activity.map((activityItem, activityItemIdx) => (
                                <li key={activityItem.id}>
                                    <div className="relative pb-8">
                                        {activityItemIdx !== activity.length - 2 && (
                                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        )}
                                        <div className="relative flex items-start space-x-3">
                                        <div className="relative flex items-start space-x-3">
                                                    {activityItem.type === 'comment' ? (
                                                    <>
                                                        <div className="relative">
                                                        <img
                                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                            src={activityItem.imageUrl}
                                                            alt=""
                                                        />

                                                        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                        <div>
                                                            <div className="text-sm">
                                                            <a href={activityItem.person.href} className="font-medium text-gray-900">
                                                                {activityItem.person.name}
                                                            </a>
                                                            </div>
                                                            <p className="mt-0.5 text-sm text-gray-500">{activityItem.date}</p>
                                                        </div>
                                                        <div className="mt-2 text-sm text-gray-700">
                                                            <p>{activityItem.comment}</p>
                                                            {/* imageUrlBack */}
                                                            <a href="#" className=' text-blue-700'>See more</a>
                                                            <img
                                                            className=" mt-5 flex h-full w-full items-center justify-center ring-8 ring-white"
                                                            src={activityItem.imageUrlBack }
                                                            alt=""
                                                        />
                                                        <div className="text-sm text-gray-500 py-6">
                                                                    <a href={activityItem.person} className="font-medium text-gray-900">
                                                                    {activityItem.person.name}
                                                                    </a>{' '}
                                                                    and{' '}
                                                                    <a href={activityItem.assigned} className="font-medium text-gray-900">
                                                                    {activityItem.assigned.number}
                                                                    </a>{' '}
                                                                    <span className="whitespace-nowrap">Others</span>
                                                            </div>
                                                            <div className="relative">
                                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                            <div className="w-full border-t border-gray-300" />
                                                        </div>
                                                        <div className="relative flex justify-center">
                                                            <span className="bg-white px-2 text-gray-500">
                                                            {/* <PlusIcon className="h-5 w-5 text-gray-500" aria-hidden="true" /> */}
                                                            </span>
                                                        </div>
                                                        </div>
                                                        <div className="text-sm leading-8 text-gray-500 flex flex-wrap">
                                                        {activityItem.PostFeat.map((PostFeat) => (
                                                            <Fragment key={PostFeat.name}>
                                                            {PostFeat.name === 'like' && (
                                                            <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                                <BiSolidLike className="h-5 w-5 text-red-500" />
                                                                <a
                                                                href={PostFeat.href}
                                                                className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900   ring-gray-200"
                                                                >
                                                                <svg
                                                                    className={classNames(PostFeat.color, 'h-1.5 w-1.5')}
                                                                    viewBox="0 0 6 6"
                                                                    aria-hidden="true"
                                                                >
                                                                    <circle cx={3} cy={3} r={3} />
                                                                </svg>
                                                                {PostFeat.name}
                                                                </a>
                                                            </div>
                                                            )}
                                                            {PostFeat.name === 'comment' && (
                                                            <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                                <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-indigo-500" />
                                                                <a
                                                                href={PostFeat.href}
                                                                className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                                >
                                                                <svg
                                                                    className={classNames(PostFeat.color, 'h-1.5 w-1.5')}
                                                                    viewBox="0 0 6 6"
                                                                    aria-hidden="true"
                                                                >
                                                                    <circle cx={3} cy={3} r={3} />
                                                                </svg>
                                                                {PostFeat.name}
                                                                </a>
                                                            </div>
                                                            )}
                                                            {PostFeat.name === 'save' && (
                                                            <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                                <TagIcon className="h-5 w-5 text-indigo-500" />
                                                                <a
                                                                href={PostFeat.href}
                                                                className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                                >
                                                                <svg
                                                                    className={classNames(PostFeat.color, 'h-1.5 w-1.5')}
                                                                    viewBox="0 0 6 6"
                                                                    aria-hidden="true"
                                                                >
                                                                    <circle cx={3} cy={3} r={3} />
                                                                </svg>
                                                                {PostFeat.name}
                                                                </a>
                                                            </div>
                                                            )}
                                                            {PostFeat.name === 'share' && (
                                                            <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                                <TagIcon className="h-5 w-5 text-indigo-500" />
                                                                <a
                                                                href={PostFeat.href}
                                                                className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                                >
                                                                <svg
                                                                    className={classNames(PostFeat.color, 'h-1.5 w-1.5')}
                                                                    viewBox="0 0 6 6"
                                                                    aria-hidden="true"
                                                                >
                                                                    <circle cx={3} cy={3} r={3} />
                                                                </svg>
                                                                {PostFeat.name}
                                                                </a>
                                                            </div>
                                                            )}
                                                        </Fragment>
                                                        ))}
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </>
                                                    
                                                    ) : activityItem.type === 'assignment' ? (
                                                    <>
                                                        <div>
                                                        <div className="relative px-1">
                                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                                            <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="min-w-0 flex-1 py-1.5">
                                                        <div className="text-sm text-gray-500">
                                                            <a href={activityItem.person.href} className="font-medium text-gray-900">
                                                            {activityItem.person.name}
                                                            </a>
                                                        </div>
                                                        <p className="mt-0.5 text-sm text-gray-500">{activityItem.date}</p>
                                                        <div className="mt-2 text-sm text-gray-700">
                                                            <p>{activityItem.comment}</p>
                                                            <img
                                                            className="mt-5 flex h-full w-full"
                                                            src={activityItem.imageUrlBack }
                                                            alt=""
                                                        />
                                                        </div>
                                                        </div>
                                                        
                                                        
                                                    </>
                                                    ) : activityItem.type === 'tags' ? (
                                                    <>
                                                    
                                                    <div className="min-w-0 flex-1 py-0 px-12 mt-2">
                                        <div className="text-sm leading-8 text-gray-500 -mt-14 flex flex-wrap">
                                        {activityItem.tags.map((tag) => (
                                            <Fragment key={tag.name}>
                                            {tag.name === 'like' && (
                                                <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                <BiSolidLike className="h-5 w-5 text-red-500" />
                                                <a
                                                    href={tag.href}
                                                    className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900   ring-gray-200"
                                                >
                                                    <svg
                                                    className={classNames(tag.color, 'h-1.5 w-1.5')}
                                                    viewBox="0 0 6 6"
                                                    aria-hidden="true"
                                                    >
                                                    <circle cx={3} cy={3} r={3} />
                                                    </svg>
                                                    {tag.name}
                                                </a>
                                                </div>
                                            )}
                                            {tag.name === 'comment' && (
                                                <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-indigo-500" />
                                                <a
                                                    href={tag.href}
                                                    className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                >
                                                    <svg
                                                    className={classNames(tag.color, 'h-1.5 w-1.5')}
                                                    viewBox="0 0 6 6"
                                                    aria-hidden="true"
                                                    >
                                                    <circle cx={3} cy={3} r={3} />
                                                    </svg>
                                                    {tag.name}
                                                </a>
                                                </div>
                                            )}
                                            {tag.name === 'save' && (
                                                <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                <TagIcon className="h-5 w-5 text-indigo-500" />
                                                <a
                                                    href={tag.href}
                                                    className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                >
                                                    <svg
                                                    className={classNames(tag.color, 'h-1.5 w-1.5')}
                                                    viewBox="0 0 6 6"
                                                    aria-hidden="true"
                                                    >
                                                    <circle cx={3} cy={3} r={3} />
                                                    </svg>
                                                    {tag.name}
                                                </a>
                                                </div>
                                            )}
                                            {tag.name === 'share' && (
                                                <div className="flex items-center gap-x-1 inline-flex rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200">
                                                <TagIcon className="h-5 w-5 text-indigo-500" />
                                                <a
                                                    href={tag.href}
                                                    className="inline-flex items-center gap-x-1 rounded-full px-2 py-1 text-xs font-medium text-gray-900  ring-gray-200"
                                                >
                                                    <svg
                                                    className={classNames(tag.color, 'h-1.5 w-1.5')}
                                                    viewBox="0 0 6 6"
                                                    aria-hidden="true"
                                                    >
                                                    <circle cx={3} cy={3} r={3} />
                                                    </svg>
                                                    {tag.name}
                                                </a>
                                                </div>
                                            )}
                                            </Fragment>
                                        ))}
                                        </div>
                                    </div>
                                                    </>
                                                    ) : null}
                                                </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <ul role="list" className="grid grid-cols-1 gap-x-1 gap-y-1 lg:grid-cols-1 xl:gap-x-1">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={client.imageUrl}
              alt={client.name}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Last invoice</dt>
              <dd className="text-gray-700">
                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                <div
                  className={classNames(
                    statuses[client.lastInvoice.status],
                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                  )}
                >
                  {client.lastInvoice.status}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
        </main>
            
      

        <aside className=" mt-16 fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l  border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        <ul role="list" className="grid grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <li
          
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <h2>Trending in your network</h2>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">#Triads Here</a>
                <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </h3>
          </div>
          
        </li>
    
        </ul>
        <ul role="list" className="grid mt-6 grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <li
          
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <h2>People also viewed</h2>
            <li className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">Christopher john</a>
            </li>
            <li className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">Christopher john</a>
            </li>
            <li className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">Christopher john</a>
            </li>
            <li className="mt-6 text-sm font-medium text-gray-900 inline-flex items-center">
                <a href="#">Christopher john</a>
            </li>
          </div>
          
        </li>
     
        </ul>
        </aside>
      </div>
    </>
  )
}
