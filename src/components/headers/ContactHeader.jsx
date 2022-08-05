import React from 'react'
import { Avatar,Tooltip } from 'flowbite-react';
import video from "../../images/video.svg"
import phone from "../../images/phone.svg"
import back from "../../images/back.svg"

export default function ContactHeader() {
  return (
    <div className="sticky flex justify-center mt-5">
        <div  className=' flex justify-between shadow-lg rounded-xl  w-5/6 h-14 text-[#313131] bg-white w-6/6'>   
            <div className="flex space-y-1 font-medium dark:text-white">
                <img  className='ml-2 mr-6 w-6 rotate-180' src={back} alt="back" />
                <div className='flex flex-col'>
                    <div>
                    Jese Leos
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                    </div>
                </div>
            </div>
            <div className='flex mr-5'>
                <img className='w-7 mr-6' src={video} alt="video" />
                <img className='w-7' src={phone} alt="phone" />

            </div>
      </div>
    </div>
  )
}
