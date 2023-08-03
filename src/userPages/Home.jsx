import React from 'react'
import MainNavbar from '../userComponents/navbar/MainNavbar'
import KategoriPelatihan from '../userComponents/navbar/kategoriPelatihan/kategoriPelatihan'
import ProductCard from '../userComponents/navbar/Pelatihan/Pelatihan'

const Home = () => {
    return (
        <div>
            <MainNavbar />
            {/* <KategoriPelatihan/> */}
            <ProductCard/>
        </div>
    )
}

export default Home
