import React, { useState } from 'react';
import { Card, Typography, Collapse } from 'antd';

import { ShoppingOutlined, BankOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
          <Link to="/BCA" className="text-blue-600 cursor-pointer hover:underline">BCA</Link>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">Mandiri</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">BRI</span>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">BNI</span>
        </div>
      );
    } else if (method === 'credit') {
      return (
        <div className="payment-options">
          <Link to="/Debit" className="text-blue-600 cursor-pointer hover:underline">Visa</Link >
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">Master Card</span>
        </div>
      );
    } else if (method === 'E-wallets') {
      return (
        <div className="payment-options">
          <Link to="/Gopay" className="text-blue-600 cursor-pointer hover:underline">Gopay</Link>
          <span className="text-blue-600 cursor-pointer hover:underline ml-4">OVO</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-96 shadow-lg rounded-t-lg bg-white">
        <div className='bg-blue-100 h-32 p-6'>
          <Title level={3} className="mb-4">
            Nusa KMS
          </Title>
        </div>
        <Card className="mb-4 bg-opacity-100 border-1 rounded-2xl mx-auto h-28 border-black -mt-12 p-5 w-5/6">
          <div className="flex justify-between items-center p-2">
            <span className="text-gray-600 -mt-12">Pay within: 23:59:59</span>
          </div>
          <div className="-mt-4">
            <h5>Order ID: 12345</h5>
          </div>
          <div className="text-lg  font-bold">Total Harga: Rp 100.000</div>
        </Card>
        <div className='p-5' >
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
    </div>
  );
};

export default PaymentPage;
