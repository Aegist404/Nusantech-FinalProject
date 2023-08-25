import { Card, Typography, Button } from 'antd';
import { CommentOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';
// import { RightCircleOutlined } from '@ant-design/icons';
import dataKategoriPelatihan from '../../Data/dataKategoriPelatihan'

const { Meta } = Card;
const { Text } = Typography;

const KategoriPelatihan = () => {
  return (
    <div className='ms-5'>
      <div className="flex flex-wrap">
        <div className="text mt-20 ml-8 mb-4">
          <h4 className='font-bold text-xl'>Kategori Pelatihan</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid obcaecati est placeat, deleniti blanditiis expedita et! Et quidem autem 
            <Button className='ml-4'>Tampilkan semua</Button>
          </p>
          <br />
        </div>

        <div className="grid grid-cols-2 ml-8">

        {dataKategoriPelatihan.map((item, index) => (
          <Card key={index} className="w-60 mr-10 mb-4" cover={<img alt="Gambar Pelatihan" src={item.image} />}>
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
        </div>
      </div>
      <hr className='mt-6 mb-8'/>
    </div>
  );
};

export default KategoriPelatihan;
