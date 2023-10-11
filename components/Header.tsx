import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex justify-center items-center'>
            <div className=''>
                <h1 className='py-1'>Mishran Haque</h1>
                <h2 className='py-1'>BEng Aerospace Engineering | Minor Computer Science</h2>
                <p className='py-1'>Since beginning my journey in this field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. 
                I’m grateful for a profession I’m passionate about, and am proud to share examples of my greatest work. Take a moment to check out my portfolio,
                and get in touch with any questions.</p>
              <div className='flex justify-center gap-6 py-4'>
                <ul className='flex justify-center'>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="mailto:mishran.haque@gmail.com" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <AiOutlineMail />
                            </>
                        </Link>
                    </li>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="https://www.linkedin.com/in/mishran-haque/" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <FaLinkedin />
                            </>
                        </Link>
                    </li>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="https://github.com/Haqquee" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <FaGithub />
                            </>
                        </Link>
                    </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header