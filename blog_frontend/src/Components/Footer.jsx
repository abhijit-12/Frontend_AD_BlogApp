import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are dedicated to providing the best service possible. Our team
              is committed to ensuring your satisfaction with every interaction.
            </p>
          </div>

          
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Kolkata , Basdroni 700047
            </p>
            <p className="text-gray-400">Phone: 7001823436</p>
            <p className="text-gray-400">Email: adas0861@.com</p>
          </div>

          
          <div className="w-full md:w-1/4 mb-6 flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}  All rights reserved by Abhijit Das
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
