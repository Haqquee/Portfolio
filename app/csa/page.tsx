import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Csaheader from "@/public/csaheader.jpg";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


export default csa;function csa() {

 

  return (
    <div className="csa">
        <Navbar />
        <div className="h-screen w-full">
          <Image src={Csaheader} alt='CSA' className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                  Internship at the Canadian Space Agency
                </h1>
                <h2 className="text-xl">
                  I got the amazing opportunity to join the Canadian Space Agency in January of 2022. 
                  I held multiple internship positions throughout my 12 months at the Agency which includes 
                  project management positions for three different space projects as well as a mechanical engineering position.
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
                    January 2022
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Project Management for Space Exploration Department</h4>
                  <p className="mb-3 text-white text-lg">
                    The first position I held with the CSA was as a Project Management Intern  within the Space Exploration Development department of the Agency. 
                    I was hired to assist with the project management activities of CANS and LRM, which are two important contributions by Canada to the space sector. 
                    My work was split evenly between both projects throughout my work term. 
                  </p>

                  <p className="mb-3 text-white text-lg">
                    The development of Canadian Active Neutron Spectrometer (CANS), gives Canada the opportunity 
                    to showcase Canadian technology in neutron spectrometry in space. The main objective of CANS is to design and build an active neutron spectrometer, to be tested on the International Space Station (ISS), and eventually delivered to NASA&apos;s Lunar Gateway Space Station. The CANS team is relatively small compared to some of the other projects within the agency, and therefore I was allowed to provide significant support to the sole project manager in the team, 
                    by helping with activities that contribute to the overall success of the project.  
                  </p>

                  <p className="mb-3 text-white text-lg">
                    One of my main accomplishments was being able to help with the development of the project schedule. 
                    Since the project was still in an early phase, I got the opportunity to set up meetings and work with various members of the team, 
                    including the systems engineer, S&MA engineer, and the mission scientist to get an understanding of how their work fits within the project timeline. 
                    The highlight of my work with this team was leading weekly team meetings on behalf of the project manager. 
                    Having the opportunity to lead meetings that consisted of experienced engineers allowed me to get out of my comfort zone and gain leadership experience.          
                    </p>
                  <p className="mb-3 text-white text-lg"> 
                  The Lunar Rover Mission (LRM) is Canada&apos;s first rover mission to the lunar surface. In collaboration with NASA, the LRM aims to send payloads to the moon to gather scientific data to help find water ice and to better understand the lunar environment. More information can be found here https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/first-canadian-rover-to-explore-the-moon.asp. 
                  The LRM was the second project that I was a part of during this term. This is a larger project in scale when compared to CANS and therefore it allowed me to get a different perspective of the process of developing a successful space mission. 
                  One of my largest contributions to this project was communicating and working together with our contractors on the project deliverables. It had to be made sure that the deliverables provided by the contractors were on par with the standards of the CSA. Some of these deliverables included monthly project dashboards, and project schedules. This meant I had to get a good understanding of what we were looking for at the agency, 
                  and meet with the contractors weekly to ensure that everyone was on the same page. 
                  </p>

                  <p className="mb-3 text-white text-lg"> 
                    With the LRM, I was also able to contribute to an Integrated Management Schedule (IMS). Since we had multiple contractors for the project, I was given the opportunity to create an IMS which would act as a master 
                    schedule that would highlight all the key tasks and deliverables by both the contractors and the Agency, all in one place. 
                  </p>


 
                  
                </div>
              </li>

              
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                  <p className="text-sm text-cyan-400">
                    May 2022
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Mechanical Engineering Intern for Lunar Rover Mission</h4>
                  <p className="mb-3 text-white text-lg">
                  After my project management term, I was rehired by my pervious supervisor of LRM for another work term. This time he allowed me to gain mechanical engineering experience by helping him with the early stages of two side projects, not officially in development by CSA at the time.
                  One of these projects was to design a deformable wheel for rover missions. The design was done in the scale of a micro-rover, however, the idea was to have the flexibility so that the design could be scaled for a larger rover if needed. The idea for this wheel came to fruition after finding potential improvements to be made on the already existing rover wheel designed by the contractors. During my time with this design, I was given the freedom to research materials and strategies to improve upon each iteration of the wheel prototype and under the supervision of my manager, implement the appropriate changes. 
                  The second project I worked on was the design for a new modular rover.  My manager, with his expertise in the field, had been working on a design for a rover and wanted to obtain a design patent for it. He gave me the preliminary designs and allowed me to aid in further development of the designs. Unfortunately since my work term was short (4-months), it was impossible to finish the development of a design that was detailed enough to obtain a design patent within that timeframe. However, my contributions are passed on, and the experience and knowledge I obtained during this time was invaluable. 
                  </p>
                </div>
              </li>

              
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                  <p className="text-sm text-cyan-400">
                    August 2022
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Project Management for Canadarm3</h4>
                  <p className="mb-3 text-white text-lg">
                  My work term concluded with my position as the Project Management Intern for Canadarm3. Canadarm3 is one of Canada&apos;s biggest contributions to space technology, and a part of the US-led Lunar Gateway Program. This position gave me a chance to experience working with a team on the largest project in the Agency.  
                  In this position, I took on similar tasks as my first project management term, however, the highlight of being on this team was spending a lot of my time updating the Project Management Plan (PMP) for Canadarm3. At the time I was hired, the PMP needed to be updated for the next phase of the project. This meant going through every section of the document, highlighting the changes required, 
                  and gathering appropriate information to make those changes. I was given the opportunity to work independently on the document while still having adequate support from my manager and the rest of the team. To tackle this task successfully, I looked through various documents and templates provided by Agency to understand the structure and content of a PMP. I also dove into PMPs done by other project teams to further enhance my knowledge of the task at hand. Additionally, I consulted my manager who was one of the project managers on Canadarm3, for support regarding the changes that I thought should be made.  
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