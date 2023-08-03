import MainNavbar from '../userComponents/navbar/MainNavbar'
// import KategoriPelatihan from '../userComponents/navbar/kategoriPelatihan/kategoriPelatihan'
import ProductCard from '../userComponents/navbar/Pelatihan/Pelatihan'
import MainFooter from '../userComponents/footer/mainFooter'
const Home = () => {
    return (
        <div>
            <MainNavbar />
            {/* <KategoriPelatihan/> */}
            <ProductCard/>
            <MainFooter />
        </div>
    )
}

export default Home
