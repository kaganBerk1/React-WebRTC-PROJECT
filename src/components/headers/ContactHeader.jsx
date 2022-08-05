import React from 'react'
import { Avatar,Tooltip } from 'flowbite-react';
import video from "../../images/video.svg"
import phone from "../../images/phone.svg"
import back from "../../images/back.svg"
import { useNavigate } from 'react-router-dom';

export default function ContactHeader() {
    const navigateTo = useNavigate();
    function goBack(){
        navigateTo(-1)
    }

  return (
    <div className="sticky flex justify-center mt-6">
        <div  className=' flex justify-between shadow-lg rounded-xl  w-5/6 h-14 text-[#313131] bg-white w-6/6'>   
            <div className="flex space-y-1 font-medium dark:text-white items-center">
                <Tooltip content={"Back"} style="dark"  animation="duration-500">
                    <img style={{width:"40px",paddingLeft:"6px",paddingRight:"6px"}}  className='ml-3 pt-2 pb-2  rounded-full  mt-4 mb-4  w-6 hover:bg-[#f1f1f1] hover:duration-500 duration-500 rotate-180 cursor-pointer' onClick={goBack} src={back} alt="back" />

                </Tooltip>
                <div className='flex ml-4 flex-col'>
                    <div>
                    Jese Leos
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                    </div>
                </div>
            </div>
            <div className='flex mr-5 items-center'>
                <Tooltip content={"Video Call"} style="dark"  animation="duration-500">
                    <img className=' cursor-pointer w-7 mr-6' src={video} alt="video" />
                </Tooltip>
                <Tooltip content={"Phone Call"} style="dark"  animation="duration-500">
                    <img className='w-7 cursor-pointer' src={phone} alt="phone" />
                </Tooltip>

            </div>
      </div>
    </div>
  )
}
