import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const items = [
  {
    name: 'T-shirts',
    desc: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    link: 'tshirts',
  },
  {
    name: 'Hoodies',
    desc: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    link: 'hoodies',
  },
  {
    name: 'Mugs',
    desc: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    link: 'mugs',
  },
  {
    name: 'Stickers',
    desc: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    link: 'stickers',
  },
]

function IndexInfo() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium tracking-widest text-indigo-500 sm:text-3xl">
            SPOTLIGHT
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div className="flex flex-wrap">
          {items.map((item) => (
            <div className="border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 lg:border-l-2 xl:w-1/4">
              <h2 className="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">
                {item.name}
              </h2>
              <p className="mb-4 text-base leading-relaxed">{item.desc}</p>
              <Link href={`/` + item.link}>
                <a>
                  <button className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 text-gray-600 hover:bg-indigo-400 hover:text-white">
                    {' '}
                    Check Out
                    <AiOutlineArrowRight className="mx-2" />
                  </button>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <button className="mx-auto mt-16 flex rounded-lg border-0 bg-indigo-400 py-2 px-8 text-lg text-white hover:bg-indigo-500 focus:outline-none">
            Browse All
        </button>
      </div>
    </section>
  )
}

export default IndexInfo
