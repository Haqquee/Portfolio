'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import logo from '@/public/logo.png'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='fixed w-full h-20 shadow-md shadow-cyan-900 z-[100] bg-gray-950 opacity-[96%]'>
        
        <div className='flex justify-between items-center w-full h-full px-10 font-bold'>
            <Image src={logo} alt="/" width={75} height={75} />
        <div>
            <ul className='hidden md:flex gap-10'>
                <Link href="/#home">
                    <li className='text-sm hover:text-cyan-400 hover:text-md hover:scale-110 duration-100'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='text-sm hover:text-cyan-400 hover:text-md hover:scale-110 duration-100'>About</li>
                </Link>
                <Link href="/#projects">
                    <li className='text-sm hover:text-cyan-400 hover:text-md hover:scale-110 duration-100'>Experience</li>
                </Link>
                
                <Link href="/#contact">
                    <li className='text-sm hover:text-cyan-400 hover:text-md hover:scale-110 duration-100'>Contact</li>
                </Link>
                
            </ul>
            <div className='md:hidden' onClick={handleNav}>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>
        
        <div className={nav ? 'sm:hidden fixed left-0 top-0 w-full h-screen bg-gray-600' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[605%] md:w-[45%] h-screen bg-slate-900 ease-in duration-300' : 
            'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>
            <div>
                <div className='p-5 flex w-ful items-center justify-between'>
                    <Image src={logo} width='87' height='35' alt='/' />
                    <div className='cursor-pointer' onClick={handleNav}>
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
            <div className='px-10 py-4 flex flex-col'>
                <ul>
                <Link href="/#home">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>About</li>
                </Link>
                <Link href="/#experience">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Experience</li>
                </Link>
                
                <Link href="/#contact">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Contact</li>
                </Link>
                </ul>
            </div>
            <div className='rounded-full shadow-lg px-10 py-4 flex items-center gap-10'>
            <ul className='flex justify-center'>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="mailto:mishran.haque@gmail.com" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <AiOutlineMail size={15}/>
                            </>
                        </Link>
                    </li>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="https://www.linkedin.com/in/mishran-haque/" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <FaLinkedin size={15}/>
                            </>
                        </Link>
                    </li>
                    <li className='flex justify-between items-center m-4 hover:scale-110 duration-100'>
                        <Link href="https://github.com/Haqquee" className='flex justify-between items-center scale-150 w-full hover:text-cyan-400'>
                            <>
                                <FaGithub size={15}/>
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

export default NavBar