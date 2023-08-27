import React from 'react';
import { Checkbox, Row, Col, Collapse } from 'antd';
// import 'antd/dist/antd.css';

function FilterKategori() {
  return (
    <div className="checkbox-container">
      <Collapse className='w-64 h-64 border-0'>
      <h1>Filter</h1> 
        <Collapse.Panel header="Grup Checkbox" key="1">
          <Checkbox.Group>
            <Row className='gap-y-2'>
              <Col span={24}>
                <Checkbox value="A">Pilihan A</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="B">Pilihan B</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="C">Pilihan C</Checkbox>
              </Col>
              {/* Tambahkan lebih banyak checkbox di sini */}
            </Row>
          </Checkbox.Group>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

export default FilterKategori;
