// import Link from 'next/link';
import Logo from '../public/assets/shape-x1.png'
import Image from 'next/image';




 const Navbar = () => {
  return (
    <nav className="flex items-center justify-between space-x-8 flex-wrap bg-white shadow-lg p-6">
      <div className="flex items-center flex-shrink-0 mr-[200px] aboslute ml-auto">
        
        <Image
          src={Logo}
          alt='logo'
          width={130}
          height={130}
          className='ml-[150px]'
        />
        
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-lg lg:flex-grow">
          <a href="/">
            <h1 className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-500  mr-4">
              Home
            </h1>
          </a>
          <a href="../app/about.js">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              About
            </h1>
          </a>
          <a href="/cfp">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Call for Papers
            </h1>
          </a>
          <a href="/speakers">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500 mr-4">
              Speakers
            </h1>
          </a>
          <a href="/schedule">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Schedule
            </h1>
          </a>
          <a href="/volunteer">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Volunteer
            </h1>
          </a>
          <a href="/codeofconduct">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500 ">
              Code of Conduct
            </h1>
          </a>
        </div>
      </div>
    </nav>
  );
};
 export default Navbar;