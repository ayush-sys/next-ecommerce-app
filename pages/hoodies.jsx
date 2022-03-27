import Link from 'next/link';
import React from 'react';


const tshirtsInfo = [
  {
    id:1,
    name:'The Gravero collection',
    price:'899.00',
    category:'Hoodies',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/graverowhitehoodie_3b91de6f-cb25-482a-836a-bb598c88c42f_800x.png?v=1636826302'
  },
  {
    id:2,
    name:'The Vero',
    price:'899.00',
    category:'Hoodies',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/veroblack_f08dd61e-b732-4ce6-88a2-5110bf1d7905_400x.png?v=1636822382'
  },
  {
    id:3,
    name:'The Minions - Not Amused',
    price:'699.00',
    category:'Hoodies',
    link:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1640773237_4788304.jpg?format=webp&w=300&dpr=1.3'
  },
  {
    id:4,
    name:"Back to 90's",
    price:'699.00',
    category:'Hoodies',
    link:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1646998704_4613157.jpg?format=webp&w=300&dpr=1.3'
  },
  {
    id:5,
    name:'The Rocket - S8UL',
    price:'999.00',
    category:'Hoodies',
    link:'https://cdn.shopify.com/s/files/1/0619/7264/4055/files/s8ul_infinity_black_tr_1.png?v=1645932667'
  },
  {
    id:6,
    name:'The Cosmos - S8UL',
    price:'1299.00',
    category:'Hoodies',
    link:'https://cdn.shopify.com/s/files/1/0619/7264/4055/files/black_gnd_hd.png?v=1645981444'
  },
  {
    id:7,
    name:'The Superman',
    price:'799.00',
    category:'Hoodies',
    link:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1640676062_9873760.jpg?format=webp&w=300&dpr=1.3'
  },
  {
    id:8,
    name:'The Spiderman',
    price:'799.00',
    category:'Hoodies',
    link:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1640777756_4027965.jpg?format=webp&w=300&dpr=1.3'
  },
]


export default function hoodies() {
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

