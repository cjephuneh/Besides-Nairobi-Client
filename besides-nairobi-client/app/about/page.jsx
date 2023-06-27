import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import Sponsor from "../../public/assets/shehacks.png"
import Lawrence from '../../public/assets/lawrence.webp'
// import Footer from '../../components/footer'


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
          <title >Welcome to Bsides Nairobi</title>
        </Head>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white bg-green-600 rounded text-center">
            Welcome to Bsides Nairobi
          </h1>
        </div>
      </div>
      
      <div className=" h-[1000px] ">
      <h1 className="text-red-500 font-semibold text-4xl mb-10 mt-16 text-center ">
          About - Bsides Nairobi
        </h1>
        <span className="ml-[150px] text-gray-500 font-semibold text-[23px] leading-[42px] space-x-4 block mb-20  tracking-wide">
          Security BSides is a non-profit, community-driven event built for and by members 
          of the information security community.<br/> This creates opportunities for individuals 
          to both present and participate in an intimate atmosphere that encourages <br/> innovation, 
          inclusivity, networking, and collaboration.<br/> Our aim is to help develop the Information 
          Security community in Kenya. <br/> 

        </span>

        <span className='mt-5  text-gray-500 font-semibold text-[23px] ml-[150px] space-x-4 block mb-20 leading-8 tracking-wide'>If you would like to learn more or get involved, please 
          email <a href="mailto:info@bsidesnairobi.ke" className="text-green-500 underline">
          info@bsidesnairobi.ke</a>.
          </span>

        <div className='ml-[220px] text-gray-500 font-medium leading-8 text-2xl
        space-x-4 block mb-20 tracking-wide mt-[20px]'>
          <ul className="list-disc">
            <li>Meet our Organising Committee</li>
            <li className='underline'>Meet our Review Board</li>
            <li>Meet our Mentors (coming soon)</li>
            <li>Thank you to all our volunteers (coming soon)</li>
          </ul>
        </div>

        <div className='ml-[150px] flex-col mb-12'>
        <p className='text-gray-500 text-3xl font-semibold'>Contact Us:</p>

        <span className='flex text-gray-500 text-2xl'>General Enquires:  info@bsidesnairobi.ke</span>
        <span className='text-gray-500 text-2xl'>Sponsorship:  info@bsidesnairobi.ke</span>
        </div>


        <div class="bg-gray-100 p-8 flex-col space-y-8 h-[800px] absolute w-full">
        <div class="bg-gray-100 p-8 flex-col space-y-8 h-[700px] absolute w-full">
          <div class="w-[500px] flex ml-[150px] mb-10">
            <Image src={Lawrence} alt="Sponsor 1" width={100} height={100} className="rounded-full h-40 w-40 object-cover" />
            <div class="pl-8 flex-grow w-full absolute ml-[200px] mt-[20px] mb-2">
              <h2 class="text-3xl font-bold mb-4">Lawrence Muchilwa</h2>
              <p class="text-lg font-medium">Cybersecurity engineering manager with focus
                on cyber defend and prevent operations.<br/> He leads a cyber security operations 
                center and researches on threat intelligence and forensics.
              </p>
            </div>
          </div>
          <div class="w-[500px] flex ml-[150px] mb-10">
            <Image src={Lawrence} alt="Sponsor 1" width={100} height={100} className="rounded-full h-40 w-40 object-cover" />
            <div class="pl-8 flex-grow absolute ml-[200px] mt-[20px]">
              <h2 class="text-3xl font-bold mb-4">Lawrence Muchilwa</h2>
              <p class="text-lg font-medium">Cybersecurity engineering manager with focus
                on cyber defend and prevent operations.<br/> He leads a cyber security operations 
                center and researches on threat intelligence and forensics.
              </p>
            </div>
          </div>
          <div class="w-[500px] flex ml-[150px] mb-10">
            <Image src={Lawrence} alt="Sponsor 1" width={100} height={100} className="rounded-full h-40 w-40 object-cover" />
            <div class="pl-8 flex-grow absolute ml-[200px] mt-[20px]">
              <h2 class="text-3xl font-bold mb-4">Lawrence Muchilwa</h2>
              <p class="text-lg font-medium">Cybersecurity engineering manager with focus
                on cyber defend and prevent operations.<br/> He leads a cyber security operations 
                center and researches on threat intelligence and forensics.
              </p>
            </div>
          </div>
        </div>

        

      </div>
     
      </div>
      
      
    </div>

  )
}

export default about
