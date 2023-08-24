import React, { useState } from 'react';
import { Card, Typography, Collapse, Button, Input } from 'antd';
import { CreditCardOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const PembayaranKartuKredit = () => {
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
          <span>Pay within:  23:59:59</span>
          <div className="mb-2">
            <Title level={5}>Order ID: 12345</Title>
          </div>
          <div className="text-lg font-bold">Total Harga: Rp 100.000</div>
        </Card>
        <Title level={4}>Pilih Metode Pembayaran</Title>
        <span className="text-2xl font-semibold mb-2">Kartu Kredit / Debit</span>
        <p>Complete Payment using your credit or debit card</p>
        <div className="flex flex-col items-center">
          <Input placeholder="Nomor Kartu" className="mb-2" />
          <div className="flex w-full">
            <Input placeholder="CVV" className="mr-2" style={{ flex: 1 }} />
            <Input placeholder="Masa Berlaku" style={{ flex: 2 }} />
          </div>
        </div>
        <p className="text-gray-600 mt-2">Secured Payments by Midtrans</p>
        <div className="flex justify-center mt-4">
          <Button onClick={() => window.location.href = '/market'} style={{ backgroundColor: 'gray', color: 'white' }}>
            Back to Market
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranKartuKredit;
