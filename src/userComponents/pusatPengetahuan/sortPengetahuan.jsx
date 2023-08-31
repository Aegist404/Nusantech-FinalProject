import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Newest
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Oldest
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Most Watched
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Highest 
      </a>
    ),
  },
];
const SortPengetahuan = () => (
  <Space direction="vertical" className='mx-12 my-5'>
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button>Sort</Button>
      </Dropdown>
        <Button>Reset</Button>
</Space>
  </Space>
);
export default SortPengetahuan;
        