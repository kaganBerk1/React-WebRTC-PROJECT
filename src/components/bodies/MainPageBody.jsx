import React, { useState } from 'react'
import { Avatar,Tooltip } from 'flowbite-react';
import addNew from "../../images/addNew-1.svg"
import AddNewModal from '../model/AddNewModal';
import { useNavigate  } from "react-router-dom";
export default function MainPageBody(props) {
  let dummyContacts=[
    {
      id:1,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:2,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
      
    },
    {
      id:3,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:4,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:5,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:6,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:7,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:8,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:9,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:9,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
    {
      id:9,
      name:"Jese Leos",
      date:"Joined in August 2014",
      img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      time:"09.05PM",
    },
  ]

  const [openModal,setOpenModal]= useState(false)
  let navigateTo = useNavigate();

  const customStye={
    height:props.height,
    scrollbarWidth:"none",
    overflowX: "hidden",
    overflowY:"scroll",
    marginRight:"-20px"
  }

  function onCloseModal(){
    setOpenModal(false)
  }
  function onOpenModal(){
    setOpenModal(true)
  }

  function handleHistory(id) {
    navigateTo(`/contact/${id}`);
  }
  return (
    <div style={customStye} className="flex flex-1 flex-col  gap-4 mt-6 px-16 ml-1 items-center">
        {
          dummyContacts.map((val)=>{
            return(
              <div onClick={()=>handleHistory(val.id) } className='w-full flex cursor-pointer hover:rotate-1 bg-[#eeeeee] hover:bg-slate-200 p-3 rounded-lg hover:duration-500 duration-500 justify-between mr-3 '>
                <Avatar
                  img={val.img}
                  rounded={true}
                  size="md"
                >
                  <div className="space-y-1 font-medium w-full dark:text-white">
                      <span>{val.name}</span>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {val.date}
                    </div>
                  </div>
                </Avatar>
                <span className="text-sm text-gray-500 dark:text-gray-400">{val.time}</span>
              </div>
            )
          })
        }
        <div  onClick={()=>setOpenModal(true)} className='w-14 drop-shadow-2xl cursor-pointer fixed bottom-20 z-20 hover:w-20 hover:duration-500 duration-500'>
          <Tooltip content={"Add ➕"} style="dark"  animation="duration-500">
            {
              !props.remove&&<img src={addNew}  alt="add new" />
            }
          </Tooltip>
        </div>
        {
          openModal&&<AddNewModal openModal={openModal} onClose={onCloseModal} onOpen={onOpenModal}></AddNewModal>
        }
    </div>
  )
}
