import React, { useEffect, useState } from 'react'
import loader from "../images/loader.svg"
import phoneClose from "../images/phone-close.svg"
import { Tooltip } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import user from "../images/user.png"
export default function CallPage() {
    const [calling,setCalling]=useState(true)
    const [type,setType]=useState("")

    const navigateTo = useNavigate();

    useEffect(()=>{
        let parts = window.location.pathname.split('/');
        setType(parts.pop());
    })

  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#313131] flex flex-col items-center justify-around'>
                <div className='w-full flex h-3/6 mt-8'>
                    <div className='w-3/6  bg-[#f1f1f1] mr-3 ml-6 rounded-3xl flex justify-center items-center'>
                        {
                            type==="video"?
                            <img className='w-12' src={loader} alt="loader" />
                            :
                            <img className='w-12' src={user} alt=""  />
                        }
                    </div>
                    <div className='w-3/6  bg-[#f1f1f1] ml-3 mr-6 rounded-3xl flex justify-center items-center'>
                        {
                            type==="video"?
                            <img className='w-12' src={loader} alt="loader" />
                            :
                            <img className='w-12' src={user} alt=""  />
                        }
                    </div>
                </div>
                <div className='w-12 bg-[#f70909] rounded-full '>
                    <Tooltip content="Close the call" style='light'>
                        <img onClick={()=>navigateTo(-1)} className='cursor-pointer pt-2 pb-2 pl-2 pr-2' src={phoneClose} alt="close" />
                    </Tooltip>
                </div>
        </div>

    </div>
  )
}
