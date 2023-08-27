import PropTypes from 'prop-types';


function ListItem({ text }) {
  return <li>{text}</li>;
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired
  };

function Keuntungan() {
  const items = [
    '4 menit video total pembelajaran',
    '5 bahan bacaan',
    '5 konten dapat diunduh',
    'Kuis yang dapat dikerjakan',
    'Sertifikat yang dapat diunduh'
  ];

  return (
    <div>
      <h1>Yang anda dapatkan di pelatihan ini :</h1>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}

export default Keuntungan;
