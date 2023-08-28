import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Register from "./userPages/register"
import Login from "./userPages/login"
import RegistrasiProfile from "./userPages/Registrasi"
import DetailPelatihanPages from "./userPages/detailPelatihanPages"
import PusatPengetahuan from "./userPages/PusatPengetahuan"
import PaymentPage from "./userComponents/pembayaran/HalamanPembayaran"
import Gopay from "./userPages/Pembayaran/gopay"
import Debit from "./userPages/Pembayaran/debit"
import Bca from "./userPages/Pembayaran/bca"
import IsiPengetahuan from "./userPages/IsiPengetahuan"

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
      <Route path="/isiPengetahuan" element={<IsiPengetahuan />} />
      <Route path="/pusatPengetahuan" element={<PusatPengetahuan/>} />
      <Route path="/pembayaran" element={<PaymentPage/>} />
      <Route path="/Bca" element={<Bca/>} />
      <Route path="/Gopay" element={<Gopay />} />
      <Route path="/Debit" element={<Debit/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App