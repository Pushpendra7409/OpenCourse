import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Counter from './Counter';
import Hero from './Hero';
import Video from './Video';
import Footer from './Footer';

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
      <Hero />
      <Counter />
      <Card cards={cardData} />
      <Video />
      <Footer />
    </>
  );
}

export default Home;
