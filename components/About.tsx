import React from 'react'
import Image from 'next/image';
import headshot from '@/public/headshot.jpg'; 

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen'>
        <div className= 'max-w-screen-lg flex flex-col justify-center items-center w-full h-full mx-auto'>
            <div className='flex justify-center items-center '>
              <Image src={headshot} alt="headshot" className='scale-50 sm:scale-75 rounded-full h-auto max-w-xs' />
            </div>
            <h1 className='pb-10 mb-20 border-b-2 border-cyan-500'>About Me</h1>
            <p className='px-5 sm:px-auto'>
                Hello! I am Mishran, an Aerospace Engineering Graduate from Toronto Metropolitan University (Formerly Ryerson University).
            </p>
            <p className='mt-5 px-5 sm:px-auto'>
                Space and everything extraterrestrial was fascinating to me from early childhood and throughout my High School years. 
                This interest soon evolved into the unavoidable career choice towards Science & Engineering.
                My passion for space travel and state-of-the-art vehicles eventually led me to join the Aerospace Engineering Program at Ryerson University.
                Over my four years of University, I got to take various courses that strengthened my knowledge of aerospace applications. 
                I got the opportunity to work with Design teams such as Ryerson Rocketry Club and Ryerson Propulsion Group and experience the process behind 
                designing and building a supersonic rocket. In 2022, I spent 3 Co-op terms with the Canadian Space Agency where I held Project Management and 
                Mechanical Engineering Positions within three different project teams.
            </p>
            <p className='mt-5 px-5 sm:px-auto'>
                During my years at University, I developed a passion for Software Engineering and Artificial Intelligence.
                Writing code and developing meaningful software became a hobby for me. This led me to obtain a Minor in Computer Science 
                where I took courses and completed projects mainly related to Low-level Programming and Machine Learning. 
                These experiences and coursework allowed me to develop skills in programming using Python, C, and C++, as well as Machine Learning Frameworks and Libraries.
            </p>
            <p className='mt-5 px-5 sm:px-auto'>
                I am always open to new professional connections and meaningful conversations!
            </p>
            
        </div>
    </div>
  )
}

export default About