import Link from 'next/link';
import React from 'react';


const tshirtsInfo = [
  {
    id:1,
    name:'The Minions',
    price:'399.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/blah-mug--320-ml-382583-1631894746-1.jpg'
  },
  {
    id:2,
    name:'The Freinds',
    price:'299.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/f-r-i-e-n-d-s-mug-320-ml-463633-1643882117-1.jpg'
  },
  {
    id:3,
    name:'The Avengers assemble',
    price:'399.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/celfiedesign-avengers-assemble-kawaii-coffee-mugs-black-446458-1636638507-1.jpg'
  },
  {
    id:4,
    name:'RCB',
    price:'349.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/black-bold-makes-history-printed-ceramic-coffee-mug-320-ml-481150-1647861823-1.jpg'
  },
  {
    id:5,
    name:'The Spidey',
    price:'249.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/red-black-two-face-spidey-printed-ceramic-coffee-mug-320-ml-481386-1647939184-1.jpg'
  },
  {
    id:6,
    name:'MI - Gear up Hitman !',
    price:'399.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/blue-mumbai-indians-gear-up-printed-ceramic-coffee-mug-320-ml-481227-1647861497-1.jpg'
  },
  {
    id:7,
    name:'DC',
    price:'399.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/blue-delhi-capitals-gear-up-printed-ceramic-coffee-mug-320-ml-481228-1647861699-1.jpg'
  },
  {
    id:8,
    name:'The Big Bang Theory',
    price:'299.00',
    category:'Mugs',
    link:'https://images.bewakoof.com/t320/black-big-bang-theory-printed-ceramic-mug-350-ml-480713-1647273908-1.jpg'
  },
]


export default function mugs() {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-3 md:px-2 py-24 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tshirtsInfo.map(item => (

          <div className='p-4 w-full cursor-pointer hover:shadow-lg border-2 border-gray-100'>  
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="m-auto md:m-0 object-cover object-top w-full h-full block" src={item.link} />
            </a>
            <div className="mt-4">
               <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                 <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                 <p className="mt-1">₹ {item.price}</p>
            </div>

            <div className='my-4'>
               <Link href={`/product/` + item.name}>
                 <a>
                  <button className='bg-gray-200 hover:bg-indigo-400 text-gray-600 hover:text-white inline-flex items-center justify-center px-3 py-1 rounded-lg'>
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

