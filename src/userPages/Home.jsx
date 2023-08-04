import MainNavbar from '../userComponents/navigation/mainNavbar'
import ProductCard from '../userComponents/Pelatihan/Pelatihan'
import MainFooter from '../userComponents/navigation/MainFooter'
import Banner from '../userComponents/banner/Banner'

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Banner />
            <ProductCard/>
            <MainFooter />
        </div>
    )
}

export default Home
