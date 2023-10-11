import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Acuheader from "@/public/ACU.jpeg";
import Image from "next/image";

function acu() {
  return (
    <div className="acu">
        <Navbar />
        <div className="h-screen w-full">
          <Image src={Acuheader} alt="/" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                  Vice President of Education at Aerospace Course Union (Toronto Metropolitan University) 
                </h1>
                <h2 className="text-xl">
                During the academic year of 2020-2021, I was a part of the Aerospace Course Union at Ryerson University. 
                This is a student group devoted to serving the Aerospace Engineering students of the university. As a group, 
                ACU hosts various social and academic events throughout the year and promotes Aerospace Engineering at Ryerson. 
                </h2> 
              </div>
            </div>
        </div>

        <div className="bg-black items-center flex justify-center py-20">
          <div className="max-w-screen-lg h-full">
            <ol className="border-l border-cyan-400">
              
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                  <p className="text-sm text-cyan-400">
                    May 2020 - May 2021
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Vice President of Education</h4>
    
                  <p className="mb-3 text-white text-lg">
                  I joined in as the Vice President of Education for the year 2020-2021. In this position, 
                  I was responsible for hosting academic events throughout the year. This included various workshops, tutorials, exam-preps, and other related events. 
                  Along with this, I was actively interacting with students in the program to help them with their concerns, mainly in terms of academics.  
                  </p>
                  <p className="mb-3 text-white text-lg">
                  At the start of the year, I created a Discord server for ACU, which was open to all students of Ryerson. 
                  The idea was to have one big platform that everyone could easily use to interact with us and each other. 
                  Given the circumstances of the COVID-19 pandemic, the Discord server was a huge success because it increased 
                  student interactions and helped everyone stay connected through the pandemic. We were able to host most of our 
                  events and game nights directly through this virtual platform, 
                  and students from different years and programs were able to socialize with each other through specific message boards.  
                  </p>
                  <p className="mb-3 text-white text-lg">
                  Some of the most important events I hosted were tutorials and exam-prep sessions. 
                  Our team consisted of members from every year of studies. By staying in active contact with members of different years, 
                  I was able to keep track of the academic difficulties that everyone faced. 
                  This helped me host tutorials accordingly. I hosted tutorials for specific courses that students had difficulties with.  
                  </p>

           
                </div>
              </li>


            </ol>
          </div>

        </div>

        <div className=" bg-black content-center px-10 md:px-48">
          
        </div>
        <Footer />
    </div>
  );
}

export default acu;