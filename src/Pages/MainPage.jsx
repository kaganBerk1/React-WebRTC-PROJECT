import React, { useEffect, useRef, useState } from 'react'
import MainPageHeader from '../components/headers/MainPageHeader'
import MainPageBody from '../components/bodies/MainPageBody'

import MainPageSide from '../components/MainPageSide'
import { getUser } from '../services/UserServices';
import { useAuth } from '../contexts/AuthContext';


export default function MainPage(props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);


  const [userData,setUserData]=useState({})
  const {currentUser}=useAuth()
  const [contacts,setContacts] = useState([])

  useEffect(() => {
    setHeight(ref.current.offsetHeight-48-24-80)
    window.addEventListener("resize", () => setHeight(ref?.current?.offsetHeight-48-24-80));
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    console.log(width)
    async function fetchData() {
      // You can await here
      await getUserData()
      // ...
    }
    fetchData();
    //setHeight(ref.current.offsetHeight-48-24-30);
  }, []);

  useEffect(()=>{
    setContacts(userData.contacts?userData.contacts:[])
  },[userData.contacts])

  

  async function getUserData(){
    let user= await getUser(currentUser.uid)
    props.handleId(currentUser.uid)
    console.log(user)
    setUserData(user)
    setContacts(user.contacts?user.contacts:[])
    /* localStorage.setItem("userData",user) */
  }

  function handleUserContacts(searchContacts){
    setContacts(searchContacts)
  }

  function handleSideBar(){
    showSidebar?setShowSidebar(false):setShowSidebar(true)
    
  }


  return (
    <div  className=' bg-gradient-to-t   from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl xl:rounded-3xl xl:aspect-video h-screen xl:h-auto  w-full xl:w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide showSidebar={showSidebar} handleSideBar={handleSideBar} width={width} userData={userData}></MainPageSide>
            <div  ref={ref} className='flex-col w-full xl:w-4/6'>
                <MainPageHeader handleSideBar={handleSideBar} contacts={contacts} handleUserContacts={handleUserContacts} width={width} getUserData={getUserData}  userData={userData}></MainPageHeader>
                <div className='overflow-hidden'>
                    <MainPageBody  width={width} handleSideBar={handleSideBar}  contacts={contacts} userData={userData} height={height}></MainPageBody>
                </div>
            </div>
        </div>
    </div>
  )
}
