import React, { useState } from 'react'
import profileImage from "./../images/butters.png"
import edit from "./../images/edit-2.svg"

export default function MainPageSide() {
    const [name,setName]=useState("Kağan Gencer")
  return (
    <div  className='rounded-3xl rounded-r-none w-2/6 bg-[#ACACDE] flex flex-col items-center'>
            <img className='rounded-full w-1/2 mt-12' src={profileImage} alt="profile"></img>
            <div>
                <span className='text-[#25D366] text-lg'>Your Name</span>
                <div className='flex'>
                    <input  className='bg-transparent outline-offset-0  outline-none focus:bg-transparent focus:border-b-2 focus:border-[#E5FCFF] ' value= {name}></input>
                    <img className='w-12' src={edit} alt="edit" />
                </div>
            </div>
    </div>
  )
}
