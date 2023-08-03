import React from 'react';
import { Card, Typography } from 'antd';
import { CommentOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';
import { RightCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const data = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pelatihan 1',
    description: 'Deskripsi Pelatihan 1...',
    comments: 10,
    rating: 4.2,
    dilihat: 50,
    price: 'Rp.100.000',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pelatihan 1',
    description: 'Deskripsi Pelatihan 1...',
    comments: 10,
    rating: 4.2,
    dilihat: 50,
    price: 'Rp.100.000',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pelatihan 1',
    description: 'Deskripsi Pelatihan 1...',
    comments: 10,
    rating: 4.2,
    dilihat: 50,
    price: 'Rp.100.000',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pelatihan 1',
    description: 'Deskripsi Pelatihan 1...',
    comments: 10,
    rating: 4.2,
    dilihat: 50,
    price: 'Rp.100.000',
  },

];

const ProductCard = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="text">
        <h4>Pelatihan</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid molestias molestiae esse inventore voluptatibus officia inventore voluptatibus officia
          <Button>Tampilkan semua</Button>
        </p>
        <br />
      </div>
      {data.map((item, index) => (
        <Card key={index} className="w-64 m-2" cover={<img alt="Gambar Pelatihan" src={item.image} />}>
          <Meta
            title={<Text strong>{item.title}</Text>}
            description={
              <>
                <div className="mb-2">
                  <Text>{item.description}</Text>
                </div>
                <div className="mb-2">
                  <CommentOutlined style={{ marginRight: '4px' }} />
                  <span>{item.comments} Komentar</span>
                </div>
                <div className="mb-2">
                  <EyeOutlined style={{ marginRight: '4px' }} />
                  <span>Dilihat oleh: {item.dilihat} orang</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <StarOutlined style={{ color: 'gold', marginRight: '4px' }} />
                    <span>{item.rating}</span>
                  </div>
                  <div>
                    <Text type="danger">{item.price}</Text>
                  </div>
                </div>
              </>
            }
          />
        </Card>
      ))}
      <RightCircleOutlined style={{ fontSize: '24px', margin: '8px', display: 'block', marginTop: 130 }} />
    </div>
  );
};

export default ProductCard;
