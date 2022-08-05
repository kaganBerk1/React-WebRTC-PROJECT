import 'flowbite';
import React, { useEffect, useRef, useState } from 'react'
import profileImage from "./../images/butters.png"
import edit from "./../images/edit.svg"
import check from "./../images/check-1.svg"
import copyIcon from "./../images/copy-1.svg"
import { Avatar, Tooltip,Textarea } from 'flowbite-react';
import useClickOutside from '../helper/useClickOutside ';

export default function MainPageSide() {
    const [isCopied, setCopied] = React.useState(false);
    const [disabledInput,setDisabledInput]=useState(true)
    const [disabledTextarea,setDisabledTextarea]=useState(true)
    const [isContactPage, setIsContactPage] = React.useState(window.location.pathname.includes("contact"));
    const [name,setName]=useState(!isContactPage?"Kağan Gencer":"Jese Leos")
    const [about,setAbout]=useState(!isContactPage?"Hey there, I am using... asdasdasd asdasdas asdasd":"sevenelr sevdiğini bir gün bile untumaz derler")
    const [id,setId]=useState(!isContactPage?"554781-554-7878":"42371-554-7878")



    const nameInput = useRef(null);
    const aboutInput = useRef(null);

    const clickRefInput = React.useRef();
    const clickRefTextarea = React.useRef();

    useEffect(()=>{
        setIsContactPage(window.location.pathname.includes("contact"))
    })
    

    useClickOutside(clickRefInput,()=>{
        setDisabledInput(true)
    });

    useClickOutside(clickRefTextarea,()=>{
        setDisabledTextarea(true)
    });


    function handleInputDisabled(){
       if(disabledInput){
        setDisabledInput(false)
        setTimeout(()=>{
            nameInput.current.focus();
          },50)
       }else{
        setDisabledInput(true)
       }
    }




    function handleTextArea(){
        if(disabledTextarea){
            setDisabledTextarea(false)
            setTimeout(()=>{
                aboutInput.current.focus();
            },50)
        }else{
            setDisabledTextarea(true)
        }
 
    }

    function copy(){
        setCopied(true);

        navigator.clipboard.writeText("554781-554-7878")
        setTimeout(()=>{
          setCopied(false);
        },800)
      }
    return (
    <div  className='rounded-3xl rounded-r-none w-2/6 bg-[#111B21] flex flex-col justify-between items-center'>
            <div className=' mt-8 drop-shadow-xl hover:scale-110 duration-500 hover:duration-500 '>
              <Avatar
                img={!isContactPage?profileImage:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                bordered={true}
                rounded={true}
                size="xl"
                statusPosition="top-right"
            />
            </div>
            <div className='  w-5/6 pr-2 pl-2 justify-between'>
                <span className='text-[#B8336A] text-xl font-semibold cursor-default'>Your name</span>
                <div  ref={clickRefInput}  className='flex justify-between items-center'>
                    <input   ref={nameInput}  disabled={disabledInput}  className='text-[#f1f1f1] focus:opacity-100 opacity-80 cursor-pointer w-5/6 bg-transparent outline-offset-0  outline-none focus:bg-transparent font-normal focus:text-[#fff] text-xl focus:border-b-2 mt-2 border-b-2 border-transparent focus:border-[#B8336A] ' value= {name}></input>
                    <Tooltip  content={disabledInput?"Edit":"Save"} style="light"  animation="duration-500">
                       {!isContactPage&& <img   className={`animate-[fadeIn_1s_ease-in-out] w-5 cursor-pointer mb-1 duration-500 hover:rotate-6 `} onClick={handleInputDisabled} src={disabledInput?edit:check} alt="edit" />}
                    </Tooltip>
                </div>
            </div>
            <div className=' mt-4 w-5/6 pr-2 pl-2 justify-between  '>
                <span className='text-[#B8336A]  text-xl font-semibold cursor-default'>About</span>
                <div ref={clickRefTextarea} className='flex justify-between items-center'>
                    <textarea  disabled={disabledTextarea}  ref={aboutInput}  id="about" rows="3" className='focus:text-[#fff] focus:opacity-100 opacity-80 text-[#f1f1f1] mt-2 cursor-pointer ring-0 border-t-0 border-r-0 border-b-2 border-l-0 w-5/6 bg-transparent outline-offset-0 resize-none outline-none focus:bg-transparent focus:border-b-2 focus:ring-0  focus:outline-offset-0 text-xl focus:border-[#B8336A] border-transparent p-0' value={about}></textarea>
                    <Tooltip content={disabledTextarea?"Edit":"Save"} style="light"  animation="duration-500">
                        {
                            !isContactPage&&
                            <img className='w-5 cursor-pointer  duration-300 hover:rotate-6 ' onClick={handleTextArea} src={disabledTextarea?edit:check} alt="edit" />
                        }

                    </Tooltip>
                </div>
            </div>
            <div className=' w-5/6 xl:mb-8 pr-2 pl-2 justify-between flex flex-col '>
                <span className= ' text-[#B8336A]  text-xl font-semibold cursor-default'>Your Id</span>
                <div className='flex justify-between items-center'>
                    <span className='text-[#fff] text-xl focus:opacity-100 opacity-80 cursor-default mt-2 '>{id}</span>
                        <Tooltip content={isCopied?"Copied ✔":"Copy "} style="light"  animation="duration-500">

                            <img onClick={()=>copy()} className='w-5 cursor-pointer mt-1  duration-300 hover:rotate-6' src={copyIcon} alt="copy" />

                        </Tooltip>
                </div>
            </div>
    </div>
  )
}
