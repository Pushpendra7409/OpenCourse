import React, { useState } from 'react';

function Card({ cards }) {
  const cardsPerPage = 3; // Show 3 cards per page
  const totalPages = Math.ceil(cards.length / cardsPerPage); // Calculate the total number of pages

  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  // Get the current set of cards to display
  const currentCards = cards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  // Handle dot click to switch pages
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="flex flex-col items-center py-10 ">
      {/* Cards container */}
      <div className="flex overflow-hidden w-full justify-center space-x-4 flex-wrap gap-x-4 py-10 text-white">
        {currentCards.map((card, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl border-[2px] my-10">
            <figure>
              <img src={card.imageUrl} alt={card.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {card.title}
                <div className={`badge ${card.isNew ? 'bg-red-500' : 'bg-gray-500'}`}>
                  {card.isNew ? 'NEW' : 'OLD'}
                </div>
              </h2>
              <p>{card.description}</p>
              <div className="card-actions mt-7">
                <button className="btn btn-primary text-white text-lg w-full bg-blue-500 hover:bg-green-500">{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-3 w-3 rounded-full ${
              index === currentPage ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            onClick={() => handlePageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
