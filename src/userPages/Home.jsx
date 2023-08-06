import MainNavbar from '../userComponents/navigation/mainNavbar'
import ProductCard from '../userComponents/Pelatihan/Pelatihan'
import MainFooter from '../userComponents/navigation/MainFooter'
import Banner from '../userComponents/banner/Banner'
import InfoPelajaran from '../informasi/InfoPelatihan'
// import Comment from '../informasi/Comment'

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <Banner />
            <InfoPelajaran/>
            {/* <Comment/> */}
            <ProductCard/>
            <MainFooter />
        </div>
    )
}

export default Home
