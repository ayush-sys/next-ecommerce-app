import Link from 'next/link';
import React from 'react';
import { SiSpotlight } from 'react-icons/si';
import { FiShoppingBag } from 'react-icons/fi';


const navItems = [
    {
        name: 'T-shirts',
        link: 'tshirts'
    },
    {
        name: 'Hoodies',
        link: 'hoodies'
    },
    {
        name: 'Mugs',
        link: 'mugs'
    },
    {
        name: 'Stickers',
        link: 'stickers'
    },
]


function Navbar() {
  return (
    <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            {/* logo */}
            <Link href='/'>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <SiSpotlight className='w-10 h-10 text-indigo-500'/>
                    <span className="ml-3 text-xl">Spotlight</span>
                </a>
            </Link>

            {/* nav items */}
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:text-lg justify-center">

                {navItems.map(item => (
                    <Link href={`/` + item.link}>
                        <a className='mr-5 hover:text-gray-700'>{item.name}</a>
                    </Link>    
                ))}
                
            </nav>

            {/* shopping cart */}
            <div className='absolute right-0 mx-5'>
                <Link href='/checkout'>
                <a>
                <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded mt-2 md:mt-0">
                    <FiShoppingBag className='text-base md:text-2xl text-gray-600'/>
                </button>
                </a>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar