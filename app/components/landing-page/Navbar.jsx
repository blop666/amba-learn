import React from 'react'
import { CiUser } from "react-icons/ci";
import Link from 'next/link';


const Navbar = () => {
  

  return (
    <div className='flex flex-row mx-12 mt-3 justify-around shadow-md p-4 '>
      <div className="flex gap-2 items-center">
        <img src="tes.png" alt="" className='bg-gradient-to-r from-blue-400 to-yellow-400 w-8 h-8 rounded-xl outline-1' />
        <span className='text-md text-black font-semibold'>AmbaLearn</span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="hover:text-blue-400 text-black">Home</a>
        <a href="#" className="hover:text-blue-400 text-black/50">Courses</a>
        <a href="#" className="hover:text-blue-400 text-black/50">Testimonials</a>
        <a href="#" className="hover:text-blue-400 text-black/50">Pricing</a>
        <a href="#" className="hover:text-blue-400 text-black/50">Blog</a>
      </div>

      <div className="flex gap-3">
        <Link href="/login">
          <div className="bg-white hover:bg-gray-300/40 ease-in-out duration-150 flex px-3 py-2 rounded-lg text-sm text-center items-center gap-2"> <CiUser />Log In</div>
        </Link>
        <div className="bg-gradient-to-r from-blue-400 to-yellow-400 flex px-3 py-1 rounded-lg text-sm text-center items-center gap-2 text-white">Sign Up</div>
      </div>
    </div>
  )
}

export default Navbar