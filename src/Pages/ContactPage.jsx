import React, { useEffect, useRef, useState } from 'react'
import ContactPageBody from '../components/bodies/ContactPageBody';
import MainPageBody from '../components/bodies/MainPageBody';
import ContactPageFooter from '../components/footer/ContactPageFooter';
import ContactHeader from '../components/headers/ContactHeader';
import MainPageSide from '../components/MainPageSide'
import { getUser } from '../services/UserServices';

export default function ContactPage(props) {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [contactUser,setContactUser]=useState({})
    const [width, setWidth] = useState(window.innerWidth);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
      setHeight(ref.current.offsetHeight-48-24-80)
      window.addEventListener("resize", () => setHeight(ref.current.offsetHeight-48-24-80));
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      async function fetchData() {
        // You can await here
        await getUserData()
        // ...
      }
      fetchData();
    }, []);


    
  async function getUserData(){
    let userId= window.location.pathname.split("/").pop()
    let user= await getUser(userId)
    console.log(user)
    console.log("########################")
    setContactUser(user)
    /* localStorage.setItem("userData",user) */
  }

  function handleSideBar(){
    showSidebar?setShowSidebar(false):setShowSidebar(true)
    
  }

  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl xl:rounded-3xl xl:aspect-video w-full h-screen xl:h-auto xl:w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide showSidebar={showSidebar} width={width}  handleSideBar={handleSideBar} contactUser={contactUser}></MainPageSide>
            <div  ref={ref} className='flex-col w-full xl:w-4/6'>
                <ContactHeader  handleSideBar={handleSideBar} width={width} contactUser={contactUser}></ContactHeader>
                <div className='overflow-hidden'>
                    <ContactPageBody contactUser={contactUser} height={height-80} remove={true}></ContactPageBody>
                </div>
                <ContactPageFooter></ContactPageFooter>
            </div>
        </div>
    </div>
  )
}
