import React, { useState, useEffect } from 'react';

function VisitCounter() {
  // Initialize states for the three counters
  const [visitCount, setVisitCount] = useState(1200);
  const [subscriberCount, setSubscriberCount] = useState(300);
  const [ratingCount, setRatingCount] = useState(4.5);

  // Effect to simulate fetching data from the backend (you can replace this with a real API call)
  useEffect(() => {
    // Simulate fetching data from backend and setting it into state
    // Example: Replace this with your backend fetch logic
    // fetch('/api/data').then(response => response.json()).then(data => {
    //   setVisitCount(data.visits);
    //   setSubscriberCount(data.subscribers);
    //   setRatingCount(data.rating);
    // });
  }, []);

  return (
    <>
    <div className='w-full px-20'>
    <div className="flex justify-between w-full p-4 shadow-md text-white">
      {/* Visit Counter */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">{visitCount}</h2>
        <p className="text-gray-400">Visits</p>
      </div>

      {/* Subscriber Counter */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">{subscriberCount}</h2>
        <p className="text-gray-400">Subscribers</p>
      </div>

      {/* Rating Counter */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">{ratingCount}⭐</h2>
        <p className="text-gray-400">Rating</p>
      </div>
    </div>
</div>
    </>
  );
}

export default VisitCounter;
