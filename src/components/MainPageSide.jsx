import 'flowbite';
import React, { useRef, useState } from 'react'
import profileImage from "./../images/butters.png"
import edit from "./../images/edit.svg"
import copyIcon from "./../images/copy-1.svg"
import { Avatar, Tooltip } from 'flowbite-react';

export default function MainPageSide() {
    const [name,setName]=useState("Kağan Gencer")
    const [about,setAbout]=useState("Hey there, I am using... asdasdasd asdasdas asdasd")
    const [isCopied, setCopied] = React.useState(false);

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

    function copy(){
        setCopied(true);

        navigator.clipboard.writeText("554781-554-7878")

        setTimeout(()=>{
          setCopied(false);
        },800)
      }
    return (
    <div  className='rounded-3xl rounded-r-none w-2/6 bg-[#111B21] flex flex-col items-center'>
            <div className=' mt-12 drop-shadow-xl hover:scale-110 duration-500 hover:duration-500 '>
              <Avatar
                img={profileImage}
                bordered={true}
                rounded={true}
                size="xl"
                statusPosition="top-right"
            />
            </div>
            <div className='mt-8  w-5/6 pr-2 pl-2 justify-between'>
                <span className='text-[#B8336A] text-xl font-semibold cursor-default'>Your name</span>
                <div className='flex justify-between items-center'>
                    <input ref={nameInput}   className='text-[#f1f1f1] focus:opacity-100 opacity-80 cursor-pointer w-5/6 bg-transparent outline-offset-0  outline-none focus:bg-transparent font-normal focus:text-[#fff] text-xl focus:border-b-2 mt-2 border-b-2 border-transparent focus:border-[#B8336A] ' value= {name}></input>
                    <img className='w-6 cursor-pointer mb-1 duration-300 hover:rotate-6 ' onClick={handleInputDisabled} src={edit} alt="edit" />
                </div>
            </div>
            <div className=' w-5/6 pr-2 pl-2 justify-between mt-12 '>
                <span className='text-[#B8336A]  text-xl font-semibold cursor-default'>About</span>
                <div className='flex justify-between items-center'>
                    <textarea ref={aboutInput}  className='focus:text-[#fff] focus:opacity-100 opacity-80 text-[#f1f1f1] mt-2 cursor-pointer w-5/6 bg-transparent outline-offset-0 resize-none outline-none focus:bg-transparent focus:border-b-2 text-xl focus:border-[#B8336A] border-b-2 border-transparent'  value= {about} cols="20" rows="3"></textarea>
                 
                    <img className='w-6 cursor-pointer  duration-300 hover:rotate-6 ' onClick={handleTextArea} src={edit} alt="edit" />
                </div>
            </div>
            <div className=' w-5/6 pr-2 pl-2 justify-between mt-2 flex flex-col '>
                <span className='text-[#B8336A]  text-xl font-semibold cursor-default'>Your Id</span>
                <div className='flex justify-between items-center'>
                    <span className='text-[#fff] text-xl focus:opacity-100 opacity-80 cursor-default mt-2 '>554781-554-7878</span>
                        <Tooltip content={isCopied?"Copied ✔":"Copy "}>

                            <img onClick={()=>copy()} className='w-6 cursor-pointer  duration-300 hover:rotate-6' src={copyIcon} alt="copy" />

                        </Tooltip>
                </div>
            </div>
    </div>
  )
}
