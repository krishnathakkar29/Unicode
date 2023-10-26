import React from 'react'
import Background from './Background.jpeg'

function Signup() {

  
  return (
    <>
      <div className='w-full h-[79vh] py-3 flex justify-center items-center' style={{backgroundImage: `url(${Background})` , backgroundPosition: "center" , backgroundSize: "cover"}}>
        <div className='bg-white h-full p-3 px-8 rounded-[20%] flex flex-col gap-3 w-[50%]'>

          <h1 className='text-center font-serif font-medium text-gray-800 text-4xl my-1 '>Mentee Signup </h1>

          <div className='flex items-center justify-start gap-2 inline-block'>
            <label htmlFor="h1" className='font-normal text-xl'>Name:</label>
            <input type="text" name="" id="h1" className='bg-gray-100 w-[50%] p-1 text-black rounded-md border-[1px] border-black mx-4' placeholder='Name'/>
          </div>

          <div className='flex items-center justify-start gap-2'>
            <label htmlFor="h2" className='font-normal text-xl'>Email:</label>
            <input type="text" name="" id="h2" className='bg-gray-100 w-[30%] p-1 text-black rounded-md border-[1px] border-black mx-4' placeholder='Email'/>
          </div>

          <div className='flex items-center justify-start gap-2'>
            <label htmlFor="h3" className='font-normal text-xl'>Password:</label>
            <input type="password" name="" id="h3" className='bg-gray-100 w-[50%] p-1 text-black rounded-md border-[1px] border-black ' placeholder='Password' />
          </div>

          <div className='flex items-center justify-start gap-2'>
            <label htmlFor="h4" className='font-normal text-xl'>Date of Birth: </label>
            <input type="date" className='bg-gray-100 w-[50%] mt-1 border-[1px] rounded-xl border-black p-1 px-2' id="h4" />
          </div>

          <div className='flex items-center justify-start gap-2'>
            <label htmlFor="h5" className='font-normal text-xl'>Age:</label>
            <input type="password" name="" id="h5" className='bg-gray-100 w-[50%] p-1 text-black rounded-md border-[1px] border-black' placeholder='Enter your age' />
          </div>

          <div>
            <p className='inline-block mr-3 font-normal text-xl'>Gender:</p>
          <input type="radio" id="Male" name="radio1" value="Male" className='mr-1'/>
          <label htmlFor="Male" className='font-normal text-xl'>Male</label>

          <div className='px-2 inline-block'>
          <input type="radio" id="Female" name="radio1" value="Female" className='mr-1' />
          <label htmlFor="Female" className='font-normal text-xl'>Female</label>
          </div>
            
          </div>

          <div className='flex items-center justify-start gap-2'>
            <label htmlFor="h6" className='font-normal text-xl'>Phone Number:</label>
            <input type="text" name="" id="h6" className='bg-gray-100 w-[50%] p-1 text-black rounded-md border-[1px] border-black ' placeholder='Name' />
          </div>

          <div className='flex justify-center items-center'>
            <button className='bg-[#1d9c5f] text-[#ceeaf1]  md:p-3 rounded-xl  w-[50%] '>Submit</button>
          </div>




        </div>
      </div>
    </>
  )
}

export default Signup