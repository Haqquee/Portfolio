'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import logo from '@/public/logo.png'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-20 shadow-md shadow-cyan-900 z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src={logo} alt="/" width={100} height={100} />
        <div>
            <ul className='hidden md:flex gap-10'>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>Home</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>About</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>Experience</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>Projects</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>Skills</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md'>Contact</li>
                </Link>
            </ul>
            <div className='md:hidden' onClick={handleNav}>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>
        
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-gray-600' : ''}>
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
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Home</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>About</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Experience</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Projects</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Skills</li>
                </Link>
                <Link href="/">
                    <li className='text-sm hover:text-cyan-400 hover:text-md py-4'>Contact</li>
                </Link>
                </ul>
            </div>
            <div className='rounded-full shadow-lg px-10 py-4 flex items-center gap-10'>
                <div className='hover:text-cyan-500 cursor-pointer'>
                    <FaLinkedinIn/>
                </div>
                <div className='hover:text-cyan-500 cursor-pointer'>
                    <FaGithub />
                </div>
            
            </div>
            </div>

        </div>
    </div>
  )
}

export default NavBar