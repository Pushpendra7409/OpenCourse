import React from 'react';
import { PiArrowLineUpBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='nleft flex items-center'>
          <h1 className='text-xl flex items-center gap-2'><PiArrowLineUpBold />OpenCourses</h1>
          <div className='Links flex gap-14 ml-20'>
            {["Home", "Courses", "ContactUs", "",].map((elem, index) =>
              elem.length === 0 ? <span key={index} className='w-[2px] h-7 bg-zinc-700'></span> : (
                <Link key={index} className='text-xl flex items-center gap-1' to={elem === "Home" ? "/" : `/${elem.toLowerCase()}`}>
                  {index === 1 ? <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500 '></span> : null}
                  {elem}
                </Link>
              ))}
          </div>
        </div>
        <div className='border border-sky-500 rounded px-8 py-2'>
          <Link to="/signin">
            <button>SignIn</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
