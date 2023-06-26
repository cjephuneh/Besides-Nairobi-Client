
import Link from 'next/link'
 const Footer = () => {
  return (
    <footer className="bg-gray-800  bottom-0 w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">About Us</h4>
            <p className="text-gray-400">Security BSides Nairobi is a community-driven event in Kenya, fostering innovation, inclusivity, networking, and collaboration in information security.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul>
              <li><Link href="/"><h1 className="text-gray-400 hover:text-white">Home</h1></Link></li>
              <li><Link href="/about"><h1 className="text-gray-400 hover:text-white">About</h1></Link></li>
              <li><Link href="/services"><h1 className="text-gray-400 hover:text-white">Services</h1></Link></li>
              <li><Link href="/blog"><h1 className="text-gray-400 hover:text-white">Blog</h1></Link></li>
              <li><Link href="/contact"><h1 className="text-gray-400 hover:text-white">Contact</h1></Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <p className="text-gray-400">123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@yourdomain.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-wrap justify-between">
          <div className="w-full text-center md:w-auto md:text-left">
            <p className="text-gray-400">&copy; 2023 BSides Nairobi. All Rights Reserved.</p>
          </div>
          <div className="w-full text-center md:w-auto md:text-right">
            <ul>
              <li><Link href="/terms"><h1 className="text-gray-400 hover:text-white">Terms &amp; Conditions</h1></Link></li>
              <li><Link href="/privacy"><h1 className="text-gray-400 hover:text-white">Privacy Policy</h1></Link></li>
              <li><Link href="/copyright"><h1 className="text-gray-400 hover:text-white">Copyright</h1></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
 export default Footer