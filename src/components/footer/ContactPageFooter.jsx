import React from 'react'
import { Textarea,Label } from 'flowbite-react';

export default function ContactPageFooter() {

  return (
    <div  className='w-full flex justify-center overflow-hidden mt-4'>
        <div id="textarea" className='w-5/6' > 
        <label for="message" class="block mb-2 text-xs font-medium text-gray-700 dark:text-gray-400">Write a message</label>
        <textarea  rows="2" id="message"  class="  mb-2 resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border   border-gray-300 focus:ring-[#111B21] focus:border-[#111B21]" placeholder="Your message..."></textarea>
        </div>
    </div>
  )
}
