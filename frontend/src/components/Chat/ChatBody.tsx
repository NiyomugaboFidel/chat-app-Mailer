import React from 'react'
import Message, { MessageRight } from '../Messages/Message'

const ChatBody:React.FC= () => {
  return (
    <div className='h-full'>
        <div className='h-[80vh] px-1 overflow-auto '>
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />
          <Message />
          <MessageRight />


        </div>
    </div>
  )
}

export default ChatBody