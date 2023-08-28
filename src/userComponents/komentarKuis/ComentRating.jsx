// RatingResult.jsx
import React from 'react';
import { Rate, List, Tooltip } from 'antd';
import { WhatsAppOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const RatingResult = () => {
  const ratingResults = [
    { category: 'A', rating: 4, date: '2023-08-25', description: 'This product exceeded my expectations...', },
  ];

  return (
    <div>
      
      <List
        itemLayout="vertical"
        dataSource={ratingResults}
        renderItem={result => (
          <List.Item>
            <div className="flex items-start p-4 border rounded-lg shadow-md mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 to-purple-600 flex justify-center items-center mr-4">
                <p className="text-3xl font-bold text-white">Apip</p>
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold mb-1">Apip</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="mr-2">
                    <Rate disabled defaultValue={result.rating} />
                  <p className="text-sm text-gray-500">Category: {result.category}</p>
                  </div>
                  <div className="flex">
                    <Tooltip title="WhatsApp">
                      <a href="https://wa.me/your-whatsapp-link" className="mr-2">
                        <WhatsAppOutlined className="text-green-600 hover:text-green-800 text-2xl" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Facebook">
                      <a href="https://www.facebook.com/your-facebook-link" className="mr-2">
                        <FacebookOutlined className="text-blue-600 hover:text-blue-800 text-2xl" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Instagram">
                      <a href="https://www.instagram.com/your-instagram-link">
                        <InstagramOutlined className="text-pink-600 hover:text-pink-800 text-2xl" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">Date: {result.date}</p>
                <div className="border-t border-gray-300 mt-2 pt-2">
                  <p className="text-sm whitespace-pre-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus eius quam accusantium tenetur quae quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel ipsam, dicta quidem suscipit quibusdam temporibus!</p>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RatingResult;
