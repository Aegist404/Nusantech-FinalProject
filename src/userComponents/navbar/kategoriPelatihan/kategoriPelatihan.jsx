import { Button } from 'antd';
import React from 'react';
import { Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const data = [
  {
    title: 'Kategori 1',
    description: 'Deskipsi Kategori',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Kategori 2',
    description: 'Deskripsi Kategori',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Kategori 3',
    description: 'Deskripsi Kategori',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Kategori 4',
    description: 'Deskripsi Kategori',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Kategori 5',
    description: 'Deskripsi Kategori',
    image: 'https://via.placeholder.com/150',
  },
];

const KategoriPelatihan = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="text">
        <h4>Kategori Pelatihan</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid molestias molestiae esse inventore voluptatibus officia inventore voluptatibus officia
            
        </p>
        <br />
      </div>
      {data.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 200, height: 300, margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div
            className="w-24 h-24 rounded-full overflow-hidden"
            style={{ border: '2px solid #ccc' }}
          >
            <img
              alt={item.title}
              src={item.image}
              className="object-cover w-full h-full"
            />
          </div>
          <Meta title={item.title} description={item.description} />
        </Card>
      ))}
      <RightCircleOutlined
        style={{ fontSize: '24px', margin: '8px', display: 'block', marginTop: 130 }}
      />
    </div>
  );
};

export default KategoriPelatihan;
