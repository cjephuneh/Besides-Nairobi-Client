import React from 'react'
import Head from 'next/head'

function about() {
  return (
    <div>
       <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/nairobi-kenya-skyline-black_1.png')",
          height: "47vh",
        }}
      >
        <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome to Bsides Nairobi
          </h1>
        </div>
      </div>
      
      <div className=" h-[1000px] ">
      <h1 className="text-red-500 font-semibold text-4xl mb-10 mt-16 text-center ">
          About - Bsides Nairobi
        </h1>
        <span className="ml-20 text-gray-500 font-semibold text-[23px]  space-x-4 block mb-20 leading-8 tracking-wide">
          Security BSides is a non-profit, community-driven event built for and by members 
          of the information security community.<br/> This creates opportunities for individuals 
          to both present and participate in an intimate atmosphere that encourages<br/> innovation, 
          inclusivity, networking, and collaboration. Our aim is to help develop the Information 
          Security <br/>community in Kenya. If you would like to learn more or get involved, please 
          email <a href="mailto:info@bsidesnairobi.ke" className="text-green-500 underline">
          info@bsidesnairobi.ke</a>.
        </span>

        <div className="list-disc">
        <span>Meet our Organising Committee</span>
        <span>Meet our Review Board</span>
        <span>Meet our Mentors (coming soon)</span>
        <span>Thank you to all our volunteers (coming soon)</span>
        </div>

        <div>
        Contact Us:

        General Enquires: info@bsidesmelbourne.com
        Sponsorship: sponsorship@bsidesmelbourne.com
        </div>

        <div></div>

      </div>
    </div>
  )
}

export default about
