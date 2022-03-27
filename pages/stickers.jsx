import Link from 'next/link'
import React from 'react'

const tshirtsInfo = [
  {
    id: 1,
    name: 'The Spiderman',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/spider-man-chibi-sticker-india-438x438.jpg',
  },
  {
    id: 2,
    name: 'Genius at work',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/genius-at-work-sticker-india-438x438.jpg',
  },
  {
    id: 3,
    name: 'Deadpool',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/deadpool-chibi-sticker-india-438x438.jpg',
  },
  {
    id: 4,
    name: 'Reality Sucks!',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/rick-and-morty-this-reality-sucks-sticker-india-438x438.jpg',
  },
  {
    id: 5,
    name: 'Thug Life!',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/thug-life-glasses-sticker-india-438x438.jpg',
  },
  {
    id: 6,
    name: 'Panda Dab',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/panda-dab-sticker-india-438x438.jpg',
  },
  {
    id: 7,
    name: 'The Hogwarts',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/harry-potter-hogwarts-crest-sticker-india-438x438.jpg',
  },
  {
    id: 8,
    name: 'Geek Inside',
    price: '59.00',
    category: 'Stickers',
    link: 'https://www.redwolf.in/image/cache/catalog/stickers/geek-inside-sticker-india-438x438.jpg',
  },
]

export default function stickers() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-3 py-24 md:px-2">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {tshirtsInfo.map((item) => (
            <div className="w-full cursor-pointer border-2 border-gray-100 p-4 hover:shadow-lg">
              <a className="relative block h-80 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="m-auto block h-full w-full object-cover object-top md:m-0"
                  src={item.link}
                />
              </a>
              <div className="mt-4">
                <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                  {item.category}
                </h3>
                <h2 className="title-font text-lg font-medium text-gray-900">
                  {item.name}
                </h2>
                <p className="mt-1">₹ {item.price}</p>
              </div>

              <div className="my-4">
                <Link href={`/product/` + item.name}>
                  <a>
                    <button className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-3 py-1 text-gray-600 hover:bg-indigo-400 hover:text-white">
                      Buy Now
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
