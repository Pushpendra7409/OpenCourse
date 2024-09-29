import React, { useState } from 'react';
import { PiArrowLineUpBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // For Hamburger and Close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        
        <div className='nleft flex items-center'>
          <h1 className='text-xl flex items-center gap-2'><PiArrowLineUpBold />OpenCourses</h1>

          
          <div className='hidden md:flex Links gap-14 ml-20'>
            {["Home", "Courses", "ContactUs", ""].map((elem, index) =>
              elem.length === 0 ? <span key={index} className='w-[2px] h-7 bg-zinc-700'></span> : (
                <Link key={index} className='text-xl flex items-center gap-1' to={elem === "Home" ? "/" : `/${elem.toLowerCase()}`}>
                  {index === 1 ? <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span> : null}
                  {elem}
                </Link>
              ))}
          </div>
        </div>

       
        <div className='hidden md:flex border border-sky-500 rounded px-8 py-2'>
          <Link to="/signin">
            <button>SignIn</button>
          </Link>
        </div>

        
        <div className='md:hidden flex items-center'>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className='md:hidden bg-gray-800 w-full text-center py-4'>
          <ul className='space-y-4'>
            {["Home", "Courses", "ContactUs", "SignIn"].map((elem, index) => (
              <li key={index}>
                <Link className='text-xl text-white' to={elem === "Home" ? "/" : `/${elem.toLowerCase()}`} onClick={handleMenuToggle}>
                  {elem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

