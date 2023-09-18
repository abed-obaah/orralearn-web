import React from 'react'
import { FaHtml5,FaChevronDown, FaCss3, FaJs } from 'react-icons/fa'
import { FcSettings } from 'react-icons/fc'
import SplitPane from 'react-split-pane'

const FrontEndEditor = () => {
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
        { /* alert section */}


        { /* header section */}


        {/* coding section */}

        <div>
          {/* horrizontal */}
          <SplitPane split='horizontal' minSize={100} maxSize={-100} defaultSize={"50%"}>

          {/* top coding section */}
          <SplitPane split='vertical' minSize={500}>
            {/**html code */}
            <div className='w-full h-full flex flex-col items-start justify-start'>


              <div className='w-full flex items-center justify-between'>

                <div className='bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500'>
                  <FaHtml5 className='text-xl text-red-500'/>
                  <p className='text-gray-300 font-semibold '>HTML</p>
                </div>

                {/**icons */}

                <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-gray-400'/>
                </div>
              </div>
              <div>code mirror</div>

            </div>

            <SplitPane split='vertical' minSize={500}>

              {/**css code */}
                <div className='w-full h-full flex flex-col items-start justify-start'>


              <div className='w-full flex items-center justify-between'>

                <div className='bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500'>
                  <FaCss3 className='text-xl text-sky-500'/>
                  <p className='text-gray-300 font-semibold '>CSS</p>
                </div>

                {/**icons */}

                <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-gray-400'/>
                </div>
              </div>
              <div>code mirror</div>

            </div>

              {/**js code */}

                <div className='w-full h-full flex flex-col items-start justify-start'>


              <div className='w-full flex items-center justify-between'>

                <div className='bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500'>
                  <FaJs className='text-xl text-yellow-500'/>
                  <p className='text-gray-300 font-semibold '>JS</p>
                </div>

                {/**icons */}

                <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                  <FcSettings className='text-xl'/>
                  <FaChevronDown className='text-xl text-gray-400'/>
                </div>
              </div>
              <div>code mirror</div>

            </div>
              
            </SplitPane>
          </SplitPane>

          <div></div>
          {/* bottom coding section */}
          </SplitPane>


        </div>
      </div>
    </>
  )
}

export default FrontEndEditor