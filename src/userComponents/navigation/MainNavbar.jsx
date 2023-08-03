import { DownOutlined, BellOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
]

const MainNavbar = () => {
    return (
        <>
            <nav className="text-md bg-500 py-5 px-20 flex justify-between items-center shadow-md">
                {/* Logo Perusahaan */}
                <div className="text-lg font-medium">Nusa Learning</div>

                {/* Search Bar */}
                <div className="flex-grow mx-40">
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-10 border focus:outline-none"
                        placeholder="Cari pelatihan..."
                    />
                </div>

                {/* Link dengan Icon */}
                <div className="flex space-x-10">
                    <a href="#" className="hover:underline">
                        Beranda
                    </a>
                    <a href="#" className="hover:underline">
                        Pelatihan
                    </a>

                    <a href="">
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    ID
                                    <DownOutlined className='text-xs' />
                                </Space>
                            </a>
                        </Dropdown>
                    </a>

                    <a href="#" className="hover:underline">
                    <BellOutlined className='text-[20px]' />
                    </a>
                    <a href="#" className="hover:underline">
                        Login
                    </a>
                </div>
            </nav>
        </>

    )
}

export default MainNavbar;