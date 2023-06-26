import React from 'react'

function Archives() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images.jpeg')", height: "50vh" }}>
        <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">Welcome to Bsides Nairobi</h1>
        </div>
      </div>
      <div>
        <h1 className='text-green-500 font-bold text-4xl mb-8'>Archives - Bsides Nairobi</h1>
        <span>
            2022 - Conference - Speakers 
        </span>

        <div className='bg-gray-200'>
            <h1>
                What is BSides?
            </h1>

            <p>
                The Security BSides brand is known all over the world for being a community driven event and being different.
                BSides Melbourne want to uphold those values which is why this is also a non-for-profit event, 100% volunteer run put on by and for the community.
                BSides is a conference that provides a platform for first-time speakers, students, new and experienced
                professionals an environment to present their work in a friendly and welcoming environment. We welcome all participants.
            </p>

            <h1>
                What BSides is not? 
            </h1>

            <p>
                BSides does not compete with any other event. The goal has and always will be to expand the spectrum of conversation 
                and provide a platform for anyone interested in security to participate.  BSides is not the All-Conference-Rejects!
                The goal of Security BSides is to create and enable a greater variety of conversation. We do not want speakers who 
                are talking about the current big thing, we want to find new talent who are discussing the NEXT BIG THING!  
            </p>
            
        </div>

      </div>
    </div>
  )
}

export default Archives
