import MainNavbar from '../userComponents/navigation/MainNavbar'
import ProductCard from '../userComponents/Pelatihan/Pelatihan'
import MainFooter from '../userComponents/navigation/MainFooter'
import Banner from '../userComponents/banner/Banner'
import KategoriPelatihan from '../userComponents/kategoriPelatihan/kategoriPelatihan'
// import Comment from '../informasi/Comment'

// import KategoriPelatihan from '../userComponents/navbar/kategoriPelatihan/kategoriPelatihan'
// import ProductCard from '../userComponents/navbar/Pelatihan/Pelatihan'
// import MainFooter from '../userComponents/footer/mainFooter'

// import BannerPelatihan from '../userComponents/bannerPelatihan/bannerPelatihan'
const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Banner />
            {/* <Comment/> */}
            <KategoriPelatihan/>
            <ProductCard/>
            <MainFooter />
        </div>
    )
}

export default Home
