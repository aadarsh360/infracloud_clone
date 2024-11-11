import React from 'react'
import { IoIosRocket } from "react-icons/io";

export default function Navbar() {
  return (
    <div>
    <div className="h-6 text-center text-sm text-white bg-purple-500"><span>Stay ahead with AI-Xplore: Sign up for live webinars or watch on-demand</span></div>

  <div className="flex h-16">
      <div className="w-[20%] px-3 py-4"> <h1 className="text-center text-3xl">INFRACLOUD</h1></div>
      <div className="container place-items-center text-center text-sm text-gray-600 w-[60%] space-x-10 px-3 py-4">
        <span>AI Cloud</span> 
        <span>Services</span>
        <span>Enterprise Support</span>
        <span>Solutions</span>
        <span>Resources</span>
        <span>Company</span>
      </div>
      <div className="w-[20%] py-2 text-center"> <button className="bg-orange-500 text-white py-2 px-8 border border-orange-600 rounded"> Contact Us
  </button></div>
    </div>

    </div>
  )
}
