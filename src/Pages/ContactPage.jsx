import React, { useEffect, useRef, useState } from 'react'
import MainPageBody from '../components/bodies/MainPageBody';
import ContactPageFooter from '../components/footer/ContactPageFooter';
import ContactHeader from '../components/headers/ContactHeader';
import MainPageSide from '../components/MainPageSide'

export default function ContactPage() {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      setHeight(ref.current.offsetHeight-48-24-80)
      window.addEventListener("resize", () => setHeight(ref.current.offsetHeight-48-24-80));
    }, []);
  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide></MainPageSide>
            <div  ref={ref} className='flex-col w-4/6'>
                <ContactHeader></ContactHeader>
                <div className='overflow-hidden'>
                    <MainPageBody height={height-80} remove={true}></MainPageBody>
                </div>
                <ContactPageFooter></ContactPageFooter>
            </div>
        </div>
    </div>
  )
}
