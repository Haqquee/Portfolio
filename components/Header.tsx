import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex justify-center items-center'>
            <div className=''>
                <h1 className='py-1'>Mishran Haque</h1>
                <h2 className='py-1'>BEng Aerospace Engineering | Minor Computer Science</h2>
                <p className='py-1'>Since beginning my journey in this field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. 
                I’m grateful for a profession I’m passionate about, and am proud to share examples of my greatest work. Take a moment to check out my portfolio,
                and get in touch with any questions.</p>
              <div className='flex justify-center gap-6 py-4'>
                <div className='hover:scale-110 hover:text-cyan-400 cursor-pointer'> 
                  <FaLinkedin size={25}/> 
                </div>
                <div className='hover:scale-110 hover:text-cyan-400 cursor-pointer'>
                  <FaGithub size={25}/>
                </div>
                <div className='hover:scale-110 hover:text-cyan-400 cursor-pointer'>
                < AiOutlineMail size={25}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header