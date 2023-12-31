import React, { useState } from 'react';
import Comment from '../komentarKuis/coment';

const commentsData = [
  {
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      { author: 'Jane Smith', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ],
  },
  {
    author: 'Jane Smith',
    text: 'Ini adalah komentar kedua.',
    replies: [
      { author: 'John Doe', text: 'Balasan pertama.' },
      { author: 'Bob Brown', text: 'Balasan kedua.' },
    ],
  },
  {
    author: 'Alice Johnson',
    text: 'Ini adalah komentar ketiga.',
    replies: [
      { author: 'Jane Smith', text: 'Balasan pertama.' },
      { author: 'John Doe', text: 'Balasan kedua.' },
    ],
  },
];

const KomentarPelatihan = () => {
  const [showThirdComment, setShowThirdComment] = useState(false);

  const toggleThirdComment = () => {
    setShowThirdComment(!showThirdComment);
  };

  return (
    <div className="mt-10">
      <h1 className="font-bold mb-4">Ulasan</h1>
      {commentsData.slice(0, 2).map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
      {commentsData.length > 2 && (
        <div className="mt-4">
          <div className="text-center">
          <button
            className="text-gray-400 hover justify-items-center"
            onClick={toggleThirdComment}
          >
            
            {showThirdComment ? 'Show Less' : 'Show More'}
          </button><br />
          <button className='border border-black rounded-xl w-56'>
            + Leave a Review
          </button>
          </div>
          {showThirdComment && <Comment {...commentsData[2]} />}
        </div>
      )}
    </div>
  );
};

export default KomentarPelatihan;
