import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"
import Progres from "./userPages/progres"
import DetailPelatihanPages from "./userPages/detailPelatihanPages"
import Pembayaran from "./userComponents/pembayaran/HalamanPembayaran"
import PembayaranBCA from "./userComponents/pembayaran/PembayaranBca"
import PembayaranGopay from "./userComponents/pembayaran/PembayaranGopay"
import PembayaranKartuKredit from "./userComponents/pembayaran/PembayaranDebit"
import Registrasi from "./userPages/Registrasi"
import DetailPembelian from "./userComponents/DeteilPembelian/DetailPembelian"
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
      <Route path="/registrasi" element={<Registrasi/>} />
      <Route path="/progres" element={<Progres/>} />
      <Route path="/detailPelatihan" element={<DetailPelatihanPages/>} />
      <Route path="/edit" element={<DetailPembelian/>} />
      <Route path="/pembayaran" element={<Pembayaran/>} />
      <Route path="/BCA" element={<PembayaranBCA/>} />
      <Route path="/Gopay" element={<PembayaranGopay/>} />
      <Route path="/Debit" element={<PembayaranKartuKredit/>} />

    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App