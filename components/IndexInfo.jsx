import Link from 'next/link';
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const items = [
    {
        name:'T-shirts',
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        link:'tshirts'
    },
    {
        name:'Hoodies',
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        link:'hoodies'
    },
    {
        name:'Mugs',
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        link:'mugs'
    },
    {
        name:'Stickers',
        desc:'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        link:'stickers'
    }
]


function IndexInfo () {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500 tracking-widest">SPOTLIGHT</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            
            <div className="flex flex-wrap">

                {items.map(item => (
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 lg:border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{item.name}</h2>
                        <p className="leading-relaxed text-base mb-4">{item.desc}</p>
                        <Link href={`/` + item.link}>
                            <a className="text-indigo-500 inline-flex items-center justify-center">Check Out
                                <AiOutlineArrowRight className='mx-2'/>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>


            <button className="flex mx-auto mt-16 text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded-lg text-lg">
                Browse All
            </button>
        </div>
    </section>
  );
}

export default IndexInfo