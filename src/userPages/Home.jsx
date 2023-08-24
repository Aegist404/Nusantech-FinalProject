import MainNavbar from "../userComponents/navigation/MainNavbar";
import MainFooter from "../userComponents/navigation/MainFooter";
import Banner from "../userComponents/banner/Banner";
import KategoriPelatihan from "../userComponents/kategoriPelatihan/kategoriPelatihan";
import { Button } from "antd";
import CardPelatihan from "../userComponents/Pelatihan/CardPelatihan";

// import Comment from '../informasi/Comment'

// import KategoriPelatihan from '../userComponents/navbar/kategoriPelatihan/kategoriPelatihan'
// import ProductCard from '../userComponents/navbar/Pelatihan/Pelatihan'
// import MainFooter from '../userComponents/footer/mainFooter'

// import BannerPelatihan from '../userComponents/bannerPelatihan/bannerPelatihan'
const Home = () => {
  return (
    <>
      <MainNavbar />
      <Banner />
      {/* <Comment/> */}
      <KategoriPelatihan />
      <CardPelatihan  />
      <MainFooter />
    </>
  );
};

export default Home;
