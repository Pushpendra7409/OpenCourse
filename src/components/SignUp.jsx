import React from 'react';
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg-1.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
        }}>
          
          <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-20 border-[2px] border-zinc-600 text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

          
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />

         
          <label className="block text-white mb-2" htmlFor="Email">Enter Email</label>
          <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />

          
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />

          
          <label className="block text-white mb-2" htmlFor="password">Confirm Password</label>
          <input type="password" placeholder="Confirm your password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />

          
          <label className='block text-white mb-2'>Enter Mobile no</label>
          <div className="flex items-center mb-4">
        <span className="flex items-center px-3 py-2 border border-gray-300 rounded-l-md" style={{ backgroundColor: 'transparent' }}>
        <img 
      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
      alt="India Flag" 
      className="w-5 h-5 mr-2"/>
    <span className="text-white">+91</span>
  </span>
 
  <input
    type="number"
    placeholder="Enter Mobile Number"
    className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:border-blue-500"
    style={{ backgroundColor: 'transparent', color: 'white' }} 
  />
</div>

          
          <div className='flex justify-center w-full'>
          <button className="mt-4 text-white py-2 px-4 border-[2px] border-zinc-500 rounded-full hover:bg-blue-600 w-full flex items-center justify-center">
           Register
          </button>
          </div>

          
          <p className='text-center my-4'>or</p>
          <div className='flex justify-center w-full'>
          <button className="text-white py-2 px-4 rounded-full hover:bg-red-600 border-[2px] border-zinc-500 flex justify-center gap-2 w-full ">
          <FcGoogle className='w-6 h-6'/>Continue with Google
          </button>
          </div>

        </div>
        </div>
    </>
  );
}

export default SignUp;



