import React from 'react'
import Head from 'next/head'
import Footer from '../components/footer'
import Image from 'next/image'
import Sponsor from "../../public/assets/shehacks.png"
import AfriHackon from '../../public/assets/africahackon.png'

function Archives() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/nairobi-kenya-skyline-flag-color.png')", height: "50vh" }}>
        <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-black bg-green-600 rounded text-center">Welcome to Bsides Nairobi</h1>
        </div>
      </div>
      <div class="bg-white p-8  mx-[200px]  h-[400px] items-center mt-10 ">
        <h1 class="text-green-400 font-bold text-5xl mt-10 mb-10 ">
        Archives - BSides Nairobi
        </h1>
          <p class="text-2xl text-gray-500 font-semibold mb-10">
            2019 - <a href="/conference" class="underline">Conference</a> - <a href="/speakers" class="underline">Speakers</a>
          </p>
        </div>

        <div className="bg-[#2e383a]  p-12 text-white text-2xl h-[550px]">
        <h1 className="text-4xl font-bold mb-8">What is BSides?</h1>
        <p className=" leading-7 text-white">
          The Security BSides brand is known all over the world for being a
          community driven event and being different. BSides Nairobi want to
          uphold those values which is why this is also a non-for-profit event,
          100% volunteer run put on by and for the community. BSides is a
          conference that provides a platform for first-time speakers, students,
          new and experienced professionals an environment to present their work
          in a friendly and welcoming environment. We welcome all participants.
        </p>
        <h1 className="text-4xl font-bold mt-12 mb-8">What BSides is not?</h1>
        <p className=" leading-7">
          BSides does not compete with any other event. The goal has and always
          will be to expand the spectrum of conversation and provide a platform
          for anyone interested in security to participate. BSides is not the
          All-Conference-Rejects! The goal of Security BSides is to create and
          enable a greater variety of conversation. We do not want speakers who
          are talking about the current big thing, we want to find new talent
          who are discussing the NEXT BIG THING!
        </p>
      </div>


      <div class="flex flex-wrap items-center justify-center py-12 h-[600px]">
        <div class="w-full md:w-1/2 px-4">
          <h2 class="text-4xl font-semibold mb-6 mt-[20px] ml-8">
            2023 Sponsors/Donations/Friends
          </h2>
          <p class="text-xl leading-7 mb-8 ml-8 block">
            A big thank you to all the companies and individuals who have sponsored,
            donated items and time and who have stood by us since we started in 2021.
            BSides Nairobi could not happen without your support.
          </p>

          <p class="text-xl leading-7 mb-8 ml-8 block">
            To Help us impact the community through sponsorship 
            
            <span class="ml-2 font-normal">
            <a href="#" class="text-blue-500 underline">
            click here
            </a>
          </span>
          </p>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <div class="flex flex-wrap justify-center">
            <div class="w-1/3 px-4 py-2">
              <Image src={Sponsor} alt="Sponsor 1" width={80} height={80} />
            </div>
            <div class="w-1/3 px-4 py-2">
              <Image src={Sponsor} alt="Sponsor 2" width={80} height={80} />
            </div>
            <div class="w-1/3 px-4 py-2">
              <Image src={Sponsor} alt="Sponsor 3" width={80} height={80} />
            </div>
            <div class="w-1/3 px-4 py-2">
              <Image src={AfriHackon} alt="Sponsor 4" width={80} height={80} />
            </div>
            <div class="w-1/3 px-4 py-2">
              <Image src={AfriHackon} alt="Sponsor 5" width={80} height={80} />
            </div>
            <div class="w-1/3 px-4 py-2">
              <Image src={AfriHackon} alt="Sponsor 6" width={80} height={80} />
            </div>
          </div>
          </div>
          </div>
          
    <Footer/>
    </div>
  )
}

export default Archives
