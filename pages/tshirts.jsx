import Link from 'next/link';
import React from 'react';


const tshirtsInfo = [
  {
    id:1,
    name:'The Catalyzer',
    price:'399.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/custom_resized_8f386248-bff7-4795-b803-391ca350bec1_800x.png?v=1644597547'
  },
  {
    id:2,
    name:'The Galaxy',
    price:'599.00',
    category:'T-shirts',
    link:'https://teamnigma.com/wp-content/uploads/2020/05/Nigma-Jersey-745x1024.jpg'
  },
  {
    id:3,
    name:'The Neptune - white',
    price:'499.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/flowerscrywhite_400x.png?v=1636825087'
  },
  {
    id:4,
    name:'Spaceship',
    price:'399.00',
    category:'T-shirts',
    link:'https://dbdzm869oupei.cloudfront.net/img/t-shirts/large/63829.jpg'
  },
  {
    id:5,
    name:'The Mock - S8UL',
    price:'399.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/S8UL_15-02-22_Shot12066_400x.jpg?v=1645034949'
  },
  {
    id:6,
    name:'The Neptune - black',
    price:'499.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/flowerscryBlack_400x.png?v=1636824522'
  },
  {
    id:7,
    name:'Life Goes on & on',
    price:'599.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/onon4_e13773d6-33ca-42a7-89f6-b4036a442d24_400x.png?v=1636831320'
  },
  {
    id:8,
    name:'The Halo - S8UL',
    price:'399.00',
    category:'T-shirts',
    link:'https://cdn.shopify.com/s/files/1/0592/6318/9156/products/WDWDD_400x.png?v=1645037118'
  },
]


function tshirts() {
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

export default tshirts