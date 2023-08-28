import React from 'react';
import { Layout, Menu } from 'antd';
import MainNavbar from '../userComponents/navigation/MainNavbar';
import CardPelatihan2 from '../userComponents/Pelatihan/pelatihan2/CardPelatihan2';
import MainFooter from '../userComponents/navigation/MainFooter';
import HalamanPelatihan from '../userComponents/Pelatihan/pelatihan2/halamanPelatihan';
import SortPengetahuan from '../userComponents/pusatPengetahuan/sortPengetahuan';
import FilterKategori from '../userComponents/pusatPengetahuan/FilterKategori';

const { Content, Sider } = Layout;

function PusatPengetahuan() {
  return (
    <div>
      <MainNavbar />
      <Layout className="min-h-screen">
        <Sider width={250} theme="dark">
        <h1 className='text-white text-[20px] font-bold ml-5 mt-10'>Filter</h1>
        <div className='pl-10'>
        <FilterKategori />
        </div>
          {/* <Menu theme="dark" mode="vertical">
            <Menu.Item key="1">
            </Menu.Item>
            <Menu.Item key="2">
              <h1 className='ml-6'>Kategory <span></span></h1>
            </Menu.Item>
            <div className='ml-10'>
            <Menu.Item key="3">
              <h1>Kategori 1</h1>
            </Menu.Item>
            <Menu.Item key="4">
            <h1>Kategori 2</h1>
            </Menu.Item>
            <Menu.Item key="5">
            <h1>Kategori 3</h1>
            </Menu.Item>
            <Menu.Item key="6">
            <h1>Kategori 4</h1>
            </Menu.Item>
            <Menu.Item key="7">
            <h1>Kategori 5</h1>
            </Menu.Item>
            <Menu.Item key="8">
            <h1>.....</h1>
            </Menu.Item>
            </div>
          </Menu> */}
        </Sider>
        <Layout>
          <Content>
            <div>
              <div>
              <SortPengetahuan /> 
              </div>
              <CardPelatihan2 />
            </div>
          </Content>
          <div className='flex justify-center ml-[61%]'>
      <HalamanPelatihan />
          </div>
        </Layout>
      </Layout>
      <MainFooter />
    </div>
  );
}

export default PusatPengetahuan;
