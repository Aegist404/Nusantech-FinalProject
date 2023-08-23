import React, { useState } from 'react';
import { Card, Typography, Collapse } from 'antd';

import { ShoppingOutlined, BankOutlined, CreditCardOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const renderPaymentOptions = (method) => {
    if (method === 'bank') {
      return (
        <div className="payment-options">
          <span className="text-blue-600 cursor-pointer hover:underline">BCA</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">Mandiri</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">BRI</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">BNI</span>
        </div>
      );
    } else if (method === 'credit') {
      return (
        <div className="payment-options">
          <span className="text-blue-600 cursor-pointer hover:underline">Visa</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">Master Card</span>
        </div>
      );
    } else if (method === 'E-wallets') {
      return (
        <div className="payment-options">
          <span className="text-blue-600 cursor-pointer hover:underline">Gopay</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">OVO</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-96 p-6 shadow-lg rounded-t-lg bg-white">
        <Title level={3} className="mb-4">
          Nusa KMS
        </Title>
        <Card className="mb-4 bg-transparent border-none">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Pay within: 23:59:59</span>
          </div>
          <div className="mb-2">
            <Title level={5}>Order ID: 12345</Title>
          </div>
          <div className="text-lg font-bold">Total Harga: Rp 100.000</div>
        </Card>
        <Title level={4}>Pilih Metode Pembayaran</Title>
        <Collapse
          accordion
          onChange={handleMethodClick}
          activeKey={selectedMethod}
        >
          <Panel header="Bank Transfer" key="bank">
            {renderPaymentOptions('bank')}
          </Panel>
          <Panel header="Credit Card" key="credit">
            {renderPaymentOptions('credit')}
          </Panel>
          <Panel header="E-wallets" key="E-wallets">
            {renderPaymentOptions('E-wallets')}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PaymentPage;
