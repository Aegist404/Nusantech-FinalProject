import React, { useState } from 'react';
import { Card, Typography, Collapse, Button } from 'antd';
import QRCode from 'qrcode.react'; // Import the QRCode component
import { BarcodeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const PembayaranGopay = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="w-99 p-4 shadow-lg rounded-t-lg bg-white overflow-auto">
        <Title level={3} className="mb-4">
          Nusa KMS
        </Title>
        <Card className="mb-4 bg-transparent" bordered={false}>
          <span>Pay within: 23:59:59</span>
          <div className="mb-2">
            <Title level={5}>Order ID: 12345</Title>
          </div>
          <div className="text-lg font-bold">Total Harga: Rp 100.000</div>
        </Card>
        <Title level={4}>Pilih Metode Pembayaran</Title>
        <span className="text-2xl font-semibold mb-2">GOPAY</span>
        <p>Complete Payment using the QR Code below</p>
        <div className="flex justify-center items-center my-4">
          <QRCode value="https://example.com/payment-url" size={200} /> {/* Replace with your payment URL */}
        </div>
        <Collapse
          accordion
          onChange={handleMethodClick}
          activeKey={selectedMethod}
        >
          <Panel header="How to pay" key="gopay">
            <Collapse>
              <Panel header="Scan QR Code">
                <span>1. Open your GoPay app</span> <br />
                <span>2. Tap on the "Scan QR Code" option</span> <br />
                <span>3. Align the QR code within the frame</span> <br />
                <span>4. Confirm the payment</span> <br />
                <span>5. Payment Complete</span> <br />
              </Panel>
            </Collapse>
            {/* Add instructions for other methods */}
          </Panel>
        </Collapse>
        <div className="flex justify-center mt-4">
          <Button onClick={() => window.location.href = '/market'} style={{ backgroundColor: 'gray', color: 'white' }}>
            Back to Market
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranGopay;
