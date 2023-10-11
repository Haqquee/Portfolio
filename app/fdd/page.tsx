import React from 'react'
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import fddheader from "@/public/forestfire.jpg";
import Image from 'next/image';

const fdd = () => {
  return (
    <div className="fdd">
        <Navbar />
        <div className="h-screen w-full">
          <Image src={fddheader} alt='/' className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                  Forest Fire Detection Drone Payload
                </h1>
                <h2 className="text-xl">
                For my Systems Engineering Course during University, I worked on a term project which was to come up with an idea and design a drone payload. 
                I worked with a team of 3 other students to design, and program a fire detection payload using an Ardunio microcontroller. 
                The design consisted of smoke, temperature and GPS modules that were programmed using the Arduino IDE and C++.
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
                    September 2021
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Objective and Mission Overview</h4>
                  <p className="mb-3 text-white text-lg">
                  The Fire Detection Drone (FDD) is developed with the goal of providing an accurate and efficient method of detecting wildfires, 
                  while being cost effective and secure. The FDD makes use of built-in smoke and temperature sensors that are able to detect fire and 
                  alert authorities across large distances. The payload&apos;s GPS module allows it to accurately send location data to the ground station, 
                  so that the exact location of the fire can be determined, and subsequently the wildfire can be suppressed. The inexpensive design of 
                  the FDD allows it to be deployed in masses across very large areas. As a result, they can perform sweeps and cover a wide range of 
                  locations that are at a risk of a potential wildfire. Due to the easy to maintain and incomplex design, the FDD can be easily used 
                  by government agencies to detect fire across wildlands. Furthermore, the cost effectiveness of the FDD also allows for regular 
                  civilians who spend time in these high risk areas, to remain safe and at all times.
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Payload Subsystem</h4>
                  <p className="mb-3 text-white text-lg">
                  The 8-bit CPU based Arduino UNO is the FDD&apos;s primary computing module. With a core speed of 16MHz, it was chosen for its ability 
                  to process sampling data with accuracy and precision in a quicker amount of time than a weight-comparable computing unit such as 
                  an Arduino-NANO. Due to its lightweight structure and 9V input voltage allowance, it was the ideal platform to provide a computing 
                  base for the mission specific sensors and instruments such as the DHT11 temperature and humidity sensor and the MQ2 particle sensor.
                  </p>
                  <p className="mb-3 text-white text-lg">
                  The DHT11 temperature and humidity sensor is one of the two sensors onboard used to detect the fires. The other sensor is the MQ2 
                  particle sensor which detects particles in the air such as carbon monoxide. With a similar voltage requirement to that of the Arduino 
                  UNO, the same 9V battery can also be used to provide power to these two sensors. The DHT11 uses a capacitive humidity sensor and a 
                  thermistor to measure the surrounding air, and spits out a digital signal on the data pin. The MQ2 sensor works by using a 
                  Tin Dioxide coating which prevents the flow of electrons when in contact with clean oxygen. When reducing gasses, such as carbon 
                  monoxide, are present, the device will release the electrons and the current will flow through the device. 
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Command and Data Handling Subsystem</h4>
                  <p className="mb-3 text-white text-lg">
                  The hardware for the C&DH subsystem involves the use of a temperature sensor, an air quality sensor, and an active GPS module. 
                  The microcontroller used is an Arduino Uno and this will control the data transfer and interpretation of all the sensors. 
                  The data from the sensors will be transmitted live to the ground station and when there are any abnormal readings, the ground 
                  station will receive a clear warning. Since the FDD will be built to survey high risk areas, the hardware for the C&DH must be 
                  chosen such that it can survive the high temperatures in case the drone does fly near a forest fire. The drone shall continue 
                  to accurately and frequently submit data even in the precedented harsh environments.
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Power Subsystem</h4>
                  <p className="mb-3 text-white text-lg">
                  The Arduino UNO accepts 9V or USB 5V power. Since the payload is required to be a mobile unit, the 9V battery was chosen as it 
                  provides sufficient flexibility and minimal downtime when replacing depleted units. The 9V battery also provides sufficient 
                  power for a given mission. The decision between 9V or USB power supply plays a crucial role because a USB input would add extra 
                  components that add weight and complicate power supply replacements, whereas the 9V batteries seem superior in this context as 
                  you would save on weight and make the power supply easier, and cheaper to replace.
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Communication Subsystem</h4>
                  <p className="mb-3 text-white text-lg">
                  The physical hardware of the communication system utilizes the HC-05 module. This module is an easy to use bluetooth communication 
                  technology that allows for seamless communication between a transmitter and a receiver. This was the direction taken for the prototype 
                  unit to validate the wireless communication capabilities of all the sensors, and the battery system, without having to purchase another 
                  Arduino unit. By installing the module on the payload and connecting with a laptop, wireless communication can be maintained between the 
                  two devices. 
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Ground Station</h4>
                  <p className="mb-3 text-white text-lg">
                  The design of the ground station used for the drone and the payload is relatively simple. The ground station consists of a computer 
                  system utilizing Windows 10 operating system. Arduino IDE is installed on the computer that allows the user to program the payload and 
                  communicate with the sensors using C++. This IDE is also the key component in displaying the received data, which will be displayed on 
                  a monitor screen for the user.
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
  )
}

export default fdd