import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"
import IsiPengetahuan from "./userPages/IsiPengetahuan"
import DetailPelatihanPages from "./userPages/pagesTransaksi/detailPelatihanPages"
import PusatPengetahuan from "./userPages/PusatPengetahuan"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/isipengetahuan" element={<IsiPengetahuan/>} />
      <Route path="/detailPelatihan" element={<DetailPelatihanPages/>} />
      <Route path="/pusatPengetahuan" element={<PusatPengetahuan />} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App