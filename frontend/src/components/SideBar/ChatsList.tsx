import React from 'react'

const ChatsList:React.FC = () => {
  return (
    <div className=' bg-white divide-y-[1px]' >
      {/* top side */}
      <div className='p-[20px]'>
        <h2 className='py-[10px] px-4 text-start text-headingH4 md:text-headingH3 font-extrabold'>Message</h2>
        <input
          id="search"
          name="searcch"
          type="text"
          placeholder="Search..."
          className="block w-full rounded-full outline-none px-4 py-1.5  text-gray-900 border placeholder:px-2  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
        />
         <div className='flex justify-start px-2 pt-3 items-start gap-[10px]'>
          <p className='text-bodySmall'>Sort by</p> <span className='text-Blue-400 text-bodySmall flex items-center justify-center  underline cursor-pointer '>Newest <span className='w-[20px] '><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2D9CDB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg></span></span>
         </div>
      </div>
      {/* bottom side  */}
      <div className=' overflow-auto h-[70vh] divide-y-[1px]'>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
         <div className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
         <div className='flex justify-center items-center px-2  gap-2'>
                    {/* avater */}
                    <div className="avatar online">
                  <div className="w-[35px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className='flex items-start justify-center flex-col'>
                   <h4 className='text-bodyDefault text-black font-medium'>John Doe</h4>
                   <p className='text-bodySmall'>How are you doing ?</p>
                </div>
                </div>


                <div className='flex flex-col'>
                  <span className='text-bodySmall'>16:55</span>
                  <span className='text-bodySmall'>read</span>
                </div>
         </div>
      </div>
    </div>
  )
}

export default ChatsList