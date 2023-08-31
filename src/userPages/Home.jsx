import MainNavbar from "../userComponents/navigation/MainNavbar";
import MainFooter from "../userComponents/navigation/MainFooter";
import Banner from "../userComponents/banner/Banner";
import KategoriPelatihan from "../userComponents/kategoriPelatihan/kategoriPelatihan";
import CardPelatihan from "../userComponents/Pelatihan/Pelatihan1/CardPelatihan";


const Home = () => {
  return (
    <>
      <MainNavbar />
      <Banner />
      <KategoriPelatihan />
      <CardPelatihan  />
      <MainFooter />
    </>
  );
};

export default Home;
