import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Rrcheader from "@/public/RRC.png";
import Image from "next/image";

function rrc() {
  return (
    <div className="rrc">
        <Navbar />
        <div className="h-screen w-full">
          <Image src={Rrcheader} alt="/" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                  Avionics Subteam Member at Ryerson Rocketry Club
                </h1>
                <h2 className="text-xl">
                  During the Fall of 2019, at the start of my second year of university, I decided to join a design team to gain hands-on experience working with an engineering application. I chose to join Ryerson Rocketry Club (RRC) because I was fascinated with rockets and high-tech aerospace applications. RRC is a non-profit, student-run design team, dedicated to developing supersonic rockets. RRC is one of the 150+ University Rocket teams that compete in the annual Spaceport America Cup in New Mexico.  
                </h2> 
              </div>
            </div>
        </div>

        <div className="bg-black items-center flex justify-center">
          <div className="max-w-screen-lg h-full">
            <ol className="border-l border-cyan-400">
              
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                  <p className="text-sm text-cyan-400">
                    2019-2020
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400"></h4>
                  <p className="mb-3 text-white text-lg">
                  Since joining the team I have had the pleasure of working with some extremely talented individuals. I chose to join the avionics sub-team of RRC, 
                  responsible for researching and developing electronics inside the rocket. During my first year on the team, my main task included working on the 
                  ground station of the rocket. Data such as speed, altitude, location, etc. were recorded by the avionics inside of the rocket and sent back to the 
                  ground station. My team's main goal was to develop a ground station that is able to collect and display the transmitted data. 
                  I personally got to help the team with the process of researching electronics for the station. My work included figuring out various devices,
                  and a system to make these devices work together. I took previous designs that used a Raspberry Pi while researching and adding a new display, power source, controller, and cooling system using fans. I created the 
                  final layout of the ground station and got to present the final design to the rest of the team before proceeding with the rest of the project. 
                  </p>
    
                </div>
              </li>
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                  <p className="text-sm text-cyan-400">
                    2020-2021
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400"></h4>
                  <p className="mb-3 text-white text-lg">
                  Due to the pandemic, the team was unable to compete at the Spaceport America competition for 2020. 
                  Because of this, for the school year of 2020-2021, we worked on improving our existing design in preparation for the virtual 2021 Spaceport America Cup. 
                  During this time, the team worked together virtually because we were unable to meet in person (due to COVID-19).  
                  </p>
                  <p className="mb-3 text-white text-lg">
                  During this period of time, instead of making significant changes to our existing rocket, 
                  we worked on making smaller improvements that would help us for our future designs. 
                  As a part of the avionics subteam, I was tasked with figuring out thermal management 
                  strategies for the rocket's avionics bay. Our goal was to eventually increase the altitude of 
                  the rocket to 60,000 ft+ in the air. Because of this, the avionics situated inside of the rocket 
                  would experience significant temperature changes. Due to the combined impact of cold temperatures 
                  at high altitudes, and a large amount of aerodynamic heating caused by the supersonic speeds, we needed to 
                  figure out the temperatures that the avionics would experience during the flight, and a way to minimize the temperature effects on the avionics. 
                  </p>
                  <p className="mb-3 text-white text-lg">
                  For the 2020 - 2021 year, I mainly focused on research for various thermal management strategies for the rocket. 
                  I looked into insulation methods and materials that would be applicable to our design. Alongside this, 
                  I also looked into various textbooks and resources in order to further improve my knowledge on thermodynamics. 
                  This was required for me to be able to understand the concept behind aerodynamic heating and how to perform calculations regarding this phenomenon.  
                  </p>

           
                </div>
              </li>


            </ol>
          </div>

        </div>

        <div className="bg-gray-800">
        
        </div>
        <Footer />
    </div>
  );
}

export default rrc;