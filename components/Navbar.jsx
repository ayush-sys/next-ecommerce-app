import Link from 'next/link';
import React from 'react';
import { SiSpotlight } from 'react-icons/si';
import { AiOutlineShopping } from 'react-icons/ai';


function Navbar() {
  return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            {/* logo */}
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <SiSpotlight className='w-10 h-10 text-indigo-500'/>
                <span className="ml-3 text-xl">Spotlight</span>
            </a>

            {/* nav items */}
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link href='/tshirts'>
                    <a className='mr-5 hover:text-gray-700'>Tshirts</a>
                </Link>

                <Link href='/mugs'>
                    <a className='mr-5 hover:text-gray-700'>Mugs</a>
                </Link>

                <Link href='/hoodies'>
                    <a className='mr-5 hover:text-gray-700'>Hoodies</a>
                </Link>

                <Link href='/stickers'>
                    <a className='mr-5 hover:text-gray-700'>Stickers</a>
                </Link>
            </nav>

            {/* shopping cart */}
            <div className='absolute right-0 mx-5'>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-2 md:mt-0">
                    <AiOutlineShopping className='text-xl md:text-2xl text-gray-600'/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar