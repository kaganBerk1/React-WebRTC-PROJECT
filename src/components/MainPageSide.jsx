import 'flowbite';
import React, { useEffect, useRef, useState } from 'react'
import profileImage from "./../images/butters.png"
import edit from "./../images/edit.svg"
import check from "./../images/check-1.svg"
import dots from "./../images/dots.svg"

import copyIcon from "./../images/copy-1.svg"
import camera from "./../images/camera.png"

import { Avatar, Tooltip,Dropdown, } from 'flowbite-react';
import useClickOutside from '../helper/useClickOutside ';

import { useAuth } from '../contexts/AuthContext';
import { useNavigate  } from "react-router-dom";
import { updateUser, updateUserProfileImage } from '../services/UserServices';
import { storage } from '../firebase.config';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export default function MainPageSide(props) {
    const [isCopied, setCopied] = React.useState(false);
    const [styleChange, setStyleChanged] = React.useState(false);

    const [disabledInput,setDisabledInput]=useState(true)
    const [disabledTextarea,setDisabledTextarea]=useState(true)
    const [disaplayOptions,setDisplayOptions]=useState(false)


    let navigateTo = useNavigate();

    const {signout} =useAuth()


    const [isContactPage, setIsContactPage] = React.useState(window.location.pathname.includes("contact"));
    const [name,setName]=useState(props?.userData?.name===""?"Set Name...":props.userData?.name)
    const [about,setAbout]=useState(props?.userData?.about===""?"Set About...":props.userData?.about)
    const [profileImageUrl,setProfileImageUrl]=useState(props?.userData?.profileImageUrl===""?"":props.userData?.profileImageUrl)

    const [id,setId]=useState(props?.userData?.userId)
    const auth =useAuth()
    
    const [imageUpload,setImageUpload] = useState(null)
    const nameInput = useRef(null);
    const aboutInput = useRef(null);

    const clickRefInput = React.useRef();
    const clickRefTextarea = React.useRef();
    const uploadRef = React.useRef();
    const clickBody = React.useRef();

    const clickDots= React.useRef();

    function handleClickInput(){
        uploadRef.current.click()
    }

    useEffect(()=>{
        setIsContactPage(window.location.pathname.includes("contact"))
    })

    useEffect(()=>{
        setName(props?.userData?.name===""?"Set Name...":props.userData?.name);
        setAbout(props?.userData?.about===""?"Set About...":props.userData?.about)
        setProfileImageUrl(props?.userData?.profileImageUrl===""?"":props.userData?.profileImageUrl)
        setId(props.userData?.userId)
    },[props.userData])
    

    useClickOutside(clickRefInput,()=>{
        setDisabledInput(true)
    });

    useClickOutside(clickRefTextarea,()=>{
        setDisabledTextarea(true)
    });

    useClickOutside(clickDots,()=>{
        setDisplayOptions(false)
    });

    useClickOutside(clickBody,()=>{
/*        if(document.getElementById("sidebar").offsetWidth){
          props.handleSideBar("close")
       }  */
    });


    function handleInputDisabled(){
       if(disabledInput){
        setName("")
        setDisabledInput(false)
        setTimeout(()=>{
            nameInput.current.focus();
        },50)
       }else{
        updateUser(name,about,id)
        setDisabledInput(true)
       }
    }

    function uploadImage(){
        if(imageUpload == null){
            return 0
        }
        const imageRef = ref(storage,`images/${imageUpload.name + v4() }`)
        console.log(imageRef)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                updateUserProfileImage(id,url)
                setProfileImageUrl(url)
            });
        });

    }



    function handleTextArea(){
        if(disabledTextarea){
            setAbout("")
            setDisabledTextarea(false)
            setTimeout(()=>{
                aboutInput.current.focus();
            },50)
        }else{
            updateUser(name,about,id)
            setDisabledTextarea(true)
        }
 
    }
    function handleName(e){
        setName(e.target.value)
    }

    function handleAbout(e){
        setAbout(e.target.value)
    }

    function copy(){
        setCopied(true);

        navigator.clipboard.writeText(props?.userData?.userId)
        setTimeout(()=>{
          setCopied(false);
        },800)
      }

    async function logout(){
            await signout(auth)
            localStorage.clear();
            navigateTo(`/login`);
    }

    function handleImageUpload(event){
        setImageUpload(event.target.files[0])
    }

    useEffect(()=>{
        uploadImage()
    },[imageUpload])

    return (
        <>
         <div ref={clickBody}  id="sidebar" className={"xl:rounded-3xl  xl:flex xl:rounded-r-none w-full xl:w-2/6 bg-[#111B21] flex flex-col justify-between items-center "+(props.showSidebar && props.width<1240 ?"flex z-40 w-4/6 absolute h-screen":"hidden")}>
            <div  className=' flex items-end w-full text-white h-7  flex-col  relative top-4 right-4'>
                {!isContactPage&&<img  ref={clickDots}  onClick={()=>setDisplayOptions(!disaplayOptions)} className='w-6 mr-4 relative  cursor-pointer' src={dots} alt="dots"  />}
                {
                    disaplayOptions&&
                    <ul className='flex z-10 flex-col mr-3 mt-1  bg-[#f1f1f1] text-[#313131]  rounded-xl pr-2 pl-2  justify-center'>
                        <li onClick={logout} className='pl-3 pr-3  mt-3 mb-3 cursor-pointer  rounded-2xl hover:bg-[#e3e3e3] items-center justify-center'>
                            Log out
                        </li>
                    </ul>
                }
            </div>
{/*             <button onClick={uploadImage}>Upload Image</button> */}
            <div className='flex cursor-pointer relative drop-shadow-xl hover:scale-110 '>
              <input  ref={uploadRef}  style={{height:"100%"}} className='opacity-0 w-full z-10 hover:z-40 absolute' type="file" onChange={(event)=>{handleImageUpload(event)}} />
              <div style={{height:"100%"}}  onMouseEnter={()=>{
                    setStyleChanged(true)
                }} className={styleChange && !isContactPage ?"z-20 hover:z-10 duration-300 brightness-50 hover:duration-300 ":"z-20 hover:z-10 duration-300 hover:duration-300 "}>
                <Avatar
                    img={!isContactPage?profileImageUrl:props.contactUser?.profileImageUrl}
                    bordered={true}
                    rounded={true}
                    size="xl"
                    statusPosition="top-right"
                />
              </div>
              {
                !isContactPage&&
                <div  onMouseEnter={()=>{
                    setStyleChanged(true)
                  }} onMouseLeave={()=>{
                    setStyleChanged(false)
                  }} style={{height:"100%"}}
                    onClick={handleClickInput}
                   className='w-full  duration-200   hover:duration-200 flex  items-center justify-center flex-col absolute z-10 hover:z-20'>
                        <img className='w-8 mb-4' src={camera } alt="camera" />
                        <span className='px-4 text-center text-white uppercase text-xs'>Change Profile Image</span>
                  </div>
              }
            </div>

            <div className='  w-5/6 pr-2 pl-2 justify-between'>
                <span className='text-[#B8336A] text-xl font-semibold cursor-default'>Your name</span>
                <div  ref={clickRefInput}  className='flex justify-between items-center'>
                    <input   ref={nameInput} onChange={(e)=>handleName(e)} disabled={disabledInput}  className='text-[#f1f1f1] focus:opacity-100 opacity-80 cursor-pointer w-5/6 bg-transparent outline-offset-0  outline-none focus:bg-transparent font-normal focus:text-[#fff] text-xl focus:border-b-2 mt-2 border-b-2 border-transparent focus:border-[#B8336A] ' value= {isContactPage?props.contactUser?.name : name}></input>
                    <Tooltip  content={disabledInput?"Edit":"Save"} style="light"  animation="duration-500">
                       {!isContactPage&& <img   className={`animate-[fadeIn_1s_ease-in-out] w-5 cursor-pointer mb-1 duration-500 hover:rotate-6 `} onClick={handleInputDisabled} src={disabledInput?edit:check} alt="edit" />}
                    </Tooltip>
                </div>
            </div>
            <div className=' mt-8 w-5/6 pr-2 pl-2 justify-between  '>
                <span className='text-[#B8336A]  text-xl font-semibold cursor-default'>About</span>
                <div ref={clickRefTextarea} className='flex justify-between items-center'>
                    <textarea onChange={(e)=>handleAbout(e)}  disabled={disabledTextarea}  ref={aboutInput}  id="about" rows="2" className='focus:text-[#fff] focus:opacity-100 opacity-80 text-[#f1f1f1] mt-2 cursor-pointer ring-0 border-t-0 border-r-0 border-b-2 border-l-0 w-5/6 bg-transparent outline-offset-0 resize-none outline-none focus:bg-transparent focus:border-b-2 focus:ring-0  focus:outline-offset-0 text-xl focus:border-[#B8336A] border-transparent p-0' value={isContactPage?props.contactUser?.about : about}></textarea>
                    <Tooltip content={disabledTextarea?"Edit":"Save"} style="light"  animation="duration-500">
                        {
                            !isContactPage&&
                            <img className='w-5 mb-8 cursor-pointer  duration-300 hover:rotate-6 ' onClick={handleTextArea} src={disabledTextarea?edit:check} alt="edit" />
                        }

                    </Tooltip>
                </div>
            </div>
            <div className=' w-5/6 xl:mb-12 mb-12  pr-2 pl-2 justify-between flex flex-col '>
                <span className= ' text-[#B8336A]  text-xl font-semibold cursor-default'>Your Id</span>
                <div className='flex justify-between items-center'>
                    <span style={{marginLeft:"-2px"}} className='text-[#fff] text-sm   xl:text-m focus:opacity-100 opacity-80 cursor-default mt-2 '>{isContactPage?props.contactUser?.userId : id}</span>
                        <Tooltip content={isCopied?"Copied ✔":"Copy "} style="light"  animation="duration-500">

                            <img onClick={()=>copy()} className='ml-3 xl:ml-0 w-5 cursor-pointer mt-1   duration-300 hover:rotate-6' src={copyIcon} alt="copy" />

                        </Tooltip>
                </div>
            </div>
    </div>
    {
        props.width<1240 &&
            <div onClick={props.handleSideBar} className='absolute right-0 w-2/6 h-screen'> 
            </div>
    }
    </>
  )
}
