import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Register from "./userPages/register"
import Login from "./userPages/login"
import RegistrasiProfile from "./userPages/Registrasi"
import DetailPelatihanPages from "./userPages/detailPelatihanPages"
import PusatPengetahuan from "./userPages/PusatPengetahuan"
import DetailPelatihan from "./userComponents/beliPelatihan/detailPelatihan"
import PaymentPage from "./userComponents/pembayaran/HalamanPembayaran"
import PembayaranBCA from "./userComponents/pembayaran/PembayaranBca"
import PembayaranKartuKredit from "./userComponents/pembayaran/PembayaranDebit"
import PembayaranGopay from "./userComponents/pembayaran/PembayaranGopay"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registrasi" element={<RegistrasiProfile/>} />
      <Route path="/detailPelatihan" element={<DetailPelatihanPages />} />
      <Route path="/pusatPengetahuan" element={<PusatPengetahuan/>} />
      <Route path="/edit" element={<DetailPelatihan/>} />
      <Route path="/pembayaran" element={<PaymentPage/>} />
      <Route path="/BCA" element={<PembayaranBCA/>} />
      <Route path="/Gopay" element={<PembayaranGopay />} />
      <Route path="/Debit" element={<PembayaranKartuKredit/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App