import React from 'react'
import { Flowbite } from 'flowbite-react/lib/esm/components'
import { useState } from 'react'
import { useEffect } from 'react'
import { Avatar } from 'flowbite-react';
export default function MainPageHeader(props) {
  const [text,setText] = useState("")


  function handleText(e){
    setText(e.target.value)
  }

  function search(e){
      if(e){
        e.preventDefault();
      }
      if(text==""){
        props.getUserData();
      }else{
        let array = props.userData.contacts.filter((val)=>{
          let name = val?.name?.toLowerCase();
          let lowerText=text?.toLowerCase()
          if(name?.includes(text)|| val?.name?.includes(text) || name?.includes(lowerText)){
            return val
          }
        })
        props.handleUserContacts(array)
      }
  }

  useEffect(()=>{
    search();
  },[text])

  return (
    <div className="sticky flex justify-center mt-6 px-2 xl:px-4 xl:px-0 items-center">
      {
       props?.width<1240 &&
        <div className='w-12 ml-1' onClick={()=>props.handleSideBar("open")}>
          <Avatar
              img={props.userData?.profileImageUrl}
              rounded={true}
              size="md"
            ></Avatar>
        </div>
      }
        <form  className='shadow-lg ml-2 xl:ml-0 rounded-xl  w-full xl:w-5/6 h-12 text-[#313131] bg-white w-6/6'>   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-[#111B21] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={(e)=>handleText(e)}  type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#111B21] focus:border-[#111B21] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#111B21]" placeholder="Search a contact..." required/>
              <button type="submit" onClick={(e)=>search(e)} class="text-white absolute right-2.5 bottom-2.5 bg-[#111B21] hover:duration-500 duration-500 hover:bg-[#a185e7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>
    </div>
  )
}
