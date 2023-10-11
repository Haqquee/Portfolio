import React from 'react'
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Rulheader from "@/public/RUL.png"
import Image from 'next/image';
import Link from 'next/link';

const rul = () => {
  return (
    <div>
        <Navbar />
        <div className="h-screen w-full">
          <Image src={Rulheader} alt='' className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black items-center text-white justify-center flex flex-col text-center">
              <div className="max-w-screen-lg mx-auto text-white">
                <h1 className="text-4xl py-2">
                 Predictive Maintenance Using Machine Learning
                </h1>
                <h2 className="text-xl">
                For my Machine Learning course in University, I worked on a term project where I used Turbofan engine data provided by NASA, 
                along with Machine Learning Libraries in Python (Tensorflow, Scikit Learn, etc), to create a Machine Learning model that can 
                predict remaining useful life of turbofan engines, for the purpose of predictive maintenance.
                <p></p>
                
                <a href="/RUL_Report.pdf" className= 'hover:text-white text-blue-500 font-bold py-2 px-4 rounded underline'>Download Full Project Report</a>
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
                    January 2022
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Overview</h4>
                  <p className="mb-3 text-white text-lg">
                  The objective of this project is to predict the remaining useful life (RUL) of turbofan
                  engines. To achieve this, run-to-failure simulated data provided by NASA Ames is to be utilized,
                  along with the Random Forest Regression model, and long short-term memory (LSTM) Neural
                  Network model. The accuracies of these models are to be evaluated and compared to determine
                  the optimal Machine Learning methodologies for predictive maintenance purposes.
                  </p>
                  <p className="mb-3 text-white text-lg">
                  The tool used to obtain the sensor measurements is called C-MAPSS. This tool is specifically
                  used to simulate realistic commercial turbofan engines. The overall system simulates an engine
                  model of 90,000 lbs. thrust class, with operational conditions at altitudes from sea level to 40,000
                  ft, Mach numbers from 0 to 0.9, and temperatures from -60 to 103 degrees Fahrenheit.
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Datasets</h4>
                  <p className="mb-3 text-white text-lg">
                  The data sets used for the project consist of training and test subsets of multiple multivariate time
                  series. Each of the separate data sets is obtained from a different unit of the same type of engine.
                  Each separate unit starts with an unknown amount of initial wear and manufacturing variation.
                  The engines used have three distinct operational settings, each having a significant impact on the
                  performance and efficiency of the engine and are therefore indicated in the data. Additionally,
                  due to factors such as environmental conditions, and electromagnetic interference, the sensor
                  data used is contaminated with sensor noise impacting the accuracy and the precision of the
                  actual measurements. In the training data sets, the engines operate until complete system failure
                  due to developed faults. In the testing data sets, the time series ends at a point before reaching
                  system failure.
                  </p>
                  <h4 className="mb-1.5 text-xl font-semibold text-cyan-400">Machine Learning Model</h4>
                  <p className="mb-3 text-white text-lg">
                  The RUL prediction for this project is done using two separate methodologies, and the results are
                  compared. Firstly, a simple Random Forest Regressor is used for prediction, and the score of the
                  regressor is evaluated. Subsequently, a more complex long short-term memory (LSTM) is used,
                  and the Neural Network’s accuracy is compared to the regression model. The LSTM model is created using Keras’ sequential class.
                  The model uses MSE loss function and the Adam optimizer. The initial learning rate is set to
                  0.001, however, a learning rate scheduler is used so that during training epochs 0 to 5, the
                  learning rate is set to 0.001, and after that, the rate is set to 0.0001. This is done to increase the
                  accuracy of the model.
                  </p>
                  <p className="mb-3 text-white text-lg">
                  
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
  )
}

export default rul