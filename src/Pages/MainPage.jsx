import React, { useEffect, useRef, useState } from 'react'
import MainPageHeader from '../components/headers/MainPageHeader'
import MainPageBody from '../components/bodies/MainPageBody'

import MainPageSide from '../components/MainPageSide'
import { getUser } from '../services/UserServices';
import { useAuth } from '../contexts/AuthContext';


export default function MainPage(props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [userData,setUserData]=useState({})
  const {currentUser}=useAuth()

  useEffect(() => {
    setHeight(ref.current.offsetHeight-48-24-80)
    window.addEventListener("resize", () => setHeight(ref.current.offsetHeight-48-24-80));
    async function fetchData() {
      // You can await here
      await getUserData()
      // ...
    }
    fetchData();
    //setHeight(ref.current.offsetHeight-48-24-30);
  }, []);

  async function getUserData(){
    let user= await getUser(currentUser.uid)
    console.log(user)
    setUserData(user)
    /* localStorage.setItem("userData",user) */
  }


  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide userData={userData}></MainPageSide>
            <div  ref={ref} className='flex-col w-4/6'>
                <MainPageHeader userData={userData}></MainPageHeader>
                <div className='overflow-hidden'>
                    <MainPageBody userData={userData} height={height}></MainPageBody>
                </div>
            </div>
        </div>
    </div>
  )
}
