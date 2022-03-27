import Link from 'next/link';
import React from 'react';
import { SiSpotlight } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <Link href='/'>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <SiSpotlight className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"/>
                <span className="ml-3 text-xl">Spotlight</span>
            </a>
        </Link>
      <p className="mt-2 text-sm text-gray-500">Where fashion speaks !!</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Spotlight —
        <a href="https://twitter.com/ayushmp7" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@beinspotlight</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500 hover:text-gray-600 text-lg mx-1">
          <FaFacebookF/>
        </a>
        <a className="ml-3 text-gray-500 hover:text-gray-600 text-lg mx-1">
          <FaTwitter/>
        </a>
        <a className="ml-3 text-gray-500 hover:text-gray-600 text-lg mx-1">
         <FaInstagram/>
        </a>
        <a className="ml-3 text-gray-500 hover:text-gray-600 text-lg mx-1">
          <FaYoutube/>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer