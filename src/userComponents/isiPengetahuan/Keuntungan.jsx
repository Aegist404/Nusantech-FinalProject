// import PropTypes from 'prop-types';


// function ListItem({ text }) {
//   return <li>{text}</li>;
// }

// ListItem.propTypes = {
//     text: PropTypes.string.isRequired
//   };

// function Keuntungan() {
//   const items = [
//     '4 menit video total pembelajaran',
//     '5 bahan bacaan',
//     '5 konten dapat diunduh',
//     'Kuis yang dapat dikerjakan',
//     'Sertifikat yang dapat diunduh'
//   ];

//   return (
//     <div>
//       <h1>Yang anda dapatkan di pelatihan ini :</h1>
//       <ul>
//         {items.map((item, index) => (
//           <ListItem key={index} text={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Keuntungan;


import React from 'react'

function Keuntungan() {
  return (
    <div className='border border-black p-3 ml-4 mt-4 mr-7' >
      <h2 className='font-bold'>Yang anda dapatkan di video ini:</h2> 
    <div className='flex '>
      <div className='mr-24'>
      <li>4 Menit total video pembelajaran</li>
      <li>5 bahan bacaan</li>
      <li>5 konten yang dapat diunduh</li>
      </div>
      <div>
      <li>kuis yang dapat dikerjakan</li>
      <li>sertifikat yang dapat diunduh</li>
      </div>
      </div>
      </div>
  )
}

export default Keuntungan