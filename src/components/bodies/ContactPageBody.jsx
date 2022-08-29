import React from 'react'
import profileImage from "../../images/butters.png"


export default function ContactPageBody(props) {


  const customStyle={
    height:props.height,
    scrollbarWidth:"none",
    overflowX: "hidden",
    overflowY:"scroll",
    marginRight:"-20px"
  }

  return (
    <div style={customStyle} className='xl:px-16 px-8 overflow-scroll '>

         <div className="flex items-end mt-4 gap-2 ">
           {/*  <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1"/> */}
            <div className='w-4 h-6'></div>
            <div className=" flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
             <span style={{backgroundColor:"#BBDEFD"}}  className="ml-2 px-4 py-2 rounded-lg inline-block rounded-bl-none text-gray-600">Can be verified on any platform using docker</span>
            </div>
         </div>
         <div className="flex items-end gap-2 mt-4">
          {/*   <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1"/> */}
          <div className='w-4 h-6'></div>
            <div className="  flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <span style={{backgroundColor:"#BBDEFD"}}  className="ml-2  px-4 py-2 rounded-lg inline-block rounded-bl-none text-gray-600">Can be verified on any platform using docker</span>
            </div>
         </div>
         
         <div className="flex items-end mt-4">
            <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1"/>
            <div  className="  flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <span style={{backgroundColor:"#BBDEFD"}} className=" ml-2  px-4 py-2 rounded-lg inline-block rounded-bl-none  text-gray-600">Can be verified on any platform using docker</span>
            </div>
         </div>


         <div className="flex items-end justify-end mt-4">
            <div className="mr-2 flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <span  className="px-4  py-2 rounded-lg inline-block rounded-br-none bg-[#313131] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
            </div>
{/*             <img src={profileImage} alt="My profile" className="w-6 h-6 rounded-full order-2"/> */}
            <div className='w-6 h-6 order-2'></div>


         </div>

         <div className="flex items-end justify-end mt-4">
            <div className="mr-2 flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#313131] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
            </div>
           {/*  <img src={profileImage} alt="My profile" className="w-6 h-6 rounded-full order-2"/> */}
           <div className='w-6 h-6 order-2'></div>
         </div>

         <div className="flex items-end justify-end mt-4">
            <div className="mr-2 flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#313131] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
            </div>
            <img src={profileImage} alt="My profile" className="w-6 h-6 rounded-full order-2"/>
         </div>

         <div className="flex items-end mt-4">
{/*             <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1"/> */}
            <div className='w-6 h-6'></div>
            <div className=" flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <span style={{backgroundColor:"#BBDEFD"}}  className=" ml-2  px-4 py-2 rounded-lg inline-block rounded-bl-none text-gray-600">Can be verified on any platform using docker</span>
            </div>
         </div>

         <div className="flex items-end mt-4">
            <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1"/>
            <div className=" flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <span style={{backgroundColor:"#BBDEFD"}}  className=" ml-2 px-4 py-2 rounded-lg inline-block rounded-bl-none  text-gray-600">Can be verified on any platform using docker  rm using docker rm using docker</span>
            </div>
         </div>


         <div className="flex items-end justify-end mt-4">
            <div className="mr-2 flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#313131] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
            </div>
            <img src={profileImage} alt="My profile" className="w-6 h-6   rounded-full order-2"/>
         </div>

    </div>
  )
}
