import React from 'react'
import { FaLinkedin , FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='Contact' className='bg-gradient-to-b from-gray-950 to-black text-white h-screen'>
        <div className='flex max-w-screen-lg mx-auto flex-col items-center justify-center h-full'>
            <p className='text-4xl sm:text-4xl py-2'>Get in touch with me</p>
            <div className='mt-2'>
                <ul className='flex justify-center'>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="mailto:mishran.haque@gmail.com" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <HiOutlineMail />
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
                        <Link href="https://github.com/Haqquee" className='flex justify-between items-center scale-150 w-full text-white hover:text-cyan-400'>
                            <>
                                <FaGithub />
                            </>
                        </Link>
                    </li>
                </ul>
        </div>

        </div>
    </div>
  )
}

export default Contact