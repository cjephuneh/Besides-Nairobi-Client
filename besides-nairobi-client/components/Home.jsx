import Head from 'next/head';

function Home() {
  return (
    <>
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images.jpeg')", height: "50vh" }}>
      <Head>
        <title>Welcome to Bsides Nairobi</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-white text-center">Welcome to Bsides Nairobi</h1>
      </div>
    </div>
   
    <div className='bg-gray-100 p-8'>
      <h1 className='text-green-500 font-bold text-4xl mb-8'>2023 Bsides Nairobi</h1>
      <span className='text-lg text-gray-900 font-bold mb-4'>
      ​BSides Nairobi 2023 is now officially in planning mode and the team can't be more excited. We are excited to be officially partnering with again with United States Internationa University to host our 2023 event. 
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        ​Watch this space and our socials for updates on this year's conference.
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        Dates:
        <span className='ml-2 font-normal'>8-10th September, 2023</span>
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        Sponsorship:
        <a href='#' className='ml-2 font-normal text-blue-500 hover:underline'>Interested in Supporting and Sponsoring check out our Sponsorship Packages</a>
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        Volunteering at BSides:
        <a href='#' className='ml-2 font-normal text-blue-500 hover:underline'>Volunteering Opportunities are now open</a>
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        Diversity and Inclusion / Financial Aid Scholarship:
        <a href='#' className='ml-2 font-normal text-blue-500 hover:underline'>Apply Now</a>
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        CFP and CFT:
        <span className='ml-2 font-normal'>now open</span>
      </span>
      <span className='text-lg text-gray-900 font-bold mb-4 block'>
        Tickets:
        <span className='ml-2 font-normal'>Announcements coming soon</span>
      </span>
    </div>
    </>
  );
}

export default Home;