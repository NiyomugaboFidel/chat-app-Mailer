import React from 'react'
import Twotick from '../../assets/data';

const Message:React.FC = () => {
  return (
    <div>
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header  text-black flex items-center justify-center gap-2">
    <h4 className='font-mono text-bodyDefault uppercase'>  Obi-Wan Kenobi</h4>
   
  </div>
  <div className="bg-customSilver-dark chat-bubble text-black text-bodySmall md:text-bodyDefault">
    You were the Chosen Lorem ipsum
    <div className="chat-footer opacity-80 text-bodySmall text-primary text-right flex justify-end items-end flex-col">
    <time className="text-[10px] text-black flex items-center justify-center gap-1">12:45 <span className='w-[15px]'><Twotick /></span></time>
    </div>
    </div>
 
</div>
    </div>
  )
}

export default Message






export const MessageRight: React.FC = () => {
  return (
    <div>
 <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header text-black flex items-center justify-center gap-2 "> 
    <h4 className='font-mono text-bodyDefault uppercase'> Anakin</h4>
  </div>

  <div className="chat-bubble bg-gray-200 text-black text-bodySmall md:text-bodyDefaul">
    I hate you!
  <div className="chat-footer text-bodySmall text-primary text-right flex justify-end items-end flex-col">
  <time className="text-[10px] text-black flex items-center justify-center gap-1">12:45 <span className='w-[15px]'><Twotick /></span></time>
   </div>
</div>

</div>
</div>
  );
};







