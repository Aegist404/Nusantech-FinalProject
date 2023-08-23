import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"
import Progres from "./userPages/progres"
import DetailPelatihanPages from "./userPages/detailPelatihanPages"
import Pembayaran from "./userComponents/pembayaran/HalamanPembayaran"
import PembayaranBCA from "./userComponents/pembayaran/PembayaranBca"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/progres" element={<Progres/>} />
      <Route path="/detailPelatihan" element={<DetailPelatihanPages/>} />
      <Route path="/pembayaran" element={<Pembayaran/>} />
      <Route path="/BCA" element={<PembayaranBCA/>} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App