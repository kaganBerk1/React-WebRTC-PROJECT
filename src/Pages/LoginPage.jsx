import React, { useState } from 'react'
import { useEffect } from 'react';

import { useNavigate ,useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


export default function LoginPage() {
    const {currentUser,signup,signin} =useAuth()
    const [mail,setMail] = useState("")
    const [error,setError] = useState(false)
    const [password,setPassword] = useState("")
    const navigateTo =useNavigate()

    const location = useLocation();

    useEffect(() => {
      setError(false)
    }, [location]);
    
    async function login(){
        const user = await signin(mail,password)
        console.log(user)
        if(!user){
            setError(true)
        }
        if(user.user.uid){
            navigateTo("/home")
        }
       
    }

    function handleMail(value){
        setMail(value)
    }
    
    function handlePassword(value){
        setPassword(value)
    }
    

  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen'>
        <div  className='shadow-2xl xl:rounded-3xl xl:aspect-video xl:w-3/4  w-full  h-screen xl:h-auto  bg-[#313131] flex flex-col items-center justify-around'>
        <section style={{border:"0.1px solid #f1f1f1",borderRadius:"25px"}} className=" md:px-20 md:py-48 py-12  xl:py-12  xl:w-2/6 xl:h-4/6 xl:px-8 ">
            <div className="px-6 h-full text-gray-800">
                <div
                className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                <div className="w-full">
                    <form>
                   

                    
                    <div className="mb-6">
                        <input
                        type="text"
                        className="form-control block w-full px-4 py-2 xl:py-2  md:py-6 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Mail"
                        onChange={(e)=>handleMail(e.target.value)}
                        />
                    </div>

                
                    <div className="mb-6">
                        <input
                        type="password"
                        className="form-control block w-full px-4 xl:py-2  md:py-6 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        onChange={(e)=>handlePassword(e.target.value)}
                        />
                    </div>
{/* 
                    <div className="flex justify-end items-center mb-6">
                        <a href="#!" className="text-[#f1f1f1]">Forgot password?</a>
                    </div>
 */}
                    <div className="text-center lg:text-left w-full mb-8">
                        <button
                        type="button"
                        className="inline-block xl:text-sm px-7 md:text-lg w-full py-3 xl:py-3 md:py-6  bg-blue-600 text-[#f1f1f1] font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#a185e7] hover:shadow-lg focus:bg-[#a185e7] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={login}
                        >
                        Login
                        </button>
                        <p className="text-sm xl:text-sm md:text-lg text-[#f1f1f1] font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a
                            href="/register"
                            className="text-red-600 ml-1 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >Register</a
                        >
                        </p>
                    </div>
                    {error&&<span  className="text-red-600 flex justify-center  text-xs ml-1 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" >Incorrect eMail or password. Please try again </span>}
                    </form>
                </div>
                </div>
            </div>
            </section>
        </div>

    </div>
  )
}
