import Link from 'next/link';
 const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="font-semibold text-xl tracking-tight ml-2">Conference Name</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              About
            </a>
          </Link>
          <Link href="/cfp">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Call for Papers
            </a>
          </Link>
          <Link href="/speakers">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Speakers
            </a>
          </Link>
          <Link href="/schedule">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Schedule
            </a>
          </Link>
          <Link href="/volunteer">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Volunteer
            </a>
          </Link>
          <Link href="/code-of-conduct">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              Code of Conduct
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
 export default Navbar;