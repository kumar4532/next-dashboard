import { SendHorizonal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ChatSection = () => {
    return (
        <div className='bg-[#F9FAFB] w-full lg:w-[68%] flex flex-col justify-center items-center space-y-6 mt-6 md:mt-0'>
            <Image src="/Logo.png" alt="logo" width={60} height={60} />
            <h1 className='md:text-3xl text-xl font-semibold'>Welcome to the AI Chat Assistant</h1>
            <div className="relative w-[80%]">
                <input
                    type="text"
                    placeholder='Ask your question here...'
                    className='border-2 rounded-sm p-2 pr-10 w-full bg-white'
                />
                <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    <SendHorizonal className='text-gray-400'/>
                </button>
            </div>
        </div>
    )
}

export default ChatSection