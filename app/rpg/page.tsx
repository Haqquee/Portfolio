import React from "react";
import Navbar from "@/components/NavBar";
import Rpgheader from "@/public/RPG.png";
import Footer from "@/components/Footer";
import Image from "next/image";

function rpg() {
  return (
    <div className="rpg">
        <Navbar />
        <div className="h-screen w-full">
          <Image src={Rpgheader} alt="/" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                  Design Specialist at Ryerson Propulsion Group
                </h1>
                <h2 className="text-xl">
                In June of 2021, I got the opportunity to join RPG as a Design Specialist. Ryerson Propulsion Group (RPG) is a non-profit design team at Ryerson University. The main goal of the team is to research and develop liquid-propellant rocket engines. 
                My main task on the team involved developing CFD simulations for the rocket engine as a part of the Combustion Dynamics Sub-team. 
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
                    2021
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Combustion Dynamics Subteam</h4>
                  <p className="mb-3 text-white text-lg">
                    Ryerson Propulsion Group (RPG) is a non-profit design team at Toronto Metropolitan University. RPG consists of a group of talented and passionate students
                    from various engineering and science programs at the University. The main goal of the team is to research and develop liquid-propellant rocket engines.

                  </p>
                  <p className="mb-3 text-white text-lg">
                    I joined the Combustion Dynamics Subteam during my fourth year of University. During this time, the team was working on manufacturing their first engine for the 2021
                    Launch Canada Competition. I was originally brought into the team to help with CFD simulations for the engine&apos;s combustion chamber. For the first time, the team was working on engine
                    simulations, and my responsibilities included understanding combustion simulations using a software called Ansys (simulation software), and performing these simulations for various
                    engine designs.
                    
                  </p>
                  <p className="mb-3 text-white text-lg">
                    During my time with the team, I worked on developing my CFD skills regularly, by performing various tests and simulations using different combustion chamber and nozzle designs.
                    Furthermore, I researched and learned the theories of chemical combustion, specifically for the case of a rocket engine. My experience with the team allowed me to explore
                    an entirely different field of engineering that I had not been exposed to before.
                    
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

export default rpg;