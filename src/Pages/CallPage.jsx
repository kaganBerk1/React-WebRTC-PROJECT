import React, { useEffect, useState } from 'react'
import loader from "../images/loader.svg"
import phoneClose from "../images/phone-close.svg"
import phoneCall from "../images/phone-call.png"

import { Tooltip } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import user from "../images/user.png"
import Peer from "simple-peer"
import { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { set } from 'firebase/database';
import { getUser } from '../services/UserServices';


export default function CallPage(props) {
    let socket=props.socket
    const [calling,setCalling]=useState(true)
    const [type,setType]=useState("")
    const {currentUser} = useAuth()
    const [ me, setMe ] = useState(currentUser.connectionID)
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
    const navigateTo = useNavigate();

    
    useEffect(()=>{
        async function fetchData() {
            // You can await here
            let parts = window.location.pathname.split('/');
            await getUserData(currentUser.uid,"sender")
            await getUserData(parts[2],"reciever")

            // ...
          }
        fetchData();

        let parts = window.location.pathname.split('/');
        let videoBool=parts[parts.length-1]=="video"
        setType(parts.pop());
		navigator.mediaDevices.getUserMedia({ video: videoBool, audio: true }).then((stream) => {
			    setStream(stream)
				myVideo.current.srcObject = stream
                window.localStream = stream;
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
            console.log(data.from)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})



    },[])

    async function getUserData(id,type){
        let user= await getUser(id)
        if(type=="reciever"){
            setIdToCall(user.connectionID)
        }else{
            setMe(user.connectionID)
        }
        /* localStorage.setItem("userData",user) */
      }



    const callUser = (id) => {
        const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}



    const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

    const leaveCall = () => {
        setCallEnded(true)
        localStream.getVideoTracks()[0]?.stop();
        navigateTo(-1)
		connectionRef.current.destroy()
	}


  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl xl:rounded-3xl xl:aspect-video xl:w-3/4 bg-[#313131] w-full h-screen  flex flex-col items-center justify-around'>
                <div className='w-full gap-4 xl:gap-0 flex flex-col xl:flex-row  h-4/6 xl:h-3/6 xl:mt-8 mt-12  px-2 xl:px-0'>
                    <div className='xl:w-3/6 w-full h-screen xl:h-auto bg-[#f1f1f1] xl:mr-3 xl:ml-6 rounded-3xl flex justify-center items-center overflow-hidden'>
                        {
                            type==="video"?
                            <>
                            {stream ?  <video playsInline muted  ref={myVideo} autoPlay className='z-10 xl:rounded-3xl ' />:<img className='w-12' src={loader} alt="loader" />}
                            </>
                    
                            :
                            <>
                                <img className='w-12' src={user} alt=""  />
                                <video playsInline muted  ref={myVideo} autoPlay className='absolute z-10 xl:rounded-3xl ' />
                            </>
                            
                        }
                    </div>
{/*                     <div className='flex flex-row'>
                        <span className='text-white'>{me}</span>
                        <textarea
                        id="filled-basic"
                        label="ID to call"
                        variant="filled"
                        style={{width:"100px",height:"80px"}}
                        value={idToCall}
                        onChange={(e) => setIdToCall(e.target.value)}
                        />
                    </div> */}
                    <div className='xl:w-3/6 h-screen xl:h-auto  w-full  bg-[#f1f1f1] xl:ml-3 xl:mr-6 rounded-3xl flex justify-center items-center overflow-hidden'>
                        {
                            type==="video"?
                            <div>
                                {callAccepted   && !callEnded ?
                                <video playsInline ref={userVideo} autoPlay className='z-10 xl:rounded-3xl' />
                                :
                                <img className='w-12' src={loader} alt="loader" />
                                }
                            </div>
                            :
                            <>
                            <img className='w-12 z-20' src={user} alt=""  />
                            <video playsInline ref={userVideo} autoPlay className='absolute z-10 xl:rounded-3xl' />
                            </>
                        }
                    </div>
                </div>
                <div className=' flex xl:w-1/4 w-1/2 justify-between'>
                    <div className='w-12 bg-[#34C934] rounded-full '>
                        <Tooltip content="Call" style='light'>
                            <img onClick={()=>callUser(idToCall)} className='cursor-pointer pt-2 pb-2 pl-2 pr-2' src={phoneCall} alt="close" />
                        </Tooltip>
                    </div>
                    <div className='w-12 bg-[#f70909] rounded-full '>
                        <Tooltip content="Close the call" style='light'>
                            <img onClick={()=>leaveCall()} className='cursor-pointer pt-2 pb-2 pl-2 pr-2' src={phoneClose} alt="close" />
                        </Tooltip>
                    </div>
                </div>

                <div>
				{receivingCall && !callAccepted  ? (
					<div className="flex flex-col justify-center">
						<h1 className='ml-4 mb-3 text-[#f70909]' > Calling...</h1>
                        <button type="button" onClick={answerCall} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Answer</button>
					</div>
				) : null}
			</div>
        </div>

    </div>
  )
}
