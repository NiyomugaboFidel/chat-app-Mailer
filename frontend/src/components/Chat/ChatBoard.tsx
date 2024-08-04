import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'
import ChatBody from './ChatBody'

const ChatBoard:React.FC = () => {
  return (
    <div>
        <div className='w-full h-[100vh] border divide-solid flex flex-col justify-center items-center '>
            <div className='bg-white border px-[20px] w-full max-h-1/6 h-[60px]'>
               <ChatHeader />
            </div>
            <div className='bg-customSilver border divide-solid w-full h-5/6 '>
              <ChatBody />
            </div>
            <div className='bg-white border max-h-1/6 h-[65px] w-full flex items-center justify-center'>
              <ChatBox />
            </div>
        </div>
    </div>
  )
}

export default ChatBoard