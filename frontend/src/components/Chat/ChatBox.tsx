import { AttachDocSvg, EmojiSvg, RecordSvg, SendSvg } from '../../assets/data'
const ChatBox = () => {
  return (
    <div className='  bg-customSilver-light flex justify-center items-center  w-full'>
        <div className=' bg-customSilver w-1/6 h-[60px] justify-center flex items-center '>
         <span className='w-[50px] md:w-[55px] lg:w-[60px] grid grid-cols-2 gap-2 '>
         <EmojiSvg />   
         <AttachDocSvg />
         </span>
        </div>
        <div className=' w-4/6 h-full '>
        <form className='flex  items-center justify-center w-full rounded-full border-none   bg-transparent outline-none   text-gray-900  placeholder:px-2  placeholder:text-gray-400  sm:text-sm sm:leading-6'>
        <input
          id="message"
          name="message"
          type="text"
          placeholder="Type your message here.."
          className="block w-full focus:ring-1 focus:ring-inset focus:ring-transparent rounded-full bg-transparent outline-none  border-none px-4 py-1.5 md:py-2.5 text-bodySmall md:text-bodyDefault placeholder:text-bodySmall placeholder:px-2  placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        <span className=' w-[35px] md:w-[45px] lg:w-[50px] block'>
          <SendSvg />
          </span>
        </form>
        
        </div>
        <div className=' w-1/6 h-[60px] flex items-center justify-center'>
          <span className='w-[30px] lg:w-[40px]'>
             <RecordSvg />
          </span>
        </div>
    </div>
  )
}

export default ChatBox