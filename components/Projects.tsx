import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import csa from '@/public/canadarm.jpg'
import rpg from '@/public/RPG.png'
import rrc from '@/public/RRC.png'
import acu from '@/public/ACU.jpeg'
import fdd from '@/public/forestfire.jpg'
import rul from '@/public/RUL.png'
import github from '@/public/github.jpeg'

/*
import Home from "../pages/home"
import Csapage from "../pages/csa"
import Rpgpage from "../pages/rpg"
import Rrcpage from "../pages/rrc"
import Acupage from "../pages/acu"
import Fddpage from "../pages/fdd"
import Rulpage from "../pages/rul"
*/


const Projects = () => {
    const projects = [
        {
            id: 1,
            src: csa,
            title: 'Internship at Canadian Space Agency',
            link: '/Csa',
            description: 'I got the amazing opportunity to join the Canadian Space Agency in January of 2022. I held multiple internship positions throughout my 12 months at the Agency which includes project management positions for three different space projects as well as a mechanical engineering position.'
        },
        {
            id: 2,
            src: rpg,
            title: 'Design Specialist at Ryerson Propulsion Group',
            link: '/rpg',
            description: 'In June of 2021, I got the opportunity to join RPG as a Design Specialist. Ryerson Propulsion Group (RPG) is a non-profit design team at Ryerson University. The main goal of the team is to research and develop liquid-propellant rocket engines. My main task on the team involved developing CFD simulations for the rocket engine as a part of the Combustion Dynamics Sub-team.'
            
        },
        {
            id: 3,
            src: rrc,
            title: 'Avionics Subteam Member at Ryerson Rocketry Club',
            link: '/rrc',
            description: 'During the Fall of 2019, at the start of my second year of university, I joined the Avionics Sub-team of RRC. RRC is a non-profit, student-run design team, dedicated to developing supersonic rockets, and is one of the 150 University Rocket teams that compete in the annual Spaceport America Cup in New Mexico.'

        },
        {
            id: 4,
            src: acu,
            title: 'Vice President Education at Aerospace Course Union',
            link: '/acu',
            description: 'During the academic year of 2020-2021, I was a part of the Aerospace Course Union at Ryerson University. This is a student group devoted to serving the Aerospace Engineering students of the university. As a group, ACU hosts various social and academic events throughout the year, and promotes Aerospace Engineering at Ryerson. '
        },
        {
            id: 5,
            src: fdd,
            title: 'Forest Fire Detection Drone Payload',
            link: '/fdd',
            description: 'For my Systems Engineering Course during University, I worked on a term project which was to come up with an idea and design a drone payload. I worked with a team of 3 other students to design, and program a fire detection payload using an Ardunio microcontroller. The design consisted of smoke, temperature and GPS modules that were programmed using the Arduino IDE and C++.'
        },
        {
            id: 6,
            src: rul,
            title: 'Predictive Maintenance Using Machine Learning',
            link: '/rul',
            description: 'For my Machine Learning course in University, I worked on a term project where I used Turbofan engine data provided by NASA, along with Machine Learning Libraries in Python (Tensorflow, Scikit Learn, etc), to create a Machine Learning model that can predict remaining useful life of turbofan engines, for the purpose of predictive maintenance.'
        }, 
        {
            id: 7,
            src: github,
            title: 'More Projects on my Github Profile',
            link: 'https://github.com/Haqquee',
            description: 'I am always working on various personal projects. Some of these projects can be found on my Github.'
        }, 
    ]

  return (
 
    
    <div id='Projects' className='w-full  min-h-screen py-20'>
        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 items-center text-center'>
                <p className='text-4xl pb-10 mb-10 border-b-2 border-cyan-400 '>Projects and Accomplishments</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12'>
            {projects.map(({id, src, title, link, description}) => (
                <div key={id} className='shadow-md hover:shadow-cyan-400 hover:scale-105 duration-100 p-5'>
                    <Link href={link}>
                    <Image src={src} alt="" className= 'w-full h-56 h- object-cover pb-5'/>
                    <div className=' flex flex-col items-center justify-center text-center'>
                        <p className='text-2xl pb-5 mb-5 border-b-2 border-cyan-400 text-cyan-400'>{title}</p>
                        <p className='text-md'> {description}
                        </p>
                    </div>
                    </Link>
                </div>   
            ))}
            </div>
        
        </div> 
    </div>

    
  )
}

export default Projects