import React, { useState } from 'react';

function Card({ cards }) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const handleLoadMore = () => {
    setStartIndex(startIndex + 3);
    setVisibleCards(3);
  };

  return (
    <div>
      <div className='w-full bg-zinc-900 py-10 text-white'>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-row flex-wrap gap-x-4 justify-center">
            {cards.slice(startIndex, startIndex + visibleCards).map((card, index) => (
              <div key={index} className="w-[30%] p-4">
                <div className="card bg-base-100 shadow-xl border-[2px] border-zinc-600">
                  <figure>
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {card.title}
                      {card.isNew ? (
                        <div className="badge badge-secondary bg-pink-500">NEW</div>
                      ) : (
                        <div className="badge badge-secondary bg-gray-500">OLD</div>
                      )}
                    </h2>
                    <p>{card.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary bg-blue-600 text-white w-full mt-10">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {startIndex + visibleCards < cards.length && (
          <button
            className="btn btn-primary bg-blue-600 text-white"
            onClick={handleLoadMore}
          >
            Load more...
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;