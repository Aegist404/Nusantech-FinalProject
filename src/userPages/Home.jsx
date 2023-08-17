import MainNavbar from '../userComponents/navigation/MainNavbar'
import ProductCard from '../userComponents/Pelatihan/Pelatihan'
import MainFooter from '../userComponents/navigation/MainFooter'
import Banner from '../userComponents/banner/Banner'
import KategoriPelatihan from '../userComponents/kategoriPelatihan/kategoriPelatihan'
// import Comment from '../informasi/Comment'

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
