import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

import logo from "../assets/footerLogo.png";
import us from "../assets/flag.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12 md:flex md:justify-between md:space-x-8">
        {/* Logo and Brand Name */}
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="FurniFlex logo" className="w-40" />
          <p className="text-sm mt-1">Furnishing your dreams.</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 ">
          {/* About Us Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">About Us</h3>
            <ul className="space-y-4 text-[#81859F]">
              <li><a href="#" className="hover:underline">Master Plan</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
 
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Explore EEVE Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">Explore EEVE</h3>
            <ul className="space-y-4 text-[#81859F]">
              <li><a href="#" className="hover:underline">Unlock my Robot Power</a></li>
              <li><a href="#" className="hover:underline">Starlight</a></li>
              <li><a href="#" className="hover:underline">Robot Platform</a></li>
              <li><a href="#" className="hover:underline">EEVE Roadmap</a></li>
            </ul>
          </div>

          {/* Community & Support Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">Community & Support</h3>
            <ul className="space-y-4 text-[#81859F]">
              <li><a href="#" className="hover:underline">Willow X Community</a></li>
              <li><a href="#" className="hover:underline">Developer & Maker Access</a></li>
              <li><a href="#" className="hover:underline">Special Cases</a></li>
     
            </ul>
          </div>
        </div>
      </section>

      {/* Social Media and Footer Links */}
      <section className="bg-gray-900 text-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start">
              <ul className="flex gap-4">
                <li><a href="#" className="hover:text-gray-400"><FaFacebook size={20} /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaInstagram size={20} /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaTwitter size={20} /></a></li>
                <li><a href="#" className="hover:text-gray-400"><FaLinkedin size={20} /></a></li>
              </ul>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center md:justify-center">
              <ul className="flex space-x-12 text-sm text-[#81859F]">
                <li><a href="#" className="hover:underline">March22 Recap</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">General</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Country Selector */}
            <div className="flex justify-center md:justify-end items-center gap-2">
              <img src={us} alt="United States Flag" className="w-5 h-5 text-[#81859F]" />
              <span className='text-[#81859F]'>United States (English)</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

          {/* Footer Bottom Text */}
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          FurniFlex <a href="#" className="hover:underline ">© 2024 </a>. All Rights Reserved.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
