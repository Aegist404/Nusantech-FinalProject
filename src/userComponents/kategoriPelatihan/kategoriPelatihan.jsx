import React from 'react';
import { Card, Typography, Button } from 'antd';
// import { CommentOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';
// import { RightCircleOutlined } from '@ant-design/icons';
import dataKategoriPelatihan from '../../Data/dataKategoriPelatihan.jsx';

const { Meta } = Card;
const { Text } = Typography;

const KategoriPelatihan = () => {
  return (
      <div className='ms-2'>
    <div className="flex flex-wrap justify-center">
      <div className="text ms-[1em] me-[2.4em]">
        <h1 className='font-bold text-[20px] mt-12'>Kategori Pelatihan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid molestias molestiae esse inventore voluptatibus officia inventore voluptatibus 
        </p>
        <br />
      </div>
      {dataKategoriPelatihan.map((item, index) => (
        <Card key={index} className="w-[220px] m-2   mb-2" cover={<img alt="Gambar Pelatihan" src={item.image} />}>
          <Meta
            title={<Text strong>{item.title}</Text>}
            description={
              <>
                <div className="">
                  <Text>{item.description}</Text>
                </div>
                {/* <div className="mb-2">
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
                </div> */}
              </>
            }
          />
        </Card>
      ))}
</div>     
    </div>
  );
};

export default KategoriPelatihan;
