import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Navbar from './Navbar';

function SignIn() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/bg-1.png')" }} 
      >
        <Navbar />

        <div className='flex justify-center items-center flex-grow'>
          
          <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-black bg-opacity-50 border-[2px] border-zinc-600 text-white">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>

              
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Password"
                />
              </div>

             
              <div className="text-center w-full">
                <button
                  type="submit"
                  className="text-white py-2 px-4 rounded-full hover:bg-blue-600 border-[2px] border-zinc-500 focus:outline-none focus:ring focus:ring-blue-300 w-full">
                 Continue
                </button>
              </div>
            </form>

            
            <p className='text-center my-4'>or</p>
            <div className='flex justify-center w-full'>
              <button className="text-white py-2 px-4 rounded-full hover:bg-red-600 border-[2px] border-zinc-500 flex justify-center gap-2 w-full">
                <FcGoogle className='w-6 h-6'/>Continue with Google
              </button>
            </div>

            <div className='text-center mt-2'>
              <Link to="/signup" className="text-blue-500 "> 
                Create an account
              </Link>
            </div>

            <div className="text-center mt-2">
              <p>New User?</p>
              <Link to="/forgot-password" className="text-primary">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
