import React from 'react'
import {TbBulb} from 'react-icons/tb'
import {AiOutlineLaptop,AiOutlineKey} from 'react-icons/ai'
import {GiShakingHands ,GiChatBubble  } from 'react-icons/gi'

const Outstaffing = () => {
  return (
    <div className='container'>
     <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-black">
    <div className="lg:flex-grow md:pl-14 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-4xl md:text-5xl mb-4 font-medium text-red-900">Talent On Demand </h1>
      <p className="mb-8 text-3xl leading-relaxed text-white">Scale up your team quickly with our experienced software developers</p>
    </div>
  </div>
  <div className="text-center mt-12">
        <h2 className='sm:text-2xl md:text-3xl mb-4 font-medium text-blue-500'>How it Works?</h2>
        <h1 className="sm:text-4xl md:text-4xl mb-4 font-medium text-black">Scaling up your team in 1-3 weeks
    </h1>
    
  <div className=" px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-blue-700 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
        <TbBulb className='w-24 h-24 text-red-900'/>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl font-medium mb-4">Define the problem</h2>
        <p className="leading-relaxed text-lg">We receive a request with the details of your project and requirements.</p>
        
      </div>
    </div>
    
    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-blue-700 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl font-medium mb-4">Understand the requirements</h2>
        <p className="leading-relaxed text-xl ">We deep dive into your request and present you with a list of candidates.</p>
       
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32  sm:ml-10 inline-flex items-center justify-center flex-shrink-0">
        <AiOutlineLaptop className='w-24 h-24 text-red-900'/>
      </div>
    </div>
    <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col border-b pb-10 mb-10 border-blue-700 ">
      <div className="sm:w-32 sm:h-32  sm:mr-10 inline-flex items-center justify-center  flex-shrink-0">
        <AiOutlineKey className='w-24 h-24 text-red-900'/>
       </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl  font-medium mb-4">Choose the candidates</h2>
        <p className="leading-relaxed text-xl">Choose the candidates you want to interview. We will schedule the tech calls at your earliest convenience.</p>
      </div>
    </div>
    <div className="flex items-center lg:w-4/5 mx-auto  pb-10 mb-10 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-3xl font-medium mb-4">Hire selected individuals</h2>
        <p className="leading-relaxed text-xl ">Hire selected individuals directly or on a contract basis. We assist you throughout the process and are always ready to help.</p>
       
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32  sm:ml-10 inline-flex items-center justify-center flex-shrink-0">
        <GiShakingHands className='w-24 h-24 text-red-900'/>
      </div>
    </div>
    
     </div>
     <div className="mx-5 my-8 ">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start p-16 mx-auto rounded-br-full bg-black">
      <GiChatBubble className='w-16 h-16 text-white'/>
      <h1 className="flex-grow sm:pr-16 text-4xl font-medium pl-7 text-red-900">What IT talent
are you looking for?
</h1>
      <button className="flex-shrink-0 text-red-900 bg-white border-0 py-2 font-medium px-8 focus:outline-none hover:bg-white rounded-br-full text-lg mt-10 sm:mt-0">Request a Call</button>
    </div>
  </div>

 </div>
  </div>
  )
}

export default Outstaffing