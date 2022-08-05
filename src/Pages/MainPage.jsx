import React, { useEffect, useRef, useState } from 'react'
import MainPageHeader from '../components/headers/MainPageHeader'
import MainPageBody from '../components/bodies/MainPageBody'

import MainPageSide from '../components/MainPageSide'


export default function MainPage() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.offsetHeight-48-24-80)
    window.addEventListener("resize", () => setHeight(ref.current.offsetHeight-48-24-80));
    //setHeight(ref.current.offsetHeight-48-24-30);
  }, []);


  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide></MainPageSide>
            <div  ref={ref} className='flex-col w-4/6'>
                <MainPageHeader></MainPageHeader>
                <div className='overflow-hidden'>
                    <MainPageBody height={height}></MainPageBody>
                </div>
            </div>
        </div>
    </div>
  )
}
