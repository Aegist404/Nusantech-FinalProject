import React, { useState } from 'react';

const RatingAndCommentComponent = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Di sini Anda dapat mengirim rating dan komentar ke backend atau melakukan tindakan lain sesuai kebutuhan.
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 1; i <= numStars; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(i)}
          className={`cursor-pointer ${i <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-300 p-6 rounded w-96">
        <h1 className="text-xl font-semibold mb-4">Rating dan ulasan anda</h1>
        <div className="flex justify-center items-center mb-4">
          <span className="mr-2">Tidak Baik</span>
          <div>{renderStars(5)}</div>
          <span className="ml-2">Sangat Baik</span>
        </div>
        <div>
          <p className="mb-2">Berikan komentar:</p>
          <textarea
            rows="4"
            cols="50"
            className="border border-gray-300 p-2 w-full"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-4 py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingAndCommentComponent;