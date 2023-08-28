import React, { useState } from 'react';
import { Card, Typography, Collapse, Button } from 'antd';
import { BankOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const PembayaranBCA = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center ">
      <div className="w-96 shadow-lg rounded-t-lg bg-white overflow-auto">
        <div className='bg-blue-100 h-32 p-6'>
          <Title level={3} className="mb-4">
            Nusa KMS
          </Title>
        </div>
        <Card className="mb-4 w-3/4 -mt-12 mx-auto " bordered={false}>
          <span>Pay within: 23:59:59</span>
          <div className="mb-2">
            <Title level={5}>Order ID: 12345</Title>
          </div>
          <div className="text-lg font-bold">Total Harga: Rp 100.000</div>
        </Card>
        <div className='p-6'>
          <Title level={4}>Pilih Metode Pembayaran</Title>
          <span className="text-2xl font-semibold mb-2">BANK BCA</span>
          <p>Complete Payment from BCA to the virtual account number below</p>
          <br />
          <p>Virtual Account Number</p>
          <p>78987898789</p>
          <Collapse
            accordion
            onChange={handleMethodClick}
            activeKey={selectedMethod}
          >
            <Panel header="How to pay" key="bank">
              <Collapse>
                <Panel header="ATM BCA">
                  <span>1. Select other transaction on the main menu </span> <br />
                  <span>2. Select transfer</span> <br />
                  <span>3. Select to BCA Virtual Account</span> <br />
                  <span>4. Insert the BCA Virtual Account number</span> <br />
                  <span>5. Select the payable amount then confirm</span> <br />
                  <span>6. Payment Complete</span> <br />
                </Panel>
              </Collapse>
              {/* Add instructions for KLIK BCA */}
              {/* Add instructions for m-BCA */}
            </Panel>
          </Collapse>
          <div className="flex justify-center mt-4">
            <Button onClick={() => window.location.href = '/market'} style={{ backgroundColor: 'gray', color: 'white' }}>
              Back to Market
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PembayaranBCA;
