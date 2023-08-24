import React from "react";
import { Card, Typography } from "antd";
import { CommentOutlined, StarOutlined, EyeOutlined } from "@ant-design/icons";
import dataPelatihan from "../../Data/dataPelatihan2.jsx";

const { Meta } = Card;
const { Text } = Typography;

const CardPelatihan2 = () => {
  return (
    <div className="flex flex-wrap">
      {dataPelatihan.map((item, index) => (
        <Card
          key={index}
          className="w-[25%] mr-10 mb-4 ml-12"
          cover={<img alt="Gambar Pelatihan" src={item.image} />}
        >
          <Meta
            title={<Text strong>{item.title}</Text>}
            description={
              <>
                <div className="mb-2">
                  <Text>{item.description}</Text>
                </div>
                <div className="mb-2">
                  <CommentOutlined style={{ marginRight: "4px" }} />
                  <span>{item.comments} Komentar</span>
                </div>
                <div className="mb-2">
                  <EyeOutlined style={{ marginRight: "4px" }} />
                  <span>Dilihat oleh: {item.dilihat} orang</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <StarOutlined
                      style={{ color: "gold", marginRight: "4px" }}
                    />
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
  );
};

export default CardPelatihan2;
