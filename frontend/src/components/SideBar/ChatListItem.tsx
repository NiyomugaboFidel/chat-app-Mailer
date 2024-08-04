import React from 'react'
import Avatar from '../Avatar'
import Twotick from '../../assets/data'
const ChatListItem:React.FC = () => {
  return (
    <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
    <div className='flex justify-center items-center px-2  gap-2'>
            <Avatar />       
           <div className='flex items-start justify-center flex-col'>
              <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
              <p className='text-bodySmall'>How are you doing ?</p>
           </div>
           </div>


           <div className='flex flex-col'>
             <span className='text-bodySmall'>16:55</span>
             <span className='text-bodySmall w-[18px]'>
                <Twotick />
                {/* <Onetick /> */}
             </span>
           </div>
    </div>
  )
}

export default ChatListItem