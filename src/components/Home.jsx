import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

const cardData = [
  {
    title: 'HTML',
    description: 'HTML is the standard markup language used to create web pages.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: true,
    buttonText: 'Buy Now',
  },
  {
    title: 'CSS',
    description: 'CSS is a style sheet language used for describing the look and formatting of a document.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'JavaScript',
    description: 'JavaScript is a programming language that is one of the core technologies of the web.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: true,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    isNew: false,
    buttonText: 'Buy Now',
  }
];

function Home() {
  return (
    <>
      <Navbar />

      <div className='bg-zinc-900 text-white w-full pt-24 py-56'>
        <div className='w-full'>
          <div className='max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[10vw] leading-none sm:text-[15vw] md:text-[10vw]'>
              <span className='block sm:inline'>Empower Your</span>{' '}
              <span className=" block sm:inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Future
              </span>{' '}
              <span className='block sm:inline italic'>with</span>{' '}
              <span className='block sm:inline'>Knowledge.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Pass the cardData as a prop to the Card component */}
      <Card cards={cardData} />
    </>
  );
}

export default Home;
