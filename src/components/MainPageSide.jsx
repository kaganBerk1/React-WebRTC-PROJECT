import React, { useRef, useState } from 'react'
import profileImage from "./../images/butters.png"
import edit from "./../images/edit-2.svg"

export default function MainPageSide() {
    const [name,setName]=useState("Kağan Gencer")
    const [about,setAbout]=useState("Hey there, I am using... asdasdasd asdasdas asdasd")

    const [disabled,setDisabled]=useState(true)
    const nameInput = useRef(null);
    const aboutInput = useRef(null);
    function handleInputDisabled(){
        if(disabled){
            setDisabled(false)
        }else{
            setDisabled(true)
            nameInput.current.focus();
        }
    }
    function handleTextArea(){
        aboutInput.current.focus();
    }
    return (
    <div  className='rounded-3xl rounded-r-none w-2/6 bg-[#ACACDE] flex flex-col items-center'>
            <img className='rounded-full w-1/2 mt-12 drop-shadow-xl hover:scale-110 duration-500 hover:duration-500 ' src={profileImage} alt="profile"></img>
            <div className='mt-12  w-5/6 pr-2 pl-2 justify-between'>
                <span className='text-[#B8336A] text-xl font-semibold cursor-default'>Your name</span>
                <div className='flex justify-between items-center'>
                    <input ref={nameInput}   className='text-[#313131] cursor-pointer w-5/6 bg-transparent outline-offset-0  outline-none focus:bg-transparent font-normal focus:text-[#000] text-xl focus:border-b-2 mt-2 border-b-2 border-transparent focus:border-[#B8336A] ' value= {name}></input>
                    <img className='w-6 cursor-pointer mb-1 duration-300 hover:rotate-6 ' onClick={handleInputDisabled} src={edit} alt="edit" />
                </div>
            </div>
            <div className=' w-5/6 pr-2 pl-2 justify-between mt-24 '>
                <span className='text-[#B8336A]  text-xl font-semibold cursor-default'>About</span>
                <div className='flex justify-between items-center'>
                    <textarea ref={aboutInput}  className='focus:text-[#000] text-[#313131] mt-2 cursor-pointer w-5/6 bg-transparent outline-offset-0 resize-none outline-none focus:bg-transparent focus:border-b-2 text-xl focus:border-[#B8336A] border-b-2 border-transparent'  value= {about} cols="20" rows="4"></textarea>
                 
                    <img className='w-6 cursor-pointer  duration-300 hover:rotate-6 ' onClick={handleTextArea} src={edit} alt="edit" />
                </div>
            </div>
    </div>
  )
}
