import React from 'react'
import MainPageHeader from '../components/headers/MainPageHeader'
import MainPageSide from '../components/MainPageSide'

export default function MainPage() {
  return (
    <div style={{background:" #ff6e7f", background: "-webkit-linear-gradient(to top, #ff6e7f, #bfe9ff);",background: "linear-gradient(to top, #ff6e7f, #bfe9ff)"
    }} className='flex justify-center items-center min-h-screen '>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#f6f6f6] flex'>
            <MainPageSide></MainPageSide>
            <div className='flex-col w-4/6'>
                <MainPageHeader></MainPageHeader>
            </div>
        </div>
    </div>
  )
}
