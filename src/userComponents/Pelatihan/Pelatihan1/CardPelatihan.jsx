import { Card, Typography, Button } from 'antd';
import { CommentOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';
import dataPelatihan from '../../../Data/dataPelatihan.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';


const { Meta } = Card;
const { Text } = Typography; 

const CardPelatihan = () => {
  return (
    <div className="flex flex-wrap">
      <div className="text ml-12">
        <h4  className='font-bold text-xl'>Pelatihan</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid obcaecati est placeat, deleniti blanditiis expedita et! Et quidem autem 
            <Button className='ml-4'>Tampilkan semua</Button>
          </p>
        <br />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {dataPelatihan.map((item, index) => (
        <SwiperSlide key={Card.item}>
        <Card key={index} className="w-60 mr-10 mb-4 ml-12" cover={<img alt="Gambar Pelatihan" src={item.image} />}>
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
        </SwiperSlide>
      ))}
      </Swiper>
      
      {/* <RightCircleOutlined style={{ fontSize: '24px', margin: '8px', display: 'block', marginTop: 130 }} /> */}
    </div>
  );
};

export default CardPelatihan;